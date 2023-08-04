import React, { useContext, useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "chart.js/auto";
import { DBContext } from "../contexts/db_context";

function MoodDonutChart() {
  const testChart = useRef();
  const [chart, setChart] = useState(null);
  let {dbData} = useContext(DBContext);

  let labels = ["😀", "🙂", "😐", "😟", "😩"];

  const getDonutData = () => {
    let moodCount = [0, 0, 0, 0, 0];
    dbData.forEach((entry) => {
      moodCount[entry.mood]++;
    });
    return moodCount
  };

  let datasets = [
    {
      label: "My First Dataset",
      data: getDonutData(),
      backgroundColor: [
        "blue",
        "red",
        "yellow",
        'green',
        'purple',
      ],
      hoverOffset: 4,
    },
  ];

  const configInit = {
    type: "doughnut",
    data: {
        labels,
        datasets,
      },
  };
  const [config, setConfig] = useState(configInit);



  const updateChart = () => {
    if (chart) {
      chart.data = config.data;
      chart.update();
    }
  };

  useEffect(() => {
    let newData = getDonutData();
    let newConfig = config;
    newConfig.data.datasets[0].data = newData;
    setConfig(newConfig)
  },[dbData])

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    setChart(new Chart(testChart.current, config));

    // Clean up: Destroy the chart when the component unmounts
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [config]);

  useEffect(() => {
    updateChart();
  }, [chart]);

  return (
    <div className="chart">
      <canvas id="test-chart" ref={testChart}></canvas>
    </div>
  );
}

export default MoodDonutChart;