import React from 'react';
import SidebarMenu from './sidebar.component';
import { action } from '@storybook/addon-actions';
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

export const SidebarActive = () => {
  const text = ('value', 'dashbord');
  const isactive = boolean('active', false, options);
  const logoutFunc = action('logout');
  return (
    <SidebarMenu text={text} isactive={isactive} logoutFunc={logoutFunc} />
  );
};
