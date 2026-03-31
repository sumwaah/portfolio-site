import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CsGemini from './pages/CsGemini';
import CsSearch from './pages/CsSearch';
import CsEcosystem from './pages/CsEcosystem';
import CsFiles from './pages/CsFiles';
import CsStation from './pages/CsStation';
import Leadership from './pages/Leadership';
import Foundation from './pages/Foundation';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategic-design/gemini-india" element={<CsGemini />} />
        <Route path="/strategic-design/search-regulation" element={<CsSearch />} />
        <Route path="/strategic-design/ecosystem" element={<CsEcosystem />} />
        <Route path="/strategic-design/files" element={<CsFiles />} />
        <Route path="/strategic-design/station" element={<CsStation />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/foundation" element={<Foundation />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
