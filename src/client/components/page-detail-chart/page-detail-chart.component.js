import React from 'react';
import './page-detail-chart.style.css';
import DetailChart from '../detail-chart/detail-chart.component';
import PropTypes from 'prop-types';
import progressBar from './progress-bar.png';
import dateRange from './date-range.png';

export default function Page({ pageTitle }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page-header">{pageTitle}</h2>
      <img src={progressBar} alt="Progress bar" />
      <img src={dateRange} alt="Date range" />
      <DetailChart />
    </div>
  );
}

Page.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
