import { createContext, useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import {
  getStorage,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  ref as refStorage,
  listAll,
} from "firebase/storage";

import { v4 as uuid } from "uuid";

export const DBContext = createContext();

const DBContextProvider = (props) => {
  const [dbData, setDbData] = useState([]);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("sola-j");
  const [moods, setMoods] = useState([]);
  const [activities, setActivities] = useState({});
  const [audioURL, setAudioURL] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

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
      audio: audioURL,
    });
    readEntriesFromDB();
  };

  // Get Firebase URL for audio files
  // const getAudioURL = (url) => {
  //   setAudioURL()
  // }

  // Upload Audio Files
  const handleUpload = (file) => {
    const metadata = {
      contentType: "audio/wav",
    };
    const storage = getStorage(app);
    const storageRef = refStorage(
      storage,
      `voice-notes/${username}/${uuid()}.wav`
    );
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAudioURL(downloadURL);
          console.log("File available at", downloadURL);
        });
        // HOw to get list of all Audios.
        // listAll(refStorage(storage, `voice-notes/${username}`)).then(s => s.items.forEach(i => getDownloadURL(i).then(s => console.log(s))))
      }
    );
  };

  const readEntriesFromDB = () => {
    const dbRef = ref(database, "/entries");
    onValue(dbRef, (s) => {
      let entriesObj = s.val();
      setDbData(Object.values(entriesObj));
      // console.log(dbData);
    });
  };

  const readUsersFromDB = () => {
    const dbRef = ref(database, "/users");
    onValue(dbRef, (s) => {
      let newUsers = Object.values(s.val());
      setUsers(newUsers);
    });
  };

  const readMoodsFromDB = () => {
    const dbRef = ref(database, "/moods");
    onValue(dbRef, (s) => {
      setMoods(s.val());
      // console.log(s.val());
    });
  };

  const readActivitiesFromDB = () => {
    const dbRef = ref(database, "/activities");
    onValue(dbRef, (s) => {
      setActivities(s.val());
      // console.log(s.val());
    });
  };

  useEffect(() => {
    readUsersFromDB();
    readEntriesFromDB();
    readMoodsFromDB();
    readActivitiesFromDB();
  },[])


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
        activities,
        setActivities,
        readActivitiesFromDB,
        handleUpload,
        audioURL,
        setAudioURL,
        audioBlob,
        setAudioBlob,
        users,
        setUsers,
      }}
    >
      {props.children}
    </DBContext.Provider>
  );
};

export default DBContextProvider;
