import React from "react";
import SingleCard from "../components/reuseable/SingleCard";
import MileChart from "../components/charts/MileChart";
import CarStatsChart from "../components/charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

import "../styles/dashboard.css";

const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};
const tripObj = {
  title: "Daily Trips ",
  totalNumber: 1984,
  icon: "ri-steering-line",
};
const clientObj = {
  title: "Clients Annually",
  totalNumber: "45k",
  icon: "ri-user-line",
};
const distanceObj = {
  title: "Kilomenters Daily",
  totalNumber: 2154,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__wrapper'>
        <div className='dashboard__cards'>
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className='statics'>
          <div className='stats'>
            <h3 className='stats__title'>Miles Statistics</h3>
            <MileChart />
          </div>
          <div className='stats'>
            <h3 className='stats__title'>Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className='recommend__cars-wrapper'>
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
