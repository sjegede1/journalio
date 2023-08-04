import React from "react";
import MoodDonutChart from "./MoodDonutChart";
import ActivitiesBarChart from "./ActivitiesBarChart";

function StatsList() {
  return (
    <main className="stats-list">
        <MoodDonutChart />
        <ActivitiesBarChart />
    </main>
  );
}

export default StatsList;
