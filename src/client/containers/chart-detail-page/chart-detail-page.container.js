import React, { useState, useEffect } from 'react';
import ChartDetailPage from '../../components/chart-detail-page-layout/chart-detail-page.component';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';
import { ChartDataContext } from './chart-detail-page.context';

const ChartDetailsSmartData = () => {
  const [boundaryData, setBoundaryData] = useState({});
  const [materialName, setMaterialName] = useState('Temperature');
  const [materialId, setMaterialId] = useState(1);
  const [sensorData, setSensorData] = useState([]);
  const [units, setUnits] = useState('');
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
  // useEffect for optimalvalues
  useEffect(() => {
    async function fetchBatchStagesDefaultData() {
      try {
        const header = await getTokenWithHeaders();
        const getCropStageValue = await fetch(
          'api/batch-default-values/1?stage=current',
          {
            method: 'GET',
            headers: header,
          },
        );
        const getBatchDefaultValues = await getCropStageValue.json();

        let materialNameToLower;
        if (materialName === 'Water') {
          materialNameToLower = await 'water_level';
        } else {
          materialNameToLower = await materialName.toLowerCase();
        }

        const stageParameterValues = await getBatchDefaultValues.filter(
          (stageValue) => stageValue.parameter === materialNameToLower,
        );

        const boundaryValues = {
          optimum: stageParameterValues[0].optimum_value,
          minimum: stageParameterValues[0].min_value,
          maximum: stageParameterValues[0].max_value,
        };
        setBoundaryData(boundaryValues);
        if (materialName === 'Temperature') {
          setUnits('°C');
        } else if (materialName === 'Water') {
          setUnits('cm');
        } else if (materialName === 'Humidity') {
          setUnits('g/m3');
        } else if (materialName === 'PH') {
          setUnits('pH');
        } else if (materialName === 'EC') {
          setUnits('ppm');
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (materialName !== '') {
      fetchBatchStagesDefaultData();
    }
  }, [materialName]);

  // useeffect for SensorReadings
  useEffect(() => {
    async function fetchSensorReadingByMaterialId() {
      try {
        const getSensorReadings = await fetch(
          `api/sensor-reading/${materialId}`,
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
        const getBatchProgressBarValues = await fetch('api/crop-stages/1');
        const BatchProgressBarValuesJson = await getBatchProgressBarValues.json();
        setStartDate(BatchProgressBarValuesJson.startDate);
        setCurrentDate(BatchProgressBarValuesJson.currentDate);
        setStages(BatchProgressBarValuesJson.stages);
      } catch (error) {
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
        units,
        selectedChartButtonId,
        setSelectedChartButtonId,
      }}
    >
      <ChartDetailPage />
    </ChartDataContext.Provider>
  );
};

export default ChartDetailsSmartData;
