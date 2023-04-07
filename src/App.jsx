import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddNote from './pages/AddNote';
import ArchivePage from './pages/ArchivePage';


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
          <Route path="/note/new" element={<AddNote />} />
          <Route path="/archives" element={<ArchivePage />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
