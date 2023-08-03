import React from "react";
import MoodDonutChart from "./MoodDonutChart";
import ActivitiesBarChart from "./ActivitiesBarChart";
import CalendarChart from "./CalendarChart";

function StatsList() {
  return (
    <main className="stats-list">
        <MoodDonutChart />
        <ActivitiesBarChart />
        <CalendarChart />
    </main>
  );
}

export default StatsList;
