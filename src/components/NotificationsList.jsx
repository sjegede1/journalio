import React, { useContext, useEffect } from "react";
import { DBContext } from "../contexts/db_context";
import MoodDonutChart from "./MoodDonutChart";
import Entry from "./Entry";

function NotificationsList() {
  let { users, username, readUsersFromDB, dbData } = useContext(DBContext);


  let userObject = users.filter((u) => u.username === username)[0];
  let friends = userObject ? Object.values(userObject.friends) : [];

  return (
    <div className="notifications-list main">
      <h1>Friends</h1>
      {friends.map((friend,i_f) => {
        let friendsData = dbData.filter((e) => e.username === friend);
        return (
          <div className="friend-card" key={i_f}>
            <h1>{friend}</h1>
            <div className="friend-donut">
              <MoodDonutChart userData={friendsData} key={i_f} />
            </div>
            <div className="friend-entries">
              {friendsData.map((e,i) => (
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
