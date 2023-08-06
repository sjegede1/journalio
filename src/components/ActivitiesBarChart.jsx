import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../contexts/db_context";
import Chart from "react-google-charts";

function ActivitiesBarChart({ userData }) {
  const { moods, dbData, activities } = useContext(DBContext);
  const [barData, setBarData] = useState([]);

  const options = {
    pieHole: 0.25,
    is3D: false,
    backgroundColor: "none",
    chartArea: { height: "100%", width: "100%" },
    height: 300,
    width: 300,
    legend: "none",
    pieSliceText: "label",
    pieSliceTextStyle: { fontSize: 30 },
    titleTextStyle: { fontSize: 15 },
    enableInteractivity: true,
    animation: {
      startup: true,
      easing: "out",
      duration: 500,
    },
  };

  const chartType = "BarChart";
  const columns = ["Activities", "Count"];
  const getBarData = () => {
    let moodCount = [0, 0, 0, 0, 0];
    let moodEmojis = moods;
    let moodData;
    userData.forEach((entry) => {
      //userData switch
      moodCount[entry.mood]++;
    });
    moodData = moodEmojis.map((e, i) => {
      return [e, moodCount[i]];
    });
    moodData.unshift(columns);
    setBarData(moodData);
  };

  useEffect(() => {
    getBarData();
  }, [dbData]);


  return (
    <div className="chart">
      <h3>Mood Count</h3>
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
