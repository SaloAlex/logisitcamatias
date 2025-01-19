import { Search, CheckCircle, MapPin, Clock } from 'lucide-react';

export function Tracking() {
  return (
    <section id="tracking" className="py-20 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl p-8 md:p-12 border border-gray-500">
          <div className="max-w-3xl mx-auto text-center">
            <Search className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Beneficios de Nuestro Servicio de Tracking</h2>
            <p className="text-gray-400 mb-8">
              Nuestro sistema de seguimiento está diseñado para brindarte tranquilidad, eficiencia y transparencia en todo momento.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-white">Monitoreo en Tiempo Real</h3>
                <p className="text-gray-400">
                  Conoce exactamente dónde está tu envío en cada momento.
                </p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-white">Ubicación Precisa</h3>
                <p className="text-gray-400">
                  Accede a actualizaciones precisas de la ubicación de tus paquetes.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-white">Notificaciones Oportunas</h3>
                <p className="text-gray-400">
                  Recibe alertas automáticas sobre el progreso y entrega de tus envíos.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://tuplataforma.com/tracking" // Cambia por tu enlace real
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
              >
                Descubre más sobre nuestro servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
