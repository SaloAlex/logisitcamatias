import { Truck, Shield, Clock, MapPin } from "lucide-react";

const benefits = [
  {
    icon: <Truck className="w-10 h-10 text-[#D4AF37]" />,
    title: "Envío Express",
    description: "Entrega garantizada con nuestra red logística optimizada",
  },
  {
    icon: <Shield className="w-10 h-10 text-[#D4AF37]" />,
    title: "Máxima Seguridad",
    description: "Seguimiento en tiempo real y protección total de tus paquetes",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#D4AF37]" />,
    title: "24/7 Activo",
    description: "Servicio ininterrumpido los 365 días del año",
  },
  {
    icon: <MapPin className="w-10 h-10 text-[#D4AF37]" />,
    title: "Cobertura en Capital y AMBA",
    description:
      "Contá con nuestra cobertura hasta el cuarto cordón del conurbano bonaerense",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl p-8 md:p-12 border border-gray-500">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Beneficios de confiar en nosotros
            </h2>
            <p className="text-gray-400 mb-8">
              Nuestro servicio de envíos está diseñado para brindarte la mejor
              experiencia, con la mayor seguridad y eficiencia en cada entrega.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
