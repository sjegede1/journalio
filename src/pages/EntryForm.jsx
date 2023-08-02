import React, { useContext, useState } from "react";
import { DBContext } from "../contexts/db_context";

function EntryForm() {
  const [query, setQuery] = useState("");
  const { dbData, setDbData } = useContext(DBContext);
  const [date, setDate] = useState(new Date());
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let note = event.target.querySelector("#entry-note").value;
    if (note) {
      setDbData([{ note }, ...dbData]);
    }
  };
  const formatDateTime = (currentDate) => {
    let yyyy = currentDate.getFullYear();
    let mm =
      String(currentDate.getMonth()+1).length === 1
        ? `0${currentDate.getMonth()+1}`
        : currentDate.getMonth()+1;
    let dd =
      String(currentDate.getDate()).length === 1
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();
    let HH =
      String(currentDate.getHours()).length === 1
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();
    let MM =
      String(currentDate.getMinutes()).length === 1
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();
    console.log(currentDate, mm);
    return `${yyyy}-${mm}-${dd}T${HH}:${MM}`;
  };
  const getMaxDate = () => {
    let today = new Date();
    today.setHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    let todayString = formatDateTime(today);
    console.log(todayString);
    return todayString;
  };
  return (
    <form className="entry-form" onSubmit={handleFormSubmit}>
      <input
        type="datetime-local"
        name=""
        id=""
        // value={formatDateTime(new Date())}
        max={getMaxDate()}
      required/>
      <input
        type="text"
        name="entry-note"
        id="entry-note"
        placeholder="enter note"
      />
      <input
        type="submit"
        value="Submit"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}

export default EntryForm;
