import React from 'react';
import SidebarMenu from './sidebar.component';
// import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@storybook/addon-knobs/register';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  decorators: [withKnobs],
};

export const SidebarActive = () => {
  const text = ('value', 'dashboard');
  const isActive = boolean('isActive', true);

  return <SidebarMenu text={text} isActive={isActive} />;
};
