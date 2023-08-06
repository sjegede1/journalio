import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Entries from "./pages/Entries";
import Stats from "./pages/Stats";
import EntryForm from "./pages/EntryForm";
import Test from "./pages/Test";
import Notifications from "./pages/Notifications";
import { useContext, useEffect } from "react";
import { DBContext } from "./contexts/db_context";

function App() {
  const {readEntriesFromDB, readUsersFromDB, readMoodsFromDB, readActivitiesFromDB} = useContext(DBContext)

  useEffect(() => {
    readUsersFromDB();
    readEntriesFromDB();
    readMoodsFromDB();
    readActivitiesFromDB();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route exact path="/entryForm" element={<EntryForm />} />
        <Route path="/entryForm/:datetime" element={<EntryForm />} />
        <Route path="/test" element={<Test />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
