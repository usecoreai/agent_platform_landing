import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactFormModal from './components/contact-form-modal';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import CasesPage from './pages/CasesPage';
import UseCasePage from './pages/UseCasePage';

export default function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-ink">
        <Header onOpenContactForm={openContactForm} />
        <Routes>
          <Route path="/" element={<HomePage onOpenContactForm={openContactForm} />} />
          <Route path="/platform" element={<PlatformPage onOpenContactForm={openContactForm} />} />
          <Route path="/cases" element={<CasesPage onOpenContactForm={openContactForm} />} />
          <Route path="/cases/:slug" element={<UseCasePage onOpenContactForm={openContactForm} />} />
        </Routes>
        <Footer />
        <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
      </div>
    </BrowserRouter>
  );
}
