import React from 'react';
import './list-batches.style.css';
import PropTypes from 'prop-types';

const headings = [
  'BATCH#',
  'CROP NAME',
  'CUSTOMER',
  'STATUS',
  'CURRENT STAGE',
  'SEEDING POTS',
  'SEEDING DATE',
];

export default function ListBatches({ batchData }) {
  const columns = headings.map((column) => {
    return <th>{column}</th>;
  });

  const rows = batchData.map((row) => {
    return <td>{row}</td>;
  });
  return (
    <table>
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>
        <tr>{rows.id}</tr>
      </tbody>
    </table>
  );
}

ListBatches.propTypes = {
  batchData: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
