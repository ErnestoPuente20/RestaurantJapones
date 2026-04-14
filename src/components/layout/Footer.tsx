import logo from '../../assets/logo-prueba.png';
import { MessageCircle, MapPin, Phone, Clock, Code } from 'lucide-react';
import { FaTiktok ,FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent px-4">
      {/* Contenedor fondo - Ajustado a max-w-[1440px] para que respire */}
      <div className='max-w-360 mx-auto bg-brand-black text-brand-white rounded-t-[3rem] shadow-2xl overflow-hidden'>
        
        {/* Contenedor del contenido */}
        <div className='max-w-7xl mx-auto px-8 pt-20 pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 relative'>

            {/* Divisor vertical - Un poco más sutil */}
            <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10' />
            
            {/* Columna 1 */}
            <div className='flex flex-col space-y-12'>
              <div className='space-y-6'>
                <img src={logo} alt="Logo" className='w-56 brightness-0 invert opacity-90'/>
                <p className='font-serif italic text-2xl text-brand-red'>
                  Magia hecha receta
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='space-y-4'>
                  <h3 className='flex items-center gap-3 font-bold text-brand-red uppercase text-base tracking-widest'>
                    <Clock size={20} strokeWidth={2.5}/> Horario de atención
                  </h3>
                  {/* Subimos de text-sm a text-base */}
                  <p className='text-base text-brand-white/90 leading-relaxed'>
                    Lunes a Sábado <br />
                    11:30 am - 22:00 pm
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='flex items-center gap-3 font-bold text-brand-red uppercase text-base tracking-widest'>
                    <Phone size={18} strokeWidth={2.5}/> Contáctanos
                  </h3>
                  <p className='text-base text-white/90'>+591 75891236</p>
                </div>

                <div className='space-y-4 sm:col-span-2'>
                  <h3 className='flex items-center gap-3 font-bold text-brand-red uppercase text-base tracking-widest'>
                    <MapPin size={18} strokeWidth={2.5}/> Dirección
                  </h3>
                  <p className="text-base text-white/90">
                    Sopocachi N° 5124, La Paz - Bolivia
                  </p>
                </div>
              </div>
              
              {/* Redes sociales - Iconos un poco más grandes también */}
              <div className='flex gap-8 pt-6'>
                <a href="#" className='text-brand-white hover:text-brand-red transition-all hover:-translate-y-1'>
                  <FaTiktok size={28}/>
                </a>
                <a href="#" className='text-brand-white hover:text-brand-red transition-all hover:-translate-y-1'>
                  <FaInstagram size={28}/>
                </a>
                <a href="#" className='text-brand-white hover:text-brand-red transition-all hover:-translate-y-1'>
                  <FaFacebookF size={26}/>
                </a>
                <a href="#" className='text-brand-white hover:text-brand-red transition-all hover:-translate-y-1'>
                  <FaWhatsapp size={28}/>
                </a>
              </div>
            </div>

            {/* Columna 2 - Mapa */}
            <div className="relative group">
              <div className="w-full h-100 md:h-full min-h-87.5 rounded-[2.5rem] overflow-hidden border border-white/5 grayscale-[0.8] contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                <iframe
                  title="Ubicación El Castillo Vagabundo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2123!2d-68.1234!3d-16.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzAwLjAiUyA2OMKwMDcnMjQuMiJX!5e0!3m2!1ses!2sbo!4v1648000000000!5m2!1ses!2sbo"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Linea final - Créditos un poco más legibles */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-white/30 font-medium">
            <p>© {currentYear} Japanese Cuisine, Todos los derechos reservados</p>
            <div className='flex items-center gap-3 group'>
              <Code size={14} className='group-hover:text-brand-red transition-colors'/>
              <p>
                DISEÑADO POR <span className="text-white/50 group-hover:text-white transition-colors cursor-pointer">Ernesto Puente</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}