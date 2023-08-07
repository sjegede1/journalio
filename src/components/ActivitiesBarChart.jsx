import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../contexts/db_context";
import Chart from "react-google-charts";

function ActivitiesBarChart({ userData }) {
  const { moods, dbData, activities } = useContext(DBContext);
  const [barData, setBarData] = useState([]);

  const options = {
    width: 300,
    height: 300,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    animation: { startup: true, duration: 1000, easing: "out" },
    orientation: "horizontal",
    hAxis: {
      textStyle: { fontSize: 30 },
      textPosition: "in",
      viewWindowMode: "maximized",
      gridlines: { color: "none" }
    },
    vAxis: { viewWindowMode: "pretty", gridlines: { color: "none" } },
    chartArea: { height: "100%", width: "100%" },
    backgroundColor: "none",
  };

  const chartType = "BarChart";
  const columns = ["Activities", "Count"];
  const getBarData = () => {
    let activitiesCount = [0, 0, 0, 0];
    let activitiesNames = Object.keys(activities);
    let activitiesEmojis = activitiesNames.map((a) => activities[a]);
    let activitiesData;
    userData.forEach((entry) => {
      entry.activities.forEach(
        (a) => activitiesCount[activitiesNames.indexOf(a)]++
      );
    });
    activitiesData = activitiesEmojis.map((e, i) => {
      return [e, activitiesCount[i]];
    });
    activitiesData.unshift(columns);
    setBarData(activitiesData);
    console.log(activitiesData);
  };

  useEffect(() => {
    getBarData();
  }, [dbData]);

  return (
    <div className="chart">
      <Chart
        id="donut-chart"
        chartType={chartType}
        data={barData}
        options={options}
      />
    </div>
  );
}

export default ActivitiesBarChart;
