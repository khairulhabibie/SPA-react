import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage';
import HomePageWrapper from './pages/HomePage';
import ArchivePageWrapper from './pages/ArchivePage';
import NotFound from './pages/NotFoundPage';


function App() {
  return (
    <div>
      <header>
        <h2 className='text-3xl'>Aplikasi Catatan</h2>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<HomePageWrapper />} />
          <Route path="/note/new" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/note/:id" element={<DetailPageWrapper />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
