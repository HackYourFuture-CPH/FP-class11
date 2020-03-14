import React from 'react';
import '../Button/Button.style.css';

const DashbordItems = () => {
  const items = [
    { id: 1, value: 'Temperature' },
    { id: 2, value: 'Humidity' },
    { id: 3, value: 'PH' },
    { id: 4, value: 'EC' },
    { id: 5, value: 'Water' },
  ];
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
};

export default DashbordItems;
