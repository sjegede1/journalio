import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../contexts/db_context";
import Chart from "react-google-charts";

function ActivitiesBarChart() {
  const { dbData } = useContext(DBContext);
  const [barData, setBarData] = useState([]);

  const chartType = "BarChart";
  const columns = ["Activity", "Count"];
  const options = {
    chartArea: {width: '100%', right: 10},
    hAxis: { baseline: 0, viewWindowMode: 'pretty'  },
    vAxis: { viewWindowMode: 'pretty', textStyle: {fontSize: 16, bold: true, color: 'red'}, textPosition: 'in', },
    bar: { groupWidth: 20 },
    alignment: 'center',
    width: 300,
    height: 300,
  };

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

    activitiesData.unshift(columns);
    setBarData(activitiesData);
  };

  useEffect(() => {
    getBarData();
  }, [dbData]);

  return (
    <div className="chart">
      <h3>Activities Count</h3>
      <Chart
        id="bar-chart"
        chartType={chartType}
        data={barData}
        options={options}
      />
    </div>
  );
}

export default ActivitiesBarChart;
