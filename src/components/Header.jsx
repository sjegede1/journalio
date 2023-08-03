import React from 'react'

function Header() {
  return (
    <header>
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/nav_left.png" alt="" className="header-icon" />
        <h4 className='header-title'>{process.env.REACT_APP_MONGODB_DB_USERNAME}</h4>
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/nav_right.png" alt="" className="header-icon" />
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/magnifying_glass.png" alt="" className="header-icon" id="header-search-icon" />
    </header>
  )
}

export default Header