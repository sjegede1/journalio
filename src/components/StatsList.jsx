import React, { useContext } from "react";
import MoodDonutChart from "./MoodDonutChart";
import ActivitiesBarChart from "./ActivitiesBarChart";
import { DBContext } from "../contexts/db_context";

function StatsList() {
  let {dbData, username} = useContext(DBContext)
  let userData = dbData.filter(e => e.username === username)
  return (
    <div className="stats-list main">
      <MoodDonutChart userData={userData}  />
      
    </div>
  );
}

export default StatsList;
