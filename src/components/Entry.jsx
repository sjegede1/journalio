import React from "react";

function Entry({ data, moods }) {
  return (
    <div className="entry-card">
      <h1>Mood: {moods[data.mood]}</h1>
      <p>{data.note}</p>
      <h6 className="timestamp">{data.datetime}</h6>
      <ul className="activities-list">
        {data.activities ? 
          data.activities.map(a => <li key={a}>{a}</li>)
         : ""}
      </ul>
    </div>
  );
}

export default Entry;
