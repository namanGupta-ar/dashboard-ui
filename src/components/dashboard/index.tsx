import React from 'react';
import Banner from './Banner';
import Store from './Store';
import DcluttrPixel from './DcluttrPixel';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <Store />
      <DcluttrPixel />
    </div>
  );
};

export default Dashboard;
