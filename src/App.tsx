import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Petitions = lazy(() => import('./pages/Petitions').then(m => ({ default: m.Petitions })));
const Settings = lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })));
const PrayerReader = lazy(() => import('./pages/PrayerReader').then(m => ({ default: m.PrayerReader })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Prayers = lazy(() => import('./pages/Prayers').then(m => ({ default: m.Prayers })));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Routes>
        {/* Full screen routes */}
        <Route path="/pray" element={<PrayerReader />} />

        {/* Main Layout routes */}
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><Petitions /></Layout>} path="/petitions" />
        <Route element={<Layout><Settings /></Layout>} path="/settings" />
        <Route element={<Layout><About /></Layout>} path="/about" />
        <Route element={<Layout><Prayers /></Layout>} path="/prayers" />
      </Routes>
    </Suspense>
  );
}

export default App;
