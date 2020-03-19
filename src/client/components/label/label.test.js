import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './label.component';

test('Label should contain title', () => {
  const testTitle = 'abc';
  expect(
    render(<Label className="#000" title={testTitle} />).container.firstChild
      .textContent,
  ).toBe(testTitle);
});
