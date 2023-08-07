import React, { useContext, useEffect } from "react";
import { DBContext } from "../contexts/db_context";
import MoodDonutChart from "./MoodDonutChart";
import Entry from "./Entry";
import ActivitiesBarChart from "./ActivitiesBarChart";

function NotificationsList() {
  let { users, username, readUsersFromDB, dbData } = useContext(DBContext);

  let userObject = users.filter((u) => u.username === username)[0];
  let friends = userObject ? Object.values(userObject.friends) : [];

  const showMore = (event) => {
    let entriesList = event.target.parentElement.parentElement.querySelector('.friend-entries')
    if (event.target.innerHTML === 'Show More') {
      event.target.innerHTML = 'Show Less';
      entriesList.classList.remove('hidden')
      console.log('less',entriesList)
    } else {
      event.target.innerHTML = 'Show More';
      entriesList.classList.add('hidden')
      console.log('more',entriesList)
    }
  }

  return (
    <div className="main notifications-list">
      {friends.map((friend, i_f) => {
        let friendsData = dbData.filter((e) => e.username === friend);
        return (
          <div className="friend-card" key={i_f}>
            <div className="friend-summary">
              <h1>{friend}</h1>
              <MoodDonutChart
                userData={friendsData}
                width={220}
                height={220}
                key={i_f}
              />
            </div>
            <div className="friends-show-more">
              <button type="button" onClick={showMore}>Show More</button>
            </div>
            <div className="friend-entries hidden">
              {friendsData.map((e, i) => (
                <Entry data={e} key={e.entryid} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NotificationsList;
