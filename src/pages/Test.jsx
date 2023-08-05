import React, { useContext } from "react";
import TestChart from "../components/TestChart";
import { DBContext } from "../contexts/db_context";
import { v4 as uuid } from "uuid";

function Test() {
  const { readEntriesFromDB, writeJournalEntry } = useContext(DBContext);


  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={readEntriesFromDB}>READ ENTRIES</button> <br />
      <br />

      <TestChart />
    </div>
  );
}

export default Test;
