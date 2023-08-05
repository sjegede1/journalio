import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app_context";

function AddEntryNav() {
  let addEntryElem = useRef();
  let todayElem = useRef();
  let yesterdayElem = useRef();
  let otherDayElem = useRef();

  let [isAddEntryNavSelected, setIsAddEntryNavSelected] = useState(false);
  let { formatDateTime } = useContext(AppContext);


  //TODO: BLUR what used to be maiin
  useEffect(() => {
    if (isAddEntryNavSelected) {
      // document.querySelector("main").style.filter = "blur(10px)";
    } else {
      // document.querySelector("main").style.filter = "blur(0";
    }
  }, [isAddEntryNavSelected]);

  const handleAddEntryPress = (event) => {
    let entryElems = (refElem) => {
      let elem = refElem.current;
      if (
        !elem.classList.value.includes("forwards") &&
        !elem.classList.value.includes("backwards")
      ) {
        elem.classList.add(`${elem.id}-animation-forwards`);
        setIsAddEntryNavSelected(true);
      } else if (elem.classList.value.includes("forwards")) {
        elem.classList.replace(
          `${elem.id}-animation-forwards`,
          `${elem.id}-animation-backwards`
        );
        setIsAddEntryNavSelected(false);
      } else if (elem.classList.value.includes("backwards")) {
        elem.classList.replace(
          `${elem.id}-animation-backwards`,
          `${elem.id}-animation-forwards`
        );
        setIsAddEntryNavSelected(true);
      }
    };
    [addEntryElem, yesterdayElem, todayElem, otherDayElem].forEach(entryElems);
  };

  let todaysDate = new Date();
  let yesterdaysDate = new Date();
  yesterdaysDate.setDate(todaysDate.getDate() - 1);

  return (
    <div className="nav-add-entry-container">
      <img
        ref={addEntryElem}
        src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/navigate_plus.png"
        alt=""
        id="add-entry"
        className="nav-icon nav-add-entry"
        onClick={handleAddEntryPress}
      />
      <Link
        to={`/entryForm/${formatDateTime(new Date())}`}
        className="nav-icon nav-add-entry"
      >
        <img
          ref={todayElem}
          src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/calendar_clock.png"
          alt=""
          id="today"
          // className="nav-icon nav-add-entry"
        />
      </Link>

      <Link
        to={`/entryForm/${formatDateTime(yesterdaysDate)}`}
        className="nav-icon nav-add-entry"
      >
        <img
          ref={yesterdayElem}
          src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/arrow_left.png"
          alt=""
          id="yesterday"
        />
      </Link>
      <Link to="entryForm" className="nav-icon nav-add-entry">
        <img
          ref={otherDayElem}
          src="https://www.iconexperience.com/_img/g_collection_png/gradient/32x32/calendar_31.png"
          alt=""
          id="other-day"
        />
      </Link>
    </div>
  );
}

export default AddEntryNav;
