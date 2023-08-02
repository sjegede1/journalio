import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entries from './pages/Entries';
import Stats from './pages/Stats';
import Calendar from './pages/Calendar';
import EntryForm from './pages/EntryForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/entry-form" element={<EntryForm />} />
      </Routes>
    </div>
  );
}

export default App;
