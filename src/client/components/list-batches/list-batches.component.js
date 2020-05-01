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

export default function ListBatches({ batchData, openDashboardFunc }) {
  const columns = headings.map((column) => {
    return <th key={column}>{column}</th>;
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
              <tr key={batch.id} onClick={() => openDashboardFunc(batch.id)}>
                <td>Batch #{batch.id}</td>
                <td>
                  {batch.plant_variety}- {batch.name}
                </td>
                <td>{batch.customer_name}</td>
                <td className="capitalize">{batch.status}</td>
                <td className="capitalize">
                  {batch.current_stage.stage}
                  {batch.current_stage.day > 0 &&
                    `- Day ${batch.current_stage.day}`}
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
  openDashboardFunc: PropTypes.func.isRequired,
};
