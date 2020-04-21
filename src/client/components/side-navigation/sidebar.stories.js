import React from 'react';
import SidebarMenu from './sidebar.component';
import { withKnobs } from '@storybook/addon-knobs';
import '@storybook/addon-knobs/register';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  decorators: [withKnobs],
};

export const SidebarActive = () => {
  return <SidebarMenu />;
};
