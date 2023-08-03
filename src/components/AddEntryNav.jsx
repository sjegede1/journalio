import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function AddEntryNav() {
  let addEntryElem = useRef();
  let todayElem = useRef();
  let yesterdayElem = useRef();
  let otherDayElem = useRef();

  // TODO: Remove blur when I click on main
  let [isAddEntryNavSelected,setIsAddEntryNavSelected] = useState(false)

  useEffect(()=>{
    if (isAddEntryNavSelected) {
        document.querySelector("main").style.filter = "blur(10px)"
    } else {
        document.querySelector("main").style.filter = "blur(0"
    }
  },[isAddEntryNavSelected])

  const handleAddEntryPress = (event) => {
    let entryElems = (refElem) => {
        let elem = refElem.current;
      if (
        !elem.classList.value.includes("forwards") &&
        !elem.classList.value.includes("backwards")
      ) {
        elem.classList.add(`${elem.id}-animation-forwards`);
        setIsAddEntryNavSelected(true)
      } else if (elem.classList.value.includes("forwards")) {
        elem.classList.replace(`${elem.id}-animation-forwards`,`${elem.id}-animation-backwards`);
        setIsAddEntryNavSelected(false)
      } else if (elem.classList.value.includes("backwards")) {
        elem.classList.replace(`${elem.id}-animation-backwards`,`${elem.id}-animation-forwards`);
        setIsAddEntryNavSelected(true)
      }
    };
    [addEntryElem,yesterdayElem,todayElem,otherDayElem].forEach(entryElems)
    
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
      <Link to="/entryForm" className="nav-icon nav-add-entry">
      <img
        ref={todayElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/calendar_clock.png"
        alt=""
        id="today"
        // className="nav-icon nav-add-entry"
      />
      </Link>
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
