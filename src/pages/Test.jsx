import React from "react";

const model = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison, type.fit"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra, type.fit"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln, type.fit"
      },
  ];
function Test() {

  return (
    <div>
        {model.map((p,i) => {
            return <div key={i}>{p.text} <br /> <h5>{p.author}</h5> </div>
        })}
    </div>
  )
}

export default Test;
