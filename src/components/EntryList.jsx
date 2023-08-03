import React, { useContext, useState } from "react";
import entries from "../models/entries";
import Entry from "./Entry";
import { DBContext } from "../contexts/db_context";
import EntryForm from "../pages/EntryForm";
import { Link } from "react-router-dom";

function EntryList() {
  let { dbData } = useContext(DBContext);
  return (
    <main className="entry-list">
      {dbData.map((entry) => {
        return <Entry data={entry} key={entry.entryid} />;
      })}
    </main>
  );
}

export default EntryList;
