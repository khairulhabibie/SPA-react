import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage';
import HomePageWrapper from './pages/HomePage';
import ArchivePageWrapper from './pages/ArchivePage';


function App() {
  return (
    <div className="app-container">
      <header>
        <h2>Aplikasi Catatan</h2>
        <Navigation />
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePageWrapper />} />
          <Route path="/note/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
