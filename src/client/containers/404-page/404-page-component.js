import React from 'react';
import SidebarMenu from '../components/sidebar/sidebar.component';
import Page404 from '../../components/page404/page404.component';

const Page404Container = () => {
  return (
    <>
      <div>
        <SidebarMenu isactive={true} isuser={true} />
      </div>
      <div>
        <Page404 />
      </div>
    </>
  );
};

export default Page404Container;
