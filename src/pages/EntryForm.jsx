import React, { useContext, useState } from "react";
import { DBContext } from "../contexts/db_context";
import { Link } from "react-router-dom";
import AudioRecorder from "../components/AudioRecorder";

function EntryForm() {
  const [query, setQuery] = useState("");
  const { dbData, setDbData } = useContext(DBContext);
  const [date, setDate] = useState(new Date());
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let noteDiv = event.target.querySelector("#entry-note");
    if (noteDiv.value) {
      let note = noteDiv.value;
      setDbData([{ note }, ...dbData]);
      noteDiv.value = ""
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
    <div className="entry-form-page page">
      <div className="entry-form-header">
        <Link to="/"><img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/delete.png" alt="" className="nav-icon" /></Link>
      </div>
      <form className="entry-form" onSubmit={handleFormSubmit}>
          <input type="datetime-local" name="datetime-input" max={getMaxDate()} id="datetime-input" required/>
          <div className="moods-container">
            <label htmlFor="mood-1" className="moods-radio">😀
              <input type="radio" name="mood" id="mood-1" className="moods-radio" value="1" onChange={(e) => {e.preventDefault();e.target.classList.toggle('moods-radio-checked')}} />
            </label>
            
            <label htmlFor="mood-2">🙂</label>
            <input type="radio" name="mood" id="mood-2" className="moods-radio" />
            <label htmlFor="mood-3">😐</label>
            <input type="radio" name="mood" id="mood-3" className="moods-radio" />
            <label htmlFor="mood-4">😟</label>
            <input type="radio" name="mood" id="mood-4" className="moods-radio" />
            <label htmlFor="mood-5">😩</label>
            <input type="radio" name="mood" id="mood-5" className="moods-radio" required/>
          </div>
      <textarea name="entry-note" id="entry-note" cols="20" rows="5" placeholder="enter note here"></textarea>

        <input type="submit" value="Submit" onChange={(e) => {setQuery(e.target.value);}} />

        <div className="voice-note">
        <AudioRecorder />
        </div>
          
      </form>
    </div>
  );
}

export default EntryForm;
