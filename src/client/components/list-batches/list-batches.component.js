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
  return (
    <>
      <table>
        <thead>
          <tr>{columns}</tr>
        </thead>
        <tbody>
          {batchData.length > 0 ? (
            batchData.map((data) => (
              <tr key={data.id}>
                <td>Batch #{data.id}</td>
                <td>{data.name}</td>
                <td>{data.customer_name}</td>
                <td>{data.status}</td>
                <td>{data.current_stage.stage}</td>
                <td>{data.number_of_seeded_pots}</td>
                <td>{data.seeding_date.slice(0, 10)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

ListBatches.propTypes = {
  batchData: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
