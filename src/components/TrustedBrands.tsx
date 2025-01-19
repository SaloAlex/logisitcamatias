
interface Brand {
  name: string;
  logoUrl: string;
}

const brands: Brand[] = [
  { name: 'Marca 1', logoUrl: '/path/to/logo1.png' },
  { name: 'Marca 2', logoUrl: '/path/to/logo2.png' },
  { name: 'Marca 3', logoUrl: '/path/to/logo3.png' },
  { name: 'Marca 4', logoUrl: '/path/to/logo4.png' },
  { name: 'Marca 5', logoUrl: '/path/to/logo5.png' },
];

export function TrustedBrands() {
  return (
    <section id="trusted-brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Marcas que Confían en Nosotros</h2>
          <p className="text-gray-600">
            Estas son algunas de las empresas que confían en nuestro servicio para llevar a cabo sus envíos con confianza y seguridad.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center">
              <img
                src={brand.logoUrl}
                alt={`Logo de ${brand.name}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
