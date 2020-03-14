import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Line,
  ReferenceArea,
} from 'recharts';
import data from './data.json';

const LineChartForDashboard = ({
  strokeGrid,
  strokeAxisAndrefArea,
  maxAndmin,
  optimalValue,
  strokeWidthRef,
  strokeLine,
  strokeWidthLine,
}) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3,3" stroke={strokeGrid} />
      <XAxis
        stroke={strokeAxisAndrefArea}
        dateKey="timestamp"
        domain={['dataMin', 'dataMax']}
        tick={{ fontSize: 8, fill: strokeAxisAndrefArea }}
      />
      <YAxis
        stroke={strokeAxisAndrefArea}
        type="number"
        domain={['dataMin', 'dataMax']}
        tick={{ fontSize: 8, fill: strokeAxisAndrefArea }}
        fill="none"
        ticks={[0, 5, 10, 15, 20, 25]}
      />
      <Tooltip />
      <ReferenceLine y={5} stroke={maxAndmin} strokeWidth={strokeWidthRef} />
      <ReferenceLine
        y={12}
        stroke={optimalValue}
        strokeWidth={strokeWidthRef}
      />
      <ReferenceLine
        y={22}
        stroke={maxAndmin}
        label="Max"
        strokeWidth={strokeWidthRef}
      />
      <Line
        type="monotone"
        dataKey="temp"
        stroke={strokeLine}
        strokeWidth={strokeWidthLine}
      />
      <ReferenceArea
        y1={7}
        y2={17}
        stroke={strokeAxisAndrefArea}
        strokeOpacity={0.3}
      />
    </LineChart>
  );
};

LineChartForDashboard.propTypes = {
  strokeGrid: PropTypes.string.isRequired,
  strokeAxisAndrefArea: PropTypes.string.isRequired,
  maxAndmin: PropTypes.string.isRequired,
  optimalValue: PropTypes.string.isRequired,
  strokeWidthRef: PropTypes.number.isRequired,
  strokeLine: PropTypes.string.isRequired,
  strokeWidthLine: PropTypes.number.isRequired,
};
export default LineChartForDashboard;
