import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Petitions } from './pages/Petitions';
import { Settings } from './pages/Settings';
import { PrayerReader } from './pages/PrayerReader';

function App() {
  return (
    <Routes>
      {/* Full screen routes */}
      <Route path="/pray" element={<PrayerReader />} />

      {/* Main Layout routes */}
      <Route element={<Layout><Home /></Layout>} path="/" />
      <Route element={<Layout><Petitions /></Layout>} path="/petitions" />
      <Route element={<Layout><Settings /></Layout>} path="/settings" />
    </Routes>
  );
}

export default App;
