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
  const formatXAxis = () =>
    data.map((sensor) => {
      // eslint-disable-next-line no-unused-vars
      const [year, month, datetime] = sensor.created_at.slice(0, 13).split('-');
      const [date, time] = datetime.split('T');
      const datetimeTag = `${date}/${month} ${time}h`;
      return datetimeTag;
    });

  return (
    <ResponsiveContainer
      className="detail-chart-container"
      width="97%"
      height={320}
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
        <ReferenceLine y={boundary.optimum} stroke="#709d68" strokeWidth={2} />
        <ReferenceLine y={boundary.maximum} stroke="#f27eb1" strokeWidth={2} />
        <ReferenceLine y={boundary.minimum} stroke="#f27eb1" strokeWidth={2} />
        <ReferenceArea
          y1={boundary.minimum}
          y2={boundary.maximum}
          fill="#c4c4c4"
          fillOpacity={0.3}
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
          x={data.length}
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
