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
  const [boundaryData, setBoundaryData] = useState({});
  const [materialName, setMaterialName] = useState(material.value);
  const [materialId, setMaterialId] = useState(material.id);
  const [sensorData, setSensorData] = useState([]);
  const [unit, setUnit] = useState('');
  const [startDate, setStartDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [stages, setStages] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [selectedChartButtonId, setSelectedChartButtonId] = useState(null);
  const buttonClick = async (e) => {
    e.preventDefault();
    setButtonActive(!buttonActive);
  };
  const handleClick = async (e) => {
    e.stopPropagation();
    setMaterialId(e.target.id);
    setMaterialName(e.target.innerText);
  };

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
        if (materialName === 'temperature') {
          setUnit('°C');
        } else if (materialName === 'water_level') {
          setUnit('cm');
        } else if (materialName === 'humidity') {
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

  // useeffect for SensorReadings
  useEffect(() => {
    async function fetchSensorReadingByMaterialId() {
      try {
        const headers = await getTokenWithHeaders();
        const getSensorReadings = await fetch(
          `api/sensor-reading/${materialId}`,
          { method: 'GET', headers },
        );
        const sensorReadingsJson = await getSensorReadings.json();
        const sensorBatchIdData = await sensorReadingsJson.filter(
          (sensorBatchId) => sensorBatchId.fk_batch_id === 1,
        );
        const getCurrentdateValue = currentDate.split(',');
        const getStartdateValue = startDate.split(',');
        const currentValue = getCurrentdateValue[0].split('/');
        const startValue = getStartdateValue[0].split('/');
        const getNumberOfdays = Number(currentValue[0]) - Number(startValue[0]);
        const getTheDataforCurrentDay = getNumberOfdays * 4;
        const getAllDataOfTheBatchTillDate = sensorBatchIdData.slice(
          0,
          getTheDataforCurrentDay,
        );
        if (selectedChartButtonId === 1) {
          const lastFiveDaysSensorData = getAllDataOfTheBatchTillDate.slice(
            getAllDataOfTheBatchTillDate.length - 15,
            getAllDataOfTheBatchTillDate.length,
          );
          setSensorData(lastFiveDaysSensorData);
        } else {
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
  }, [materialId, currentDate, startDate, selectedChartButtonId]);
  // useeffect for progressbar
  useEffect(() => {
    async function fetchProgressBarData() {
      try {
        const headers = await getTokenWithHeaders();
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
        handleClick,
        materialName,
        sensorData,
        buttonClick,
        buttonActive,
        startDate,
        currentDate,
        stages,
        unit,
      }}
    >
      <ChartDetailPage />
    </ChartDataContext.Provider>
  );
};

export default ChartDetailsSmartData;
