import React from 'react';
import './list-batches.style.css';

const headings = [
  'BATCH#',
  'CROP NAME',
  'CUSTOMER',
  'STATUS',
  'CURRENT STAGE',
  'SEEDING POTS',
  'SEEDING DATE',
];

export default function ListBatches() {
  const columns = headings.map((column) => {
    return <th>{column}</th>;
  });

  const rows = headings.map((row) => {
    return <td>{row}</td>;
  });
  return (
    <table>
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>
        <tr>{rows}</tr>
      </tbody>
    </table>
  );
}
