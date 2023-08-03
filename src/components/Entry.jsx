import React from "react";

function Entry({ data }) {
  let moodEmojis = ['😀','🙂','😐','😟','😩'];
  return (
    <div className="entry-card">
      <p>Mood: {moodEmojis[data.mood]}</p>
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
