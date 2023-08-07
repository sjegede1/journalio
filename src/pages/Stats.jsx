import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import StatsList from "../components/StatsList";
import MoodDonutChart from "../components/MoodDonutChart";
import TestChart from "../components/TestChart";

function Stats() {
  return (
    <div className="stats-page page">
      <Header />
        <StatsList />
      <Nav />
    </div>
  );
}

export default Stats;
