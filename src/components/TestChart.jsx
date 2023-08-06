import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { DBContext } from "../contexts/db_context";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const data = [
  ["Week Day", "Average Mood", { role: "style" }],
  ["Sun", 2.5, "blue"],
  ["Mon", 2, "red"],
  ["Tue", 3, "yellow"],
  ["Wed", 1, "green"],
  ["Thu", 3, "purple"],
  ["Fri", 4, "grey"],
  ["Sat", 0, "brown"],
];

// export const data = [
//   [
//     "Element",
//     "Density",
//     { role: "style" },
//     {
//       sourceColumn: 0,
//       role: "annotation",
//       type: "string",
//       calc: "stringify",
//     },
//   ],
//   ["Copper", 8.94, "#b87333", null],
//   ["Silver", 10.49, "silver", null],
//   ["Gold", 19.3, "gold", null],
//   ["Platinum", 21.45, "color: #e5e4e2", null],
// ];

export const options = {
  title: "Density of Precious Metals, in g/cm^3",
  width: 300,
  height: 300,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
  animation: { startup: true, duration: 1000, easing: "linear" },
  orientation: "horizontal",
};

function TestChart() {
  const { dbData: userData } = useContext(DBContext);
  let categories;
  let barData = [];

  console.log(userData)

  const getCategories = () => {
    categories = new Set();
    userData.forEach((e) => {
      if (e.activities) {
        e.activities.forEach((a) => categories.add(a));
      }
    });
    categories = Array.from(categories)
    return {categories}
  };

  const getBarData = () => {

    let activitiesCount = []
    for (let i=0;i<categories.length;i++) {
      let count = userData[i].filter(e => e.activities.includes(categories[i])).length
      barData.push([categories[i], count])
    }
    return barData
  }

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default TestChart;
