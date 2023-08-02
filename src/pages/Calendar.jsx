import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import CalendarList from '../components/CalendarList'

function Calendar() {
  return (
    <div className="calendar page">
        <Header />
        <CalendarList />
        <Nav />
    </div>
  )
}

export default Calendar