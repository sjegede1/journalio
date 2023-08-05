import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import { DBContext } from '../contexts/db_context'

function Header() {
  const {username,} = useContext(DBContext);
  return (
    <header>
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/nav_left.png" alt="" className="header-icon" />
        <h2 className='header-title'>{username}</h2>
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/nav_right.png" alt="" className="header-icon" />
        <img src="https://www.iconexperience.com/_img/g_collection_png/gradient/128x128/magnifying_glass.png" alt="" className="header-icon" id="header-search-icon" />
    </header>
  )
}

export default Header