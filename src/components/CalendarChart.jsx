import React, { useContext, useEffect, useState } from "react";
import { DBContext } from "../contexts/db_context";
import Chart from "react-google-charts";

// let data = [
//   [
//     {
//       type: "date",
//       id: "Date",
//     },
//     {
//       type: "number",
//       id: "Won/Loss",
//     },
//   ],
//   [new Date(2012, 3, 13), 37032],
//   [new Date(2012, 3, 14), 38024],
//   [new Date(2012, 3, 15), 38024],
//   [new Date(2012, 3, 16), 38108],
//   [new Date(2012, 3, 17), 38229],
//   // Many rows omitted for brevity.
//   [new Date(2013, 9, 4), 38177],
//   [new Date(2013, 9, 5), 38705],
//   [new Date(2013, 9, 12), 38210],
//   [new Date(2013, 9, 13), 38029],
//   [new Date(2013, 9, 19), 38823],
//   [new Date(2013, 9, 23), 38345],
//   [new Date(2013, 9, 24), 38436],
//   [new Date(2013, 9, 30), 38447],
// ];

function CalendarChart() {
  const { dbData } = useContext(DBContext);
  const [calendarData, setCalendarData] = useState([]);

  const options = {
    width: '100%',
    calendar: {
        yearLabel: {
            fontSize: 5,
        }
    },
    colorAxis: {
        colors: ['blue','red','yellow','green','purple'],
        values:[0,1,2,3,4]
    }
  };
  const chartType = "Calendar";
  const columns = ["Date", "Average Mood"];

  const averageMoodPerDay = (date,index, dateData) => {
    let sum = 0;
    let datesFiltered = dateData.filter(e => e===date)
    datesFiltered.forEach((e,i,a) => {
        sum += dbData[index].mood;
    })
    console.log(sum,datesFiltered.length)
    return sum/datesFiltered.length
  }

  const createDateDataTable = (date, index, dateData) => {
    let dateDataSlice = dateData.slice(index+1);
    if (dateDataSlice && !dateDataSlice.includes(date)) {
      return [new Date(date), averageMoodPerDay(date,index, dateData)];
    }
  };

  const getCalendarData = () => {
    let dateStrData = dbData.map((e) => new Date(e.datetime).toLocaleDateString());
    let dateData = dateStrData.map(createDateDataTable);
    dateData = dateData.filter(d => d)

    dateData.unshift(columns)
    setCalendarData(dateData);
    console.log(dateData);
  };

  useEffect(() => {
    getCalendarData()
  },[dbData])

  return (
    <div className="calendar-container">
      <Chart
        className="calendar-comp"
        chartType={chartType}
        data={calendarData}
        options={options}
      />
    </div>
  );
}

export default CalendarChart;
