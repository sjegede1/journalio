import React, { useContext, useEffect, useState } from "react";
import entries from "../models/entries";
import Entry from "./Entry";
import { DBContext } from "../contexts/db_context";
import EntryForm from "../pages/EntryForm";
import { Link } from "react-router-dom";

function EntryList() {
  let { dbData, username } = useContext(DBContext);

  return (
    <div className="entry-list main">
      {dbData.filter(e => e.username === username).sort((a,b) => new Date(b.datetime)-new Date(a.datetime)).map((entry) => {
        return <Entry data={entry} key={entry.entryid} />;
      })}
    </div>
  );
}

export default EntryList;
