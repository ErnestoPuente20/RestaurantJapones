import { motion } from 'framer-motion';
import { Tag, Clock, Sparkles } from 'lucide-react';

export default function Promotion() {
  return (
    <section className='w-full py-24 bg-brand-white/50 px-8'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Cabecera de la sección */}
        <div className='mb-12'>
          <h2 className='font-kaushan text-5xl text-brand-red mb-4'>Promoción Especial</h2>
          <p className='font-noto text-lg text-brand-black/60 italic'>
            Un regalo especial del corazón para acompañar tu jornada.
          </p>
        </div>

        {/* Card Horizontal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex flex-col md:flex-row bg-brand-black rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/5'
        >
          
          {/* Contenedor de Imagen */}
          <div className='w-full md:w-2/5 relative h-72 md:h-auto overflow-hidden'>
            <img 
              src="/promocion.png" 
              alt="Combo Miyazaki" 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
            />
            {/* Badge de Descuento */}
            <div className='absolute top-6 left-6 bg-brand-red text-brand-white px-4 py-2 rounded-full font-quicksand font-bold text-sm tracking-widest flex items-center gap-2 shadow-lg'>
              <Tag size={16} /> 2X1 MARTES
            </div>
          </div>

          {/* Contenedor de Texto */}
          <div className='w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative'>
            
            {/* Decoración sutil de fondo */}
            <Sparkles className='absolute top-10 right-10 text-brand-red/10' size={120} />

            <div className='space-y-6 z-10'>
              <h3 className='font-kaushan text-5xl text-brand-red'>Combo Miyazaki</h3>
              
              <p className='font-noto text-lg text-brand-white/80 leading-relaxed max-w-lg'>
                Disfruta de nuestra selección artesanal más completa. Una experiencia diseñada para compartir memorias en el corazón de la ciudad.
              </p>

              <div className='flex flex-col gap-4 py-4 border-y border-white/10'>
                <div className='flex items-center gap-3 text-brand-white/60 font-quicksand'>
                  <Clock size={18} className='text-brand-red' />
                  <span>Disponible de 12:00 a 15:00</span>
                </div>
              </div>

              <div className='flex items-end gap-3'>
                <span className='font-quicksand text-4xl font-bold text-brand-white'>Bs 19</span>
                <span className='font-quicksand text-lg text-brand-white/30 line-through mb-1'>Bs 38</span>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}