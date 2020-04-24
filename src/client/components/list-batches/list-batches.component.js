import React from 'react';
import './list-batches.style.css';
import PropTypes from 'prop-types';
import moment from 'moment';

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
            batchData.map((batch) => (
              <tr key={batch.id}>
                <td>Batch #{batch.id}</td>
                <td>
                  {batch.plant_variety}- {batch.name}
                </td>
                <td>{batch.customer_name}</td>
                <td>{batch.status}</td>
                <td>
                  {batch.current_stage.stage}- Day{' '}
                  {batch.current_stage.day > 0 ? batch.current_stage.day : 0}
                </td>
                <td>{batch.number_of_seeded_pots}</td>
                <td>{moment(batch.seeding_date).format('DD MMMM YYYY')}</td>
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
