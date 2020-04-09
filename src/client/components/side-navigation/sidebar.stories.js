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

export const SidebarActive = () => {
  const text = ('value', 'dashboard');
  const isActive = boolean('isActive', true);
  const showDashboard = action('show dashboard');
  const showBatchDetails = action('show batch details');
  const showAddBatch = action('show add batch');
  const logout = action('logout');

  return (
    <SidebarMenu
      text={text}
      isActive={isActive}
      showDashboard={showDashboard}
      showBatchDetails={showBatchDetails}
      showAddBatch={showAddBatch}
      logout={logout}
    />
  );
};
