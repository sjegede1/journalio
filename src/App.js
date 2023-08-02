import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entries from './pages/Entries';
import Stats from './pages/Stats';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entries />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
