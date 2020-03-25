import React from 'react';
import SidebarMenu from './sidebar.component';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@storybook/addon-knobs/register';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  decorators: [withKnobs],
};

const options = {
  active: true,
  inactive: false,
};
const userOptions = {
  isuser: true,
  notuser: false,
};

export const SidebarActive = () => {
  const text = ('value', 'dashbord');
  const isactive = boolean('active', false, options);
  const isuser = boolean('isuser', true, userOptions);
  return <SidebarMenu text={text} isactive={isactive} isuser={isuser} />;
};
