import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button.component';

storiesOf('Buttons', module)
  .add('Save Crop Details', () => {
    return (
      <>
        <Button variant="save" onClick={() => null}>
          Save Crop Details
        </Button>
        <pre>{`<Button variant="save" onClick={handleClick}>Save Crop Details</Button>`}</pre>
      </>
    );
  })
  .add('Delete Crop', () => {
    return (
      <>
        <Button variant="delete-crop" onClick={() => null}>
          Delete Crop
        </Button>
        <pre>{`<Button variant="delete-crop" onClick={handleClick}>Delete Crop</Button>`}</pre>
      </>
    );
  })
  .add('Export Data', () => {
    return (
      <>
        <Button variant="export" onClick={() => null}>
          Export Data ▼
        </Button>
        <pre>{`<Button variant="export" onClick={handleClick}>Export data ▼</Button>`}</pre>
      </>
    );
  })
  .add('Logout', () => {
    return (
      <>
        <Button variant="logout" onClick={() => null}>
          Logout
        </Button>
        <pre>{`<Button variant="logout" onClick={handleClick}>Logout</Button>`}</pre>
      </>
    );
  })
  .add('Delete', () => {
    return (
      <>
        <Button variant="delete" onClick={() => null}>
          Delete
        </Button>
        <pre>{`<Button variant="delete" onClick={handleClick}>Delete</Button>`}</pre>
      </>
    );
  })
  .add('Cancel', () => {
    return (
      <>
        <Button variant="cancel" onClick={() => null}>
          Cancel
        </Button>
        <pre>{`<Button variant="cancel" onClick={handleClick}>Cancel</Button>`}</pre>
      </>
    );
  })
  .add('Logout, Delete, Cancel', () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '50em',
          backgroundColor: '#EBECF0',
          margin: '0 auto',
        }}
      >
        <Button variant="logout" onClick={() => null}>
          Logout
        </Button>
        <Button variant="delete" onClick={() => null}>
          Delete
        </Button>
        <Button variant="cancel" onClick={() => null}>
          Cancel
        </Button>
        <ul>
          <li>
            <pre>{`<Button variant="logout" onClick={handleClick}>Logout</Button>`}</pre>
          </li>
          <li>
            <pre>{`<Button variant="delete" onClick={handleClick}>Delete</Button>`}</pre>
          </li>
          <li>
            <pre>{`<Button variant="cancel" onClick={handleClick}>Cancel</Button>`}</pre>
          </li>
        </ul>
      </div>
    );
  })
  .add('Toggle buttons', () => {
    return (
      <>
        <h5>toggled is false by default (pass no prop)</h5>
        <div
          style={{
            background: '#E5E5E5',
            display: 'flex',
            'flex-direction': 'row',
            padding: '1em',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="toggle" onClick={() => null}>
            Seeding
          </Button>
          <Button variant="toggle" onClick={() => null}>
            Propagation
          </Button>
          <Button variant="toggle" onClick={() => null}>
            Maturity
          </Button>
          <Button variant="toggle" onClick={() => null}>
            Harvest
          </Button>
        </div>
        <p>
          Example:
          <pre>
            {`<Button variant="toggle" onClick={handleClick}>Seeding</Button>`}
          </pre>
        </p>
        <hr />
        <h5>toggled is true (pass prop toggled)</h5>
        <div
          style={{
            background: '#E5E5E5',
            display: 'flex',
            'flex-direction': 'row',
            padding: '1em',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="toggle" toggled onClick={() => null}>
            Seeding
          </Button>
          <Button variant="toggle" toggled onClick={() => null}>
            Propagation
          </Button>
          <Button variant="toggle" toggled onClick={() => null}>
            Maturity
          </Button>
          <Button variant="toggle" toggled onClick={() => null}>
            Harvest
          </Button>
        </div>
        <p>
          Example:
          <pre>
            {`<Button variant="toggle" toggled onClick={handleClick}>Seeding</Button>`}
          </pre>
        </p>
      </>
    );
  });
