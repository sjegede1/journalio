import React from 'react'
import Nav from '../components/Nav'
import EntryList from '../components/EntryList'
import Header from '../components/Header'

function Entries() {
  return (
    <div className="entry-page page">
        <Header />
        <EntryList />
        <Nav />
    </div>
  )
}

export default Entries