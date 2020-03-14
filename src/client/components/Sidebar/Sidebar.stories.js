import React from 'react';
import SidebarMenu from './SidebarMenu.component';
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

export const SidebarActive = () => (
  <SidebarMenu
    text={('value', 'dashbord')}
    active={boolean('active', false, options)}
    user={boolean('isuser', true, userOptions)}
  />
);
