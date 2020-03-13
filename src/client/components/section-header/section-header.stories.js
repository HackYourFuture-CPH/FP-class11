import React from 'react';
import SectionHeader from './section-header.component';
import { storiesOf } from '@storybook/react';

storiesOf('Headers', module).add('Section Headers', () => {
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
        {['Crop', 'Stage Details', 'Trays and Tanks', 'Costs'].map(
          (title, index) => {
            return (
              <SectionHeader onClick={() => null} tabIndex={index}>
                {title}
              </SectionHeader>
            );
          },
        )}
      </div>
      <pre>{`<SectionHeader onClick={handleClick} tabIndex={0}>Crop</SectionHeader>`}</pre>
    </>
  );
});
