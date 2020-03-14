import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './home.component';

test('Home section has correct classname', () => {
  const title = 'home';

  expect(render(<Home />).container.firstChild).toHaveClass(title);
});
