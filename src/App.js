import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entries from './pages/Entries';
import Stats from './pages/Stats';
import Calendar from './pages/Calendar';
import EntryForm from './pages/EntryForm';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/entryForm" element={<EntryForm />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
