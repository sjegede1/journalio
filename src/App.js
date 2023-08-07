import "./App.css";
import { Navigate, Route, Routes, Redirect } from "react-router-dom";
import Entries from "./pages/Entries";
import Stats from "./pages/Stats";
import EntryForm from "./pages/EntryForm";
import Test from "./pages/Test";
import Notifications from "./pages/Notifications";
import { useContext, useEffect } from "react";
import { DBContext } from "./contexts/db_context";
import Login from "./pages/Login";
import { AppContext } from "./contexts/app_context";

function App() {
  const {readEntriesFromDB, readUsersFromDB, readMoodsFromDB, readActivitiesFromDB, username} = useContext(DBContext)
  const { isLoggedIn, } = useContext(AppContext);

  useEffect(() => {
    readUsersFromDB();
    readEntriesFromDB();
    readMoodsFromDB();
    readActivitiesFromDB();
  },[username, isLoggedIn])




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <Entries /> : <Login />} />
        <Route path="/stats" element={isLoggedIn ? <Stats /> : <Login />} />
        <Route path="/notifications" element={isLoggedIn ? <Notifications /> : <Login />} />
        <Route exact path="/entryForm" element={isLoggedIn ? <EntryForm /> : <Login />} />
        <Route path="/entryForm/:datetime" element={isLoggedIn ? <EntryForm /> : <Login />} />
        <Route path="/test" element={isLoggedIn ? <Test /> : <Login />} />
        <Route path="/login" element={isLoggedIn ? <Entries /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
