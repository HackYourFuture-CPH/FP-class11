import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import SectionHeader from './section-header.component';

export default {
  component: SectionHeader,
  title: 'Headers',
  decorators: [withKnobs],
};

const sectionTitles = ['Crop', 'Stage Details', 'Trays and Tanks', 'Costs'];

export const SectionHeaders = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#ebecf0',
          display: 'flex',
          flexDirection: 'column',
          height: '20em',
          justifyContent: 'space-around',
        }}
      >
        {sectionTitles.map((title, index) => {
          return (
            <SectionHeader onClick={action('header clicked')} tabIndex={index}>
              {title}
            </SectionHeader>
          );
        })}
      </div>
      <pre>{`<SectionHeader onClick={handleClick} tabIndex={0}>Crop</SectionHeader>`}</pre>
    </>
  );
};
