import React, { useContext, useState } from "react";
import entries from "../models/entries";
import Entry from "./Entry";
import { DBContext } from "../contexts/db_context";
import EntryForm from "../pages/EntryForm";

function EntryList() {
    let {dbData} = useContext(DBContext)
  return (
    <main className="entry-list">
        <div className="entry-card">
            <EntryForm />
        </div>
      {dbData.map((entry, index) => {
        return <Entry data={entry} key={entry.entryid} />;
      })}
    </main>
  );
}

export default EntryList;
