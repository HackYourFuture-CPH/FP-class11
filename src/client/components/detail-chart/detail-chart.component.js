/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import './detail-chart.style.css';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  Line,
  ReferenceArea,
  ReferenceLine,
} from 'recharts';

export default function DetailChart({ data, boundary, description, unit }) {
  console.log(data);

  const formatXAxis = () =>
    data.map((sensor) => sensor.created_at.slice(0, 13));

  return (
    <ResponsiveContainer
      className="detail-chart-container"
      width="100%"
      height={400}
    >
      <LineChart data={data} margin={{ right: 80 }}>
        <XAxis
          stroke="#DDE0E3"
          dataKey={formatXAxis}
          name="Time"
          height={50}
          domain={['dataMin', 'dataMax']}
          tick={{
            fontFamily: 'Roboto',
            textAlign: 'right',
            fontSize: 8,
            fill: '#A3A3A3',
          }}
        />
        <YAxis
          stroke="#DDE0E3"
          type="number"
          domain={[boundary.minimum - 3, boundary.maximum + 3]}
          tick={{
            transform: 'translate(-20, 0)',
            fontFamily: 'Open Sans',
            fontSize: 10,
            fill: '#666666',
          }}
          fill="none"
        />
        <Tooltip />
        <ReferenceLine y={boundary.optimum} stroke="#6F9C67" strokeWidth={2} />
        <ReferenceLine y={boundary.maximum} stroke="#9C5256" strokeWidth={2} />
        <ReferenceLine y={boundary.minimum} stroke="#9C5256" strokeWidth={2} />
        <ReferenceArea
          y1={boundary.minimum + 2}
          y2={boundary.optimum - 2}
          stroke="#808080"
          strokeOpacity={0.3}
        />
        <Line
          type="monotone"
          name={description}
          unit={unit}
          dataKey="reading_value"
          stroke="#000000"
          fill="#000000"
          strokeWidth={2}
        />
        <Brush
          className="range-bar"
          startIndex={0}
          endIndex={10}
          stroke="#73ABD7"
          height={30}
          travellerWidth={15}
          gap={5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

DetailChart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  boundary: PropTypes.oneOfType([PropTypes.object]).isRequired,
  description: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};
