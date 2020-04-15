import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Line,
  ReferenceArea,
} from 'recharts';

export default function LineChartForDashboard({
  data,
  materialId,
  boundary,
  description,
  unit,
  showDetailChartFunc,
}) {
  const { sensorsReadings } = data;

  const filterByMaterialId = sensorsReadings.filter(
    (sensor) => sensor.fk_material_id === materialId,
  );

  const formatXAxis = () =>
    filterByMaterialId.map((sensor) => sensor.created_at.slice(0, 13));

  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart
        data={filterByMaterialId}
        margin={{ top: 10, right: 20, bottom: 5, left: -28 }}
        onClick={showDetailChartFunc}
      >
        <CartesianGrid
          strokeDasharray="3,3"
          stroke="#fff"
          horizontal={false}
          vertical={false}
          fill="rgba(255,255,255, 0.5)"
        />
        <XAxis
          stroke="#666"
          dataKey={formatXAxis}
          domain={['dataMin', 'dataMax']}
          tick={{ fill: '#666' }}
        />
        <YAxis
          stroke="#666"
          type="number"
          domain={[boundary.minimum - 3, boundary.maximum + 3]}
          tick={{ fill: '#666' }}
          fill="none"
        />
        <Tooltip />
        <ReferenceLine y={boundary.optimum} stroke="#709d68" strokeWidth={2} />
        <ReferenceLine y={boundary.maximum} stroke="#f27eb1" strokeWidth={2} />
        <ReferenceLine y={boundary.minimum} stroke="#f27eb1" strokeWidth={2} />
        <Line
          type="monotone"
          name={description}
          unit={unit}
          dataKey="reading_value"
          stroke="#000"
          strokeWidth={2}
        />
        <ReferenceArea
          y1={boundary.minimum}
          y2={boundary.maximum}
          fill="#c4c4c4"
          fillOpacity={0.3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartForDashboard.defaultProps = {
  materialId: '1',
};

LineChartForDashboard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  materialId: PropTypes.string,
  boundary: PropTypes.oneOfType([PropTypes.object]).isRequired,
  description: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  showDetailChartFunc: PropTypes.func.isRequired,
};
