import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPageWrapper from './pages/DetailPage';
import HomePageWrapper from './pages/HomePage';


function App() {
  return (
    <div className="app-container">
      <header>
        <h2>Aplikasi Note</h2>
        <Navigation />
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePageWrapper />} />
          <Route path="/note/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
