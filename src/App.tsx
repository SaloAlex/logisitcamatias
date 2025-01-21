import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Tracking } from './components/Tracking';
// import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Partners } from './components/Partners';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800 relative">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Tracking />
      <Partners />
      {/* <ContactForm /> */}
      <Footer />

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/+5491144360986" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;