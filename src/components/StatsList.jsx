import React, { useContext, useEffect, useState } from "react";
import MoodDonutChart from "./MoodDonutChart";
import ActivitiesBarChart from "./ActivitiesBarChart";
import { DBContext } from "../contexts/db_context";

function StatsList() {
  let {dbData, username} = useContext(DBContext)

  return (
    <div className="stats-list main">
      <MoodDonutChart userData={dbData.filter(e => e.username === username)}  />
      <ActivitiesBarChart userData={dbData.filter(e => e.username === username)} />

    </div>
  );
}

export default StatsList;
