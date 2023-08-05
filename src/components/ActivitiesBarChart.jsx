import React, { useContext, useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import "chart.js/auto";
import { DBContext } from "../contexts/db_context";

function ActivitiesBarChart() {
  const { dbData } = useContext(DBContext);
  const testChart = useRef();

  const getBarData = () => {
    let activitiesRawArray = [];
    dbData.forEach((e) => {
      if (e.activities) {
        activitiesRawArray.push(...e.activities);
      }
    });
    let activitiesUnique = new Set(activitiesRawArray);
    let activitiesCategories = Array.from(activitiesUnique);
    let activitiesCount = [];
    activitiesCount.length = activitiesCategories.length;

    activitiesRawArray.forEach((a, i) => {
      let activityIndex = activitiesCategories.indexOf(a);
      if (activitiesCount[activityIndex] == 0) {
        activitiesCount[activityIndex]++;
      } else if (!activitiesCount[activityIndex]) {
        activitiesCount[activityIndex] = 0;
      } else {
        activitiesCount[activityIndex]++;
      }
    });

    let activitiesData = [];
    activitiesCategories.forEach((a, i) => {
      activitiesData.push([a, activitiesCount[i]]);
    });
    console.log(activitiesData);
    return { activitiesCategories, activitiesCount };
  };

  const { activitiesCategories: labels, activitiesCount } = getBarData();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: activitiesCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  useEffect(() => {
    new Chart(testChart.current, config);
  }, []);

  return (
    <div>
      <canvas id="test-chart" ref={testChart} className="chart"></canvas>
    </div>
  );
}

export default ActivitiesBarChart;