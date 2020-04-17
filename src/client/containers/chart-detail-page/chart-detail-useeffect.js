import React, { useState, useEffect } from 'react';
import ChartDetailSmartPageHumidity from './chart-detailsmartpage-humidity';
import { getTokenWithHeaders } from '../../firebase/getTokenWithHeaders';
import { ChartDataContext } from './chart-detail-context';

const ChartDetailsWithCropData = () => {
  const [boundary, setBoundary] = useState({});
  const [materialName, setMaterialName] = useState('');
  const [materialId, setMaterialId] = useState('');
  const [sensorData, setSensorData] = useState([]);
  const [active, setActive] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [stages, setStages] = useState([]);

  const buttonClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  const handleClick = (e) => {
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
        setBoundary(boundaryValues);
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
        setSensorData(sensorReadingsJson);
      } catch (error) {
        console.log(error);
      }
    }
    if (materialId !== '') {
      fetchSensorReadingByMaterialId();
    }
  }, [materialId]);

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
        boundary,
        handleClick,
        materialName,
        sensorData,
        buttonClick,
        active,
        startDate,
        currentDate,
        stages,
      }}
    >
      <ChartDetailSmartPageHumidity />
    </ChartDataContext.Provider>
  );
};

export default ChartDetailsWithCropData;
