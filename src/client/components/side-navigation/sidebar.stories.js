import React from 'react';
import SidebarMenu from './sidebar.component';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-knobs/register';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  decorators: [withKnobs],
};

export const SidebarActive = () => {
  const text = ('value', 'dashboard');
  const buttonActive = boolean('isActive', true);
  const isVisible = boolean('isVisible', true);
  const showDashboard = action('show dashboard');
  const showBatchDetails = action('show batch details');
  const showAddBatch = action('show add batch');
  const logout = action('logout');
  return (
    <SidebarMenu
      text={text}
      isActive={buttonActive}
      isVisible={isVisible}
      showDashboard={showDashboard}
      showBatchDetails={showBatchDetails}
      showAddBatch={showAddBatch}
      logout={logout}
    />
  );
};
