import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './label.component';

test('Label has class active when active prop is true', () => {
  expect(
    render(<Label active={true} title="test title" />).container.firstChild,
  ).toHaveClass('active');
});

test('Label does not have class active when active prop is false', () => {
  expect(
    render(<Label active={false} title="test title" />).container.firstChild,
  ).not.toHaveClass('active');
});

test('Label should contain title', () => {
  const testTitle = 'abc';
  expect(
    render(<Label active={true} title={testTitle} />).container.firstChild
      .textContent,
  ).toBe(testTitle);
});
