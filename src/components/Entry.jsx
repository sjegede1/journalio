import React from "react";

function Entry({ data }) {
  return (
    <div className="entry-card">
      <h3>{data.note}</h3>
    </div>
  );
}

export default Entry;
