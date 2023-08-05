import { createContext, useState } from "react";
import entries from "../models/entries";
import friendsEntries from "../models/friendsEntries";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { v4 as uuid } from "uuid";

export const DBContext = createContext();

const DBContextProvider = (props) => {
  const [dbData, setDbData] = useState(entries);
  const [friendsData, setFriendsData] = useState(friendsEntries);
  const [testData, setTestData] = useState([]);

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
  const writeJournalEntry = (datetime, entryid, mood, note, username) => {
    let UUID = uuid();
    let entriesRef = ref(database, "entries");
    let newEntryRef = push(entriesRef);
    set(newEntryRef, {
      datetime,
      entryid,
      mood,
      note,
      username,
    });
  };

  const readEntriesFromDB = () => {
    const dbRef = ref(database, "/entries");
    onValue(dbRef, (s) => {
      setTestData(s.val());
      console.log(testData);
    });
  };

  return (
    <DBContext.Provider
      value={{
        dbData,
        setDbData,
        friendsData,
        setFriendsData,
        writeJournalEntry,
        readEntriesFromDB,
      }}
    >
      {props.children}
    </DBContext.Provider>
  );
};

export default DBContextProvider;
