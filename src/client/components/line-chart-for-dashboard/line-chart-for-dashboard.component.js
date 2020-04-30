import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
    filterByMaterialId.map((sensor) =>
      moment(sensor.created_at).format('DD/MM'),
    );

  return boundary && Object.keys(boundary).length > 0 ? (
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
          tickSize={2}
        />
        <YAxis
          stroke="#666"
          type="number"
          domain={[
            boundary.min_value - (20 / 100) * boundary.min_value,
            boundary.max_value + (10 / 100) * boundary.max_value,
          ]}
          tick={{ fill: '#666' }}
          fill="none"
          ticks={[
            boundary.min_value,
            boundary.optimum_value,
            boundary.max_value,
          ]}
        />
        <Tooltip />
        <ReferenceLine
          y={boundary.optimum_value}
          stroke="#709d68"
          strokeWidth={2}
        />
        <ReferenceLine
          y={boundary.max_value}
          stroke="#f27eb1"
          strokeWidth={2}
        />
        <ReferenceLine
          y={boundary.min_value}
          stroke="#f27eb1"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          name={description}
          unit={unit}
          dataKey="reading_value"
          stroke="#000"
          strokeWidth={2}
        />
        <ReferenceArea
          y1={boundary.min_value}
          y2={boundary.max_value}
          fill="#c4c4c4"
          fillOpacity={0.3}
        />
      </LineChart>
    </ResponsiveContainer>
  ) : (
    <div>No data</div>
  );
}

LineChartForDashboard.defaultProps = {
  materialId: 1,
  boundary: {},
};

LineChartForDashboard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  materialId: PropTypes.number,
  boundary: PropTypes.oneOfType([PropTypes.object]),
  description: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  showDetailChartFunc: PropTypes.func.isRequired,
};
