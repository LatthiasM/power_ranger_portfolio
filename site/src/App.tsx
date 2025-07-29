// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Paul from './pages/Paul';
import Roxana from './pages/Roxana';
import Mathis from './pages/Mathis';
import Matthias from './pages/Matthias';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/paul" element={<Layout><Paul /></Layout>} />
        <Route path="/roxana" element={<Layout><Roxana /></Layout>} />
        <Route path="/mathis" element={<Layout><Mathis /></Layout>} />
        <Route path="/matthias" element={<Layout><Matthias /></Layout>} />
      </Routes>
    </Router>
  );
}
