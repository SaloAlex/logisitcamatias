
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../public/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
            <img
              src={logo}
              alt="Logistica Matías Logo"
              className="ml-3 h-12"
            />
              <span className="ml-2 text-xl font-bold text-white">Logística Matías</span>
            </div>
            <p className="text-sm">
              Transformando la logística con tecnología de punta y servicio premium
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Beneficios</a></li>
              <li><a href="#tracking" className="hover:text-blue-400 transition-colors">Rastreo</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+54 9 11 4436-0986</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>logisticamati@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span> FLORES - CABA</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Seguinos</h3>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/logistica_matias/?hl=es-la"
                className="hover:text-[#D4AF37] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Logisitca Matias todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}