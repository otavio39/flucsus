import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InstMainPage from './Pages/InstMainPage/InstMainPage';
import TermosDeUsoPage from './Pages/TermosDeUsoPage/TermosDeUsoPage';
import PoliticaDePrivacidade from './Pages/PoliticaDePrivacidade/PoliticaDePrivacidade';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InstMainPage />} />
        <Route path="/termos-de-uso" element={<TermosDeUsoPage />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
