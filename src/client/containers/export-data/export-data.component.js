import React from 'react';
import Button from '../../components/button/button.component';
// import PropTypes from 'prop-types';

const ExportData = () => {
  const objectTocsv = function(data) {
    const csvRows = [];

    // get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // loop over the rows & format the data
    data.forEach((row) => {
      const values = headers.map((header) => {
        const escaped = `${row[header]}`.replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    });
    return csvRows.join('\n');
  };

  //   Method to download csv file from browser - Browsers that support HTML5 download attribute
  const download = function(data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'exportedData.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  //   Fetching data from endpoint
  const getRequest = async function() {
    const jsonUrl = 'https://jsonplaceholder.typicode.com/users';
    // http://localhost:3000/api/sensor-reading/
    const res = await fetch(jsonUrl);
    const json = await res.json();

    const csvData = objectTocsv(json);
    download(csvData);
  };
  return (
    <>
      <div>
        <Button type="primary" onClick={getRequest}>
          {' '}
          Export data
        </Button>
      </div>
    </>
  );
};
export default ExportData;

// ExportData.propTypes = {
//   materialId: PropTypes.string.isRequired,
// };
