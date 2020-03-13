import React from 'react';
import './detail-chart.style.css';

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  Line,
  ReferenceLine,
} from 'recharts';

import lettuce from './lettuce.json';

export default function DetailChart() {
  return (
    <div className='App'>
      <ResponsiveContainer
        className='chart-container'
        width='100%'
        height={400}
      >
        <LineChart data={lettuce} margin={{right: 80}}>
          <XAxis
            stroke='#DDE0E3'
            dataKey='timestamp'
            height={50}
            domain={['dataMin', 'dataMax']}
            tick={{
              transform: 'translate(-20, 0)',
              fontFamily: 'Roboto',
              textAlign: 'right',
              lineHeight: '10px',
              fontSize: 10,
              fill: '#A3A3A3'
            }}
          />
          <YAxis
            stroke='#DDE0E3'
            type='number'
            domain={['dataMin', 'dataMax']}
            tick={{
              transform: 'translate(-20, 0)',
              fontFamily: 'Open Sans',
              fontSize: 10,
              fill: '#666666',
            }}
            fill='none'
            ticks={[10, 15, 20, 25, 30]}
          />
          <Tooltip />
          <ReferenceLine y={20} stroke='#6F9C67' strokeWidth={2} />
          <ReferenceLine y={15} stroke='#9C5256' strokeWidth={2} />
          <ReferenceLine y={25} stroke='#9C5256' strokeWidth={2} />
          <Line
            type='monotone'
            name='Temperature'
            unit='°C'
            dataKey='temp'
            stroke='#000000'
            fill='#000000'
            strokeWidth={2}
          />

          <Brush
            className='range-bar'
            startIndex={0}
            endIndex={50}
            stroke='#73ABD7'
            width='100%'
            height={20}
            travellerWidth={15}
            gap={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
