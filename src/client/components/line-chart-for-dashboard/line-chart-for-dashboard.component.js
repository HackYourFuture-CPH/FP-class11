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

const LineChartForDashboard = ({
  tempData,
  strokeGrid,
  strokeAxis,
  minColor,
  maxColor,
  optimalValue,
  strokeWidthRef,
  strokeLine,
  strokeWidthLine,
  ReferanceAreaColor,
}) => {
  return (
    <LineChart
      width={300}
      height={200}
      data={tempData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3,3" stroke={strokeGrid} />
      <XAxis
        stroke={strokeAxis}
        dateKey="timestamp"
        domain={['dataMin', 'dataMax']}
        tick={{ fontSize: 8, fill: strokeAxis }}
      />
      <YAxis
        stroke={strokeAxis}
        type="number"
        domain={['dataMin', 'dataMax']}
        tick={{ fontSize: 8, fill: strokeAxis }}
        fill="none"
        ticks={[0, 5, 10, 15, 20, 25]}
      />
      <Tooltip />
      <ReferenceLine y={5} stroke={minColor} strokeWidth={strokeWidthRef} />
      <ReferenceLine
        y={12}
        stroke={optimalValue}
        strokeWidth={strokeWidthRef}
      />
      <ReferenceLine
        y={22}
        stroke={maxColor}
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
        stroke={ReferanceAreaColor}
        strokeOpacity={0.3}
      />
    </LineChart>
  );
};

LineChartForDashboard.propTypes = {
  tempData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  strokeGrid: PropTypes.string.isRequired,
  strokeAxis: PropTypes.string.isRequired,
  minColor: PropTypes.string.isRequired,
  maxColor: PropTypes.string.isRequired,
  optimalValue: PropTypes.string.isRequired,
  strokeWidthRef: PropTypes.number.isRequired,
  strokeLine: PropTypes.string.isRequired,
  strokeWidthLine: PropTypes.number.isRequired,
  ReferanceAreaColor: PropTypes.string.isRequired,
};
export default LineChartForDashboard;
