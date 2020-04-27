import React, { useState, useEffect } from 'react';
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
  const [sensorData, setSensorData] = useState([]);
  const [unit, setUnit] = useState('');
  const [startDate, setStartDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [stages, setStages] = useState([]);
  const [selectedChartButtonId, setSelectedChartButtonId] = useState(null);
  const [activeChartButton, setActiveChartButton] = useState(false);
  const [startCustom, setStartCustom] = useState('');
  const [endCustom, setEndCustom] = useState('');
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

  // useeffect for sensorvalues
  useEffect(() => {
    async function fetchSensorReadingByMaterialId() {
      try {
        const headers = await getTokenWithHeaders();
        const getSensorReadings = await fetch(
          `api/sensor-reading/${materialId}`,
          { method: 'GET', headers },
        );
        const sensorReadingsJson = await getSensorReadings.json();
        const getCurrentdateValue = currentDate.split(',');
        const getStartdateValue = startDate.split(',');
        const currentValue = getCurrentdateValue[0].split('/');
        const startValue = getStartdateValue[0].split('/');
        const getNumberOfdays =
          Number(currentValue[1]) - Number(startValue[1]) + Number(1);
        const getTheDataforCurrentDay = getNumberOfdays * 4;
        const getAllDataOfTheBatchTillDate = sensorReadingsJson.slice(
          0,
          getTheDataforCurrentDay,
        );
        // Last 5 days
        if (selectedChartButtonId === 1) {
          const lastFiveDaysSensorData = getAllDataOfTheBatchTillDate.slice(
            -20,
            getAllDataOfTheBatchTillDate.length,
          );
          setSensorData(lastFiveDaysSensorData);
        } // Last Week
        else if (selectedChartButtonId === 2) {
          const lastWeekSensorData = getAllDataOfTheBatchTillDate.slice(
            -28,
            getAllDataOfTheBatchTillDate.length,
          );
          setSensorData(lastWeekSensorData);
        }
        // custom button
        else if (updateClick) {
          const splitCustomStartDateValue = startCustom.split('-');
          const customStartDateValue = splitCustomStartDateValue[2];
          const splitCustomEndDateValue = endCustom.split('-');
          const customEndDateValue = splitCustomEndDateValue[2];
          const customDays = customEndDateValue - customStartDateValue;
          const selectedCustomDays = customDays * 4;
          const customSensorData = getAllDataOfTheBatchTillDate.slice(
            getAllDataOfTheBatchTillDate.length - selectedCustomDays,
            getAllDataOfTheBatchTillDate.length,
          );
          setSensorData(customSensorData);
        }
        // chartdata based on current day of the Batch
        else {
          setSensorData(getAllDataOfTheBatchTillDate);
        }
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
