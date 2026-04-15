import logo from '../../assets/logo-prueba.png';
import { MapPin, Phone, Clock } from 'lucide-react';
import { FaTiktok ,FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contacto' className="w-full bg-transparent px-2 md:px-4">
      {/* Contenedor fondo - Ajustado para que en móvil sea casi full width */}
      <div className='max-w-360 mx-auto bg-brand-black text-brand-white rounded-t-[2.5rem] md:rounded-t-[3rem] shadow-2xl overflow-hidden'>
        
        {/* Contenedor del contenido */}
        <div className='max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative'>

            {/* Divisor vertical - Solo visible en escritorio */}
            <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10' />
            
            {/* Columna 1: Info y Branding */}
            <div className='flex flex-col space-y-10 md:space-y-12'>
              <div className='space-y-6 text-center md:text-left'>
                <motion.img 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  src={logo} 
                  alt="Logo" 
                  className='w-48 md:w-56 brightness-0 invert mx-auto md:mx-0'
                />
                <p className='font-kaushan italic text-2xl text-brand-red'>
                  Magia hecha receta
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10'>
                <div className='space-y-4'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-quicksand font-bold text-brand-red uppercase text-sm tracking-widest'>
                    <Clock size={18} strokeWidth={2.5}/> Horario
                  </h3>
                  <p className='text-base text-brand-white/90 leading-relaxed text-center md:text-left font-noto'>
                    Lunes a Sábado <br />
                    11:30 am - 22:00 pm
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-quicksand font-bold text-brand-red uppercase text-sm tracking-widest'>
                    <Phone size={16} strokeWidth={2.5}/> Contacto
                  </h3>
                  <p className='text-base text-white/90 text-center md:text-left font-noto'>+591 75891236</p>
                </div>

                <div className='space-y-4 sm:col-span-2'>
                  <h3 className='flex items-center justify-center md:justify-start gap-3 font-quicksand font-bold text-brand-red uppercase text-sm tracking-widest'>
                    <MapPin size={16} strokeWidth={2.5}/> Dirección
                  </h3>
                  <p className="text-base text-white/90 text-center md:text-left font-noto">
                    Sopocachi N° 5124, La Paz - Bolivia
                  </p>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className='flex justify-center md:justify-start gap-8 pt-4'>
                {[
                  { icon: FaTiktok, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaWhatsapp, link: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.link} className='text-brand-white hover:text-brand-red transition-all hover:-translate-y-1'>
                    <social.icon size={24}/>
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2 - Mapa (Ajustado para no ser tan alto en móvil) */}
            <div className="relative group h-75 md:h-full min-h-75 lg:min-h-112.5">
              <div className="w-full h-full rounded-4xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  title="Ubicación El Castillo Vagabundo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.435748281134!2d-68.1311111!3d-16.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzE4LjAiUyA2OMKwMDcnNTIuMCJX!5e0!3m2!1ses!2sbo!4v1650000000000!5m2!1ses!2sbo"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Linea final */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium text-center">
            <p>© {currentYear} Japanese Cuisine. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}