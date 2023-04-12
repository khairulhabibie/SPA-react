import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Aplikasi Note</h1>
        <Navigation />
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/note/:id" element={<DetailPage />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
