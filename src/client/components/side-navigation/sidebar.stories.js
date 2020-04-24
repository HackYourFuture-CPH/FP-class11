import React from 'react';
import SidebarMenu from './sidebar.component';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@storybook/addon-knobs/register';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  decorators: [withKnobs],
};

export const SidebarActive = () => {
  const text = ('value', 'dashboard');
<<<<<<< HEAD
  const isActive = boolean('isActive', true);
=======
  const buttonActive = boolean('isActive', true);
>>>>>>> fc987e20f6d71c68775b84dbac651ada41903a4a
  const isVisible = boolean('isVisible', true);
  const showDashboard = action('show dashboard');
  const showBatchDetails = action('show batch details');
  const showAddBatch = action('show add batch');
  const logout = action('logout');
<<<<<<< HEAD

  return (
    <SidebarMenu
      text={text}
      isActive={isActive}
=======
  return (
    <SidebarMenu
      text={text}
      isActive={buttonActive}
>>>>>>> fc987e20f6d71c68775b84dbac651ada41903a4a
      isVisible={isVisible}
      showDashboard={showDashboard}
      showBatchDetails={showBatchDetails}
      showAddBatch={showAddBatch}
      logout={logout}
    />
  );
};
