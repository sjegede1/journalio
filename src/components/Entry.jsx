import React from "react";

function Entry({ data, moods, activities }) {
  return (
    <div className="entry-card">
      <p className="datetime-stamp">{data.datetime}</p>
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
            <div className="audio-player"><audio controls src={data.audio ? data.audio : 'https://demo.twilio.com/docs/classic.mp3'}></audio></div>
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
