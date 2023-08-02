import React from "react";
import entries from "../models/entries";
import Entry from "./Entry";

function EntryList() {
  return (
    <main className="entry-list">
      {entries.map((entry, index) => {
        return <Entry data={entry} key={entry.entryid} />;
      })}
    </main>
  );
}

export default EntryList;
