import { createContext, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { v4 as uuid } from "uuid";

export const DBContext = createContext();

const DBContextProvider = (props) => {
  const [dbData, setDbData] = useState([]);
  const [users, setUsers] = useState({});
  const [username, setUsername] = useState("sola-j");
  const [moods, setMoods] = useState([]);
  const [activities,setActivities] = useState({})

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyCXTp9yxT1Yb2WZ0xV3hrPJe7OG6jP6E",
    authDomain: "journalio-437ec.firebaseapp.com",
    projectId: "journalio-437ec",
    storageBucket: "journalio-437ec.appspot.com",
    databaseURL: "https://journalio-437ec-default-rtdb.firebaseio.com",
    messagingSenderId: "87557608228",
    appId: "1:87557608228:web:910af903b443c2313ed9b1",
    measurementId: "G-8XQMBCW5BJ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  // Write Journal Entry
  const writeJournalEntry = ({ datetime, entryid, mood, note, activities }) => {
    let entriesRef = ref(database, "entries");
    let newEntryRef = push(entriesRef);
    set(newEntryRef, {
      datetime,
      entryid,
      mood,
      note,
      username,
      activities,
    });
    readEntriesFromDB();
  };

  const readEntriesFromDB = () => {
    const dbRef = ref(database, "/entries");
    onValue(dbRef, (s) => {
      let entriesObj = s.val();
      setDbData(Object.values(entriesObj));
      console.log(dbData);
    });
  };

  const readUsersFromDB = () => {
    const dbRef = ref(database, "/users");
    onValue(dbRef, (s) => {
      setUsers(s.val());
      console.log(users);
    });
  };

  const readMoodsFromDB = () => {
    const dbRef = ref(database, "/moods");
    onValue(dbRef, (s) => {
      setMoods(s.val());
      console.log(s.val());
    });
  };

  const readActivitiesFromDB = () => {
    const dbRef = ref(database, "/activities");
    onValue(dbRef, (s) => {
      setActivities(s.val());
      console.log(s.val());
    });
  };

  return (
    <DBContext.Provider
      value={{
        dbData,
        setDbData,
        writeJournalEntry,
        readEntriesFromDB,
        readUsersFromDB,
        username,
        setUsername,
        moods,
        setMoods,
        readMoodsFromDB,
        activities,setActivities,
      }}
    >
      {props.children}
    </DBContext.Provider>
  );
};

export default DBContextProvider;
