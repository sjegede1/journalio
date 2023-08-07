import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { DBContext } from "../contexts/db_context";


function TestChart() {
  const { dbData, username, readEntriesFromDB } = useContext(DBContext);
  const [barData, setBarData] = useState([["Category", "Count"]]);
  const [categories, setCategories] = useState(['reading','workout','meditation','party']);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let labels = ["Category", "Count"];

  // console.log(dbData)

  const options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 300,
    height: 300,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
    animation: { startup: true, duration: 1000, easing: "linear" },
    orientation: "horizontal",
  };

  const getCategories = () => {
    let cats = new Set();
    dbData.forEach((e) => {
      if (e.activities) {
        e.activities.forEach((a) => cats.add(a));
      }
    });
    cats = Array.from(cats);
    setCategories(cats)
    console.log(cats);
    return cats ;
  };

  const getBarData = () => {
    // getCategories();
    console.log(categories)
    for (let i = 0; i < categories.length; i++) {
      let count = dbData
        .filter((e) => e.username === username)
        .filter((e) => Object.keys(e.activities).includes(categories[i])).length;
      console.log(dbData);
      setBarData([[categories[i], count], ...barData]);
      // barData.push([categories[i], count]);
    }
    return barData;
  };

  useEffect(() => {
    // getCategories();
    getBarData();
  }, [dbData]);

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={barData}
      options={options}
    />
  );
}

export default TestChart;
