import { motion } from 'framer-motion'
import { Tag, Clock, Sparkles } from 'lucide-react'

export default function Promotion() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-brand-white/50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera de la sección - Animada */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 text-center md:text-left"
        >
          <h2 className="font-kaushan text-4xl md:text-5xl text-brand-red mb-3">
            Promoción especial
          </h2>
          <p className="font-noto text-base md:text-lg text-brand-black/70 italic">
            Un regalo especial del corazón para acompañar tu jornada.
          </p>
        </motion.div>

        {/* Card horizontal - Responsive y Animada */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col md:flex-row bg-brand-black rounded-4xl md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/5'
        >
          {/* Contenedor de imagen - Ajuste de altura en móvil */}
          <div className='w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden'>
            <img 
              src="/promocion.webp" 
              alt="Combo Miyazaki"
              className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000'
            />

            {/* Badge de descuento - Más pequeño en móvil */}
            <div className='absolute top-4 left-4 md:top-6 md:left-6 bg-brand-red text-brand-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-quicksand font-bold text-[10px] md:text-sm tracking-widest flex items-center gap-2 shadow-lg'>
              <Tag size={14} className="md:w-4 md:h-4"/> 2x1 MARTES
            </div>
          </div>

          {/* Contenedor de texto - Padding adaptable */}
          <div className='w-full md:w-3/5 p-8 md:p-16 relative flex flex-col justify-center bg-brand-black'>
            
            {/* Decorativo sutil - Se reduce en móvil */}
            <Sparkles 
              className='absolute top-4 right-4 md:top-10 md:right-10 text-brand-red/10 animate-pulse' 
              size={60} 
            />
            <Sparkles 
              className='hidden md:block absolute bottom-10 right-20 text-brand-red/5' 
              size={100} 
            />

            <div className='space-y-4 md:space-y-6 z-10'>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='font-kaushan text-brand-red text-4xl md:text-5xl lg:text-6xl'
              >
                Combo Miyazaki
              </motion.h3>
              
              <p className='text-brand-white/80 font-noto text-sm md:text-lg leading-relaxed'>
                Disfruta de nuestra selección artesanal más completa. Una experiencia diseñada para compartir memorias en el corazón de la ciudad.
              </p>

              {/* Info de tiempo */}
              <div className='flex gap-3 items-center py-4 border-y border-white/10 text-brand-white/60 font-quicksand text-xs md:text-base'>
                <Clock size={18} className='text-brand-red shrink-0'/>
                <span>Disponible de 12:00 a 15:00</span>
              </div>

              {/* Precios */}
              <div className='flex items-end gap-3 pt-2'>
                <span className='font-quicksand text-3xl md:text-5xl font-bold text-brand-white leading-none'>
                  Bs 19
                </span>
                <span className='font-quicksand text-base md:text-xl text-brand-white/30 line-through mb-1'>
                  Bs 38
                </span>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}