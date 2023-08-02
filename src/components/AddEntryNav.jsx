import React, { useEffect, useRef } from "react";

function AddEntryNav() {
  let addEntryElem = useRef();
  let todayElem = useRef();
  let yesterdayElem = useRef();
  let otherDayElem = useRef();

  const handleAddEntryPress = (event) => {
    let entryElems = (refElem) => {
        let elem = refElem.current;
      if (
        !elem.classList.value.includes("forwards") &&
        !elem.classList.value.includes("backwards")
      ) {
        elem.classList.add(`${elem.id}-animation-forwards`);
      } else if (elem.classList.value.includes("forwards")) {
        elem.classList.replace(`${elem.id}-animation-forwards`,`${elem.id}-animation-backwards`);
      } else if (elem.classList.value.includes("backwards")) {
        elem.classList.replace(`${elem.id}-animation-backwards`,`${elem.id}-animation-forwards`);
      }
    };
    [addEntryElem,yesterdayElem,todayElem,otherDayElem].forEach(entryElems)
    console.log(addEntryElem.current.classList.value);
  };

  return (
    <div className="nav-add-entry-container">
      <img
        ref={addEntryElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/navigate_plus.png"
        alt=""
        id="add-entry"
        className="nav-icon nav-add-entry"
        onClick={handleAddEntryPress}
      />
      <img
        ref={todayElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/calendar_clock.png"
        alt=""
        id="today"
        className="nav-icon nav-add-entry"
      />
      <img
        ref={yesterdayElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/arrow_left.png"
        alt=""
        id="yesterday"
        className="nav-icon nav-add-entry"
      />
      <img
        ref={otherDayElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/calendar_31.png"
        alt=""
        id="other-day"
        className="nav-icon nav-add-entry"
      />
    </div>
  );
}

export default AddEntryNav;
