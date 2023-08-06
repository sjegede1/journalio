import React, { useContext } from "react";
import TestChart from "../components/TestChart";
import { DBContext } from "../contexts/db_context";
import { v4 as uuid } from "uuid";
import AudioRecorder from "../components/AudioRecorder";
import { redirect, useNavigate } from "react-router-dom";
import ActivitiesBarChart from "../components/ActivitiesBarChart";

function Test() {
  const { readEntriesFromDB, writeJournalEntry } = useContext(DBContext);
  const navigate = useNavigate()


  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={readEntriesFromDB}>READ ENTRIES</button> <br />
      <br />

      <button onClick={() => {window.location.assign('/notifications')}}>REDIRECT TO MAIN PAGE</button>

      <ActivitiesBarChart />
      <TestChart />
      <AudioRecorder />
    </div>
  );
}

export default Test;
