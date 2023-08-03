import React, { useContext, useRef, useState } from "react";
import { DBContext } from "../contexts/db_context";
import { Link, useParams } from "react-router-dom";
import AudioRecorder from "../components/AudioRecorder";
import { AppContext } from "../contexts/app_context";

function EntryForm() {
  const [query, setQuery] = useState("");
  let formRef = useRef(null);
  const { dbData, setDbData } = useContext(DBContext);
  const [date, setDate] = useState(new Date());
  const { datetime: datetimeParam } = useParams();
  const { formatDateTime } = useContext(AppContext);
  console.log(datetimeParam);

  const getFormElements = (formElem) => {
    let mood = formElem.elements.mood.value;
    let activities = [];
    formElem.elements.activities.forEach((a) => {
      if (a.checked) {
        activities.push(a.value);
      }
    });
    let note = formElem.elements["entry-note"].value;
    let datetime = formElem.elements["datetime-input"].value;
    let entryid = Math.floor(100 * Math.random());
    return { note, mood, activities, datetime, entryid };
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // let noteDiv = event.target.querySelector("#entry-note");
    // let note = noteDiv.value;
    setDbData([getFormElements(event.target), ...dbData]);
    // Reset form
    event.target.reset();
  };

  const getMaxDate = () => {
    let today = new Date();
    today.setHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    let todayString = formatDateTime(today);
    return todayString;
  };

  return (
    <div className="entry-form-page page">
      <div className="entry-form-header">
        <Link to="/">
          <img
            src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/delete.png"
            alt=""
            className="nav-icon"
          />
        </Link>
      </div>
      <form className="entry-form" onSubmit={handleFormSubmit} ref={formRef}>
        <input
          type="datetime-local"
          name="datetime-input"
          max={getMaxDate()}
          id="datetime-input"
          value={datetimeParam ? datetimeParam : ""}
          required
        />
        <div className="moods-container">
          <label htmlFor="mood-0" className="mood-label">
            😀
          </label>
          <input
            type="radio"
            name="mood"
            id="mood-0"
            className="moods-radio"
            value={0}
            onChange={(e) => {
              e.preventDefault();
              e.target.classList.toggle("moods-radio-checked");
            }}
          />

          <label htmlFor="mood-1" className="mood-label">
            🙂
          </label>
          <input
            type="radio"
            name="mood"
            id="mood-1"
            className="moods-radio"
            value={1}
          />
          <label htmlFor="mood-2" className="mood-label">
            😐
          </label>
          <input
            type="radio"
            name="mood"
            id="mood-2"
            className="moods-radio"
            value={2}
          />
          <label htmlFor="mood-3" className="mood-label">
            😟
          </label>
          <input
            type="radio"
            name="mood"
            id="mood-3"
            className="moods-radio"
            value={3}
          />
          <label htmlFor="mood-4" className="mood-label">
            😩
          </label>
          <input
            type="radio"
            name="mood"
            id="mood-4"
            className="moods-radio"
            value={4}
            required
          />
        </div>
        <div className="activities-container">
          <input
            type="checkbox"
            name="activities"
            id="reading"
            className="activities-checkbox"
            value="reading"
          />
          <label htmlFor="reading">Reading</label>
          <br />
          <input
            type="checkbox"
            name="activities"
            id="workout"
            className="activities-checkbox"
            value="workout"
          />
          <label htmlFor="workout">Workout</label>
          <br />
          <input
            type="checkbox"
            name="activities"
            id="meditation"
            className="activities-checkbox"
            value="reading"
          />
          <label htmlFor="meditation">Meditation</label>
          <br />
          <input
            type="checkbox"
            name="activities"
            id="party"
            className="activities-checkbox"
            value="party"
          />
          <label htmlFor="party">Party</label>
          <br />
        </div>
        <textarea
          name="entry-note"
          id="entry-note"
          cols="20"
          rows="5"
          placeholder="enter note here"
          maxLength={200}
        ></textarea>

        <input
          type="submit"
          value="Submit"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <div className="voice-note">
          <AudioRecorder />
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
