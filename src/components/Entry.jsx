import React, { useContext } from "react";
import { DBContext } from "../contexts/db_context";

function Entry({ data, }) {
  const {moods, activities} = useContext(DBContext)
  return (
    <div className="entry-card">
      <p className="datetime-stamp">{new Date(data.datetime).toLocaleString()}</p>
      <div className="entry-info">
        <div className="emoji-card">
          <h1 className="mood-card">{moods[data.mood]}</h1>
          <div className="activities-card">
            {data.activities
              ? data.activities.map((a,i) => <p className="activity-emoji" key={a+i}>{activities[a]}</p>)
              : ""}
          </div>
        </div>
        <div className="note-media-card">
          <p className="note-card">
            {data.note}
          </p>
          <div className="entry-media-card">
            <div className="audio-player">
              {data.audio ? <audio controls src={data.audio}></audio> : ""}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;

// <h1>Mood: {moods[data.mood]}</h1>
// <p>{data.note}</p>
// <h6 className="timestamp">{data.datetime}</h6>
// <ul className="activities-list">
//   {data.activities ?
//     data.activities.map(a => <li key={a}>{a}</li>)
//    : ""}
// </ul>
