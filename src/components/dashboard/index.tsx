import React from 'react';
import Banner from './Banner';
import Store from './Store';
import DcluttrPixel from './DcluttrPixel';
import NavigationBar from '../navigation';

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col border rounded-xl m-5">
      <NavigationBar />
      <div className="flex flex-col gap-9 p-6 border-t">
        <Banner />
        <Store />
        <DcluttrPixel />
      </div>
    </div>
  );
};

export default Dashboard;
