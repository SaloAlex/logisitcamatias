import { useState, useEffect, useMemo } from "react";
import logo1 from "../public/assets/Logos/1.webp";
import logo2 from "../public/assets/Logos/2.webp";
import logo3 from "../public/assets/Logos/3.webp";
import logo4 from "../public/assets/Logos/4.webp";
import logo5 from "../public/assets/Logos/5.webp";
import logo6 from "../public/assets/Logos/6.webp";
import logo7 from "../public/assets/Logos/7.webp";
import logo8 from "../public/assets/Logos/8.webp";
import logo9 from "../public/assets/Logos/9.webp";
import logo10 from "../public/assets/Logos/10.webp";
import logo11 from "../public/assets/Logos/11.webp";
import logo12 from "../public/assets/Logos/12.webp";
import logo13 from "../public/assets/Logos/13.webp";
import logo14 from "../public/assets/Logos/14.webp";

interface Company {
  id: number;
  name: string;
  logo: string;
  instagram: string; // Campo adicional para el enlace de Instagram
}

export function Partners() {
  const companies: Company[] = useMemo(
    () => [
      { id: 1, name: "Sanitarios Illia", logo: logo1, instagram: "https://www.instagram.com/sanitariosillia/?hl=es-la" },
      { id: 2, name: "Repuestos Daniel", logo: logo2, instagram: "https://www.instagram.com/repuestos.daniel/?hl=es-la" },
      { id: 3, name: "Udachi", logo: logo3, instagram: "https://www.instagram.com/udachi.ar/?hl=es-la" },
      { id: 4, name: "Teo´s Friends", logo: logo4, instagram: "https://www.instagram.com/teos.friends.store/?hl=es-la" },
      { id: 5, name: "SD Stickers", logo: logo5, instagram: "https://www.instagram.com/sd_stickerdesign/?hl=es" },
      { id: 6, name: "Respuestos Roca", logo: logo6, instagram: "https://www.instagram.com/repuestosroca/?hl=es-la" },
      { id: 7, name: "Lesblancs Blanqueria", logo: logo7, instagram: "https://www.instagram.com/lesblancsok/?hl=es-la" },
      { id: 8, name: "Kovieta", logo: logo8, instagram: "https://www.instagram.com/kovieta_/?hl=es-la" },
      { id: 9, name: "Iluminacion Bosch", logo: logo9, instagram: "https://www.instagram.com/iluminacionbosch/?hl=es-la" },
      { id: 10, name: "FyA Store", logo: logo10, instagram: "https://www.instagram.com/fyastoreargentina/" },
      { id: 11, name: "Grupo CHV", logo: logo11, instagram: "https://www.instagram.com/grupo.chv/?hl=es-la" },
      { id: 12, name: "Nordika", logo: logo12, instagram: "https://www.instagram.com/nordikaba/?hl=es-la" },
      { id: 13, name: "Aviador Libros", logo: logo13, instagram: "https://www.instagram.com/aviadorlibros/?hl=es-la" },
      { id: 14, name: "Tecno y Mas", logo: logo14, instagram: "https://www.instagram.com/tecnoymas_ok/?hl=es-la" },
    ],
    []
  );

  const [visibleCompanies, setVisibleCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const updateVisibleCompanies = () => {
      const shuffled = [...companies].sort(() => 0.5 - Math.random());
      setVisibleCompanies(shuffled.slice(0, 8));
    };

    updateVisibleCompanies();
    const interval = setInterval(updateVisibleCompanies, 5000);

    return () => clearInterval(interval);
  }, [companies]);

  return (
    <section id="partners" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl p-8 md:p-12 border border-gray-500">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Empresas que confían en nosotros
            </h2>
            <p className="text-gray-400 mb-8">
              Estas son algunas de las empresas que nos respaldan con su
              confianza y colaboración.
            </p>
            <div className="grid gap-8 md:grid-cols-4">
              {visibleCompanies.map((company) => (
                <div key={company.id} className="text-center">
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-30 h-30 mx-auto rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                  </a>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {company.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
