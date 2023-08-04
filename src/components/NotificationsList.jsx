import React, { useContext } from 'react'
import { DBContext } from '../contexts/db_context';
import Entry from './Entry';

function NotificationsList() {
  let {friendsData} = useContext(DBContext)
  return (
   <main className="notifications-list">
    <h1>Notifications Page</h1>
    {friendsData.map((entry) => {
        return <Entry data={entry} key={entry.entryid} />;
      })}
   </main>

  )
}

export default NotificationsList