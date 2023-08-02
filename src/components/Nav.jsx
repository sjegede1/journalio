import React from 'react'
import { Link } from 'react-router-dom'
import AddEntryNav from './AddEntryNav'

function Nav() {
  return (
    <nav>
        <Link to="/">
            <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/notebook3.png" alt="" className="nav-icon" id="nav-entries" />
        </Link>
        <Link to="/stats">
            <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/chart_column.png" alt="" className="nav-icon" id="nav-stats" />
        </Link>

        <AddEntryNav />

        <Link to="/calendar">
            <img src="https://www.iconexperience.com/_img/g_collection_png/blue/128x128/calendar_3.png" alt="" className="nav-icon" id="nav-calendar" />
        </Link>

        {/* <Link to="/more"> */}
            <img src="https://www.iconexperience.com/_img/g_collection_png/blue/128x128/more.png" alt="" className="nav-icon" id="nav-more" />
        {/* </Link> */}
    </nav>
  )
}

export default Nav