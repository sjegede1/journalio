import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entries from "./pages/Entries";
import Stats from "./pages/Stats";
import EntryForm from "./pages/EntryForm";
import Test from "./pages/Test";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route exact path="/entryForm" element={<EntryForm />} />
        <Route path="/entryForm/:datetime" element={<EntryForm />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
