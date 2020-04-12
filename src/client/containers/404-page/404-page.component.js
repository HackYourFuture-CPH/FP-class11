import React from 'react';
import SidebarMenu from '../../components/side-navigation/sidebar.component';
import Page404 from '../../components/page404/page404.component';
import Footer from '../../components/footer/footer.component';

const Page404Container = () => {
  return (
    <>
      <div>
        <SidebarMenu isActive={true} isUser={true} />
      </div>
      <div>
        <Page404 />
        <Footer />
      </div>
    </>
  );
};

export default Page404Container;
