import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../contexts/db_context";
import Chart from "react-google-charts";

function DonutChart() {
  const {dbData} = useContext(DBContext);
  const [donutData, setDonutData] = useState([]);

  const options = {
    title: "Mood Count",
    pieHole: 0.4,
    is3D: false,
  };
  const chartType = "PieChart";
  const columns = ['Mood','Count']

  const getDonutData = () => {
    let moodCount = [0,0,0,0,0];
    let moodEmojis = ['😀','🙂','😐','😟','😩'];
    let moodData;
    dbData.forEach((entry) => {
        moodCount[entry.mood]++;
    })

    moodData = moodEmojis.map((e,i) => {
        return [e,moodCount[i]]
    })

    moodData.unshift(columns)
    setDonutData(moodData)
  };

  useEffect(() => {
    getDonutData()
  },[dbData])

  return (
    <Chart
      className="chart"
      id="donut-chart"
      chartType={chartType}
      data={donutData}
      options={options}
      width="500px"
    />
  );
}

export default DonutChart;
