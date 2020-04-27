import React, { useState, useEffect } from 'react';

import moment from 'moment-timezone';

import ChartDetailPage from '../../components/chart-detail-page-layout/chart-detail-page.component';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';
import { ChartDataContext } from './chart-detail-page.context';
import { useParams } from 'react-router-dom';
import { dashboardItems } from '../../components/side-navigation/sidebar.component';

function getMaterialFromSlug(slug) {
  const slugs = dashboardItems.map((item) => item.slug);
  return dashboardItems[slugs.indexOf(slug)];
}

const ChartDetailsSmartData = () => {
  const { materialSlug } = useParams();
  const material = getMaterialFromSlug(materialSlug);
  const [logoutModal, setLogoutModal] = useState(false);
  const [boundaryData, setBoundaryData] = useState({});
  const [materialName, setMaterialName] = useState(material.value);
  const [materialId, setMaterialId] = useState(material.id);
  const [unit, setUnit] = useState('');
  const [stages, setStages] = useState([]);

  const [sensorData, setSensorData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [chartStartDate, setChartStartDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedChartButtonId, setSelectedChartButtonId] = useState(null);
  const [activeChartButton, setActiveChartButton] = useState(false);
  const [startCustom, setStartCustom] = useState('');
  const [endCustom, setEndCustom] = useState(new Date());
  const [updateClick, setUpdateClick] = useState(false);

  useEffect(() => {
    const material2 = getMaterialFromSlug(materialSlug);
    setMaterialId(material2.id);
    setMaterialName(material2.value);
  }, [materialSlug]);

  // useEffect for optimal values
  useEffect(() => {
    async function fetchBatchStagesDefaultData() {
      try {
        const headers = await getTokenWithHeaders();
        const getCropStageValue = await fetch(
          'api/batch-default-values/1?stage=current',
          {
            method: 'GET',
            headers,
          },
        );
        const batchDefaultValues = await getCropStageValue.json();

        let materialNameToLower;
        if (materialName === 'Water') {
          materialNameToLower = await 'water_level';
        } else {
          materialNameToLower = await materialName.toLowerCase();
        }

        const stageParameterValues = await batchDefaultValues.filter(
          (stageValue) => stageValue.parameter === materialNameToLower,
        );

        const boundaryValues = {
          optimum: stageParameterValues[0].optimum_value,
          minimum: stageParameterValues[0].min_value,
          maximum: stageParameterValues[0].max_value,
        };
        setBoundaryData(boundaryValues);
        if (materialName === 'Temperature') {
          setUnit('°C');
        } else if (materialName === 'Water') {
          setUnit('cm');
        } else if (materialName === 'Humidity') {
          setUnit('g/m3');
        } else if (materialName === 'PH') {
          setUnit('pH');
        } else if (materialName === 'EC') {
          setUnit('ppm');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

    if (materialName) {
      fetchBatchStagesDefaultData();
    }
  }, [materialName]);

  useEffect(() => {
    const today = new Date();

    if (selectedChartButtonId === 1) {
      setStartCustom(new Date(today.getTime() - 24 * 60 * 60 * 1000 * 5));
    } else if (selectedChartButtonId === 2) {
      setStartCustom(new Date(today.getTime() - 24 * 60 * 60 * 1000 * 7));
    }
  }, [selectedChartButtonId]);

  // useeffect for sensorvalues
  useEffect(() => {
    const timezone = moment.tz.guess();

    async function fetchSensorReadingByMaterialId() {
      try {
        const headers = await getTokenWithHeaders();
        const getSensorReadings = await fetch(
          `api/sensor-reading/${materialId}`,
          { method: 'GET', headers },
        );
        const sensorReadingsJson = await getSensorReadings.json();
        const getAllDataOfTheBatchTillDate = sensorReadingsJson.map(
          (datapoint) => {
            const convertedDate = moment(datapoint.created_at)
              .tz(timezone)
              .format();
            return { ...datapoint, created_at: convertedDate };
          },
        );

        const dateArr = getAllDataOfTheBatchTillDate.map(
          (datapoint) => datapoint.created_at,
        );
        const orderedDates = dateArr.sort((a, b) => {
          return Date.parse(a) > Date.parse(b);
        });

        const earliestDate = moment(orderedDates[0])
          .tz(timezone)
          .format();

        setChartStartDate(earliestDate.slice(0, 10));

        const dataToDisplay = getAllDataOfTheBatchTillDate.filter(
          (datapoint) => {
            if (startCustom) {
              return (
                new Date(datapoint.created_at) >= new Date(startCustom) &&
                new Date(datapoint.created_at) <= new Date(endCustom)
              );
            }
            return new Date(datapoint.created_at) <= new Date(endCustom);
          },
        );
        setSensorData(dataToDisplay);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
    if (
      (materialId !== '' && currentDate !== '' && startDate !== '') ||
      selectedChartButtonId !== null
    ) {
      fetchSensorReadingByMaterialId();
    }
  }, [
    materialId,
    currentDate,
    startDate,
    selectedChartButtonId,
    updateClick,
    startCustom,
    endCustom,
  ]);

  // useeffect for progressbar
  useEffect(() => {
    async function fetchProgressBarData() {
      try {
        const headers = await getTokenWithHeaders();
        // BatchId hardcoded considering only 1 batch
        const getBatchProgressBarValues = await fetch('api/crop-stages/1', {
          method: 'GET',
          headers,
        });
        const BatchProgressBarValuesJson = await getBatchProgressBarValues.json();
        setStartDate(BatchProgressBarValuesJson.startDate);
        setCurrentDate(BatchProgressBarValuesJson.currentDate);
        setStages(BatchProgressBarValuesJson.stages);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
    if (materialId !== '') {
      fetchProgressBarData();
    }
  }, [materialId]);

  return (
    <ChartDataContext.Provider
      value={{
        boundaryData,
        materialName,
        sensorData,
        chartStartDate,
        startDate,
        currentDate,
        stages,
        unit,
        selectedChartButtonId,
        setSelectedChartButtonId,
        activeChartButton,
        setActiveChartButton,
        setStartCustom,
        setEndCustom,
        updateClick,
        setUpdateClick,
        logoutModal,
        setLogoutModal,
      }}
    >
      <ChartDetailPage />
    </ChartDataContext.Provider>
  );
};

export default ChartDetailsSmartData;
