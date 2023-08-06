import React, { useContext, useEffect } from "react";
import { DBContext } from "../contexts/db_context";
import MoodDonutChart from "./MoodDonutChart";
import Entry from "./Entry";

function NotificationsList() {
  let { users, username, readUsersFromDB, dbData } = useContext(DBContext);

  useEffect(() => {
    readUsersFromDB();
  }, []);

  let userObject = users.filter((u) => u.username === username)[0];
  let friends = userObject ? Object.values(userObject.friends) : [];
  console.log(friends);

  return (
    <div className="notifications-list main">
      <h1>Friends</h1>
      {friends.map((friend) => {
        let friendsData = dbData.filter((e) => e.username === friend);
        return (
          <div className="friend-card" key={friend.entryid}>
            <h1>{friend}</h1>
            <div className="friend-donut">
              <MoodDonutChart userData={friendsData} key={friend} />
            </div>
            <div className="friend-entries">
              {friendsData.map((e) => (
                <Entry data={e} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NotificationsList;
