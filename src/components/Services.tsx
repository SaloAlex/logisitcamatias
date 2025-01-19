import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import serviceImage1 from '../public/assets/1.webp';
import serviceImage2 from '../public/assets/2.webp';
import serviceImage3 from '../public/assets/3.webp';

const services = [
  {
    image: serviceImage1,
  },
  {
    image: serviceImage2,
  },
  {
    image: serviceImage3,
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Nuestros Servicios
      </h2>
      <div className="w-full">
        <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black">
          <div className="px-4 sm:px-6 py-6">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              navigation
              className="rounded-2xl overflow-hidden"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[80vh] relative">
                    <img
                      src={service.image}
                      className="w-full h-full object-contain bg-gradient-to-b from-gray-900 to-black"
                      alt={`Service ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        {/* Puedes agregar contenido aquí */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}