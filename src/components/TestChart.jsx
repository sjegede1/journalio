import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { DBContext } from "../contexts/db_context";

const data = [
  ["day", "a", "b", "c", "d"],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 50, 77, 66, 77],
  ["Fri", 15, 66, 22, 68],
];

const options = {
  legend: "none",
};

function TestChart() {
  const { dbData, readEntriesFromDB } = useContext(DBContext); //TODO: Use userData
  const userData = dbData;

  let dates = userData.map(e => new Date(e.datetime).getDay())
  console.log(dates)

  // useEffect(() => {
  //   readEntriesFromDB()
  // },[])

  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default TestChart;
