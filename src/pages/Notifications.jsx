import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import NotificationsList from '../components/NotificationsList'

function Notifications() {
  return (
    <div className="calendar page">
        <Header />
        <NotificationsList />
        <Nav />
    </div>
  )
}

export default Notifications