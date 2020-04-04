import React from 'react';
import './page-detail-chart.style.css';
import PropTypes from 'prop-types';
import DetailChart from '../../components/detail-chart/detail-chart.component';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import ProgressBar from '../../components/progress-bar/progress-bar.component';
import Footer from '../../components/footer/footer.component';
import DateRange from '../../components/date-range/date-range.component';
import data from '../../assets/lettuce.json';

const ChartDetailPage = ({ title }) => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <h1>{title}</h1>
        <ProgressBar />
        <DateRange />
        <DetailChart data={data} />;
        <Footer />
      </div>
    </>
  );
};

export default ChartDetailPage;

ChartDetailPage.propTypes = {
  title: PropTypes.string.isRequired,
};
