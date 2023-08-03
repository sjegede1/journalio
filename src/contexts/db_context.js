import { createContext, useState } from "react";
import entries from "../models/entries";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const DBContext = createContext();

const DBContextProvider = (props) => {
  const [dbData, setDbData] = useState(entries);

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyCXTp9yxT1Yb2WZ0xV3hrPJe7OG6jP6E",
    authDomain: "journalio-437ec.firebaseapp.com",
    projectId: "journalio-437ec",
    storageBucket: "journalio-437ec.appspot.com",
    messagingSenderId: "87557608228",
    appId: "1:87557608228:web:910af903b443c2313ed9b1",
    measurementId: "G-8XQMBCW5BJ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <DBContext.Provider value={{ dbData, setDbData }}>
      {props.children}
    </DBContext.Provider>
  );
};

export default DBContextProvider;
