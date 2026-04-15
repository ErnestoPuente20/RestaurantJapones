import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F5F3EE] overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LADO IZQUIERDO: TEXTO NARRATIVO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="space-y-3">
            <span className="text-brand-red font-quicksand font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs border-l-2 border-brand-red pl-4">
              Est. 1984
            </span>
            <h2 className="font-kaushan text-4xl md:text-6xl text-brand-black leading-tight">
              Donde la Nostalgia se <br className="hidden md:block" /> vuelve <span className="text-brand-red">Santuario</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-xl">
            <p className="italic font-noto text-lg md:text-xl text-gray-500 border-gray-200">
              "Nuestra historia comenzó en una pequeña aldea cerca de Nara, donde el humo de la leña y el aroma del dashi llenaban las mañanas brumosas. Queríamos traer ese sentimiento de hogar a la ciudad."
            </p>
            <p className="font-quicksand text-base md:text-lg">
              <strong className="text-brand-black">Lacquered Tales</strong> no es solo un restaurante; es un refugio contra el paso del tiempo. Utilizamos técnicas de lacado tradicional en nuestra vajilla y métodos de cocción lenta que honran a nuestros ancestros.
            </p>
          </div>
          
          <div className="w-20 h-px bg-brand-red/30"></div>
        </motion.div>

        {/* LADO DERECHO: COMPOSICIÓN DE FOTOS (STAKED PHOTOS) */}
        <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center mt-16 lg:mt-0">
          
          {/* FOTO 1: Fondo Izquierda */}
          <motion.div 
            initial={{ opacity: 0, rotate: -20, x: -50 }}
            whileInView={{ opacity: 1, rotate: -12, x: -60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute -translate-x-12 md:-translate-x-16 translate-y-10 z-10 transition-transform duration-500 hover:z-50 hover:scale-110"
          >
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 shadow-xl border border-gray-100">
              <img 
                src="https://picsum.photos/id/431/400/500" 
                alt="Nara, Japón" 
                className="w-32 h-44 md:w-40 md:h-52 object-cover grayscale-[0.2]"
              />
              <span className="block mt-2 font-kaushan text-gray-400 text-[10px] md:text-sm text-center">Nara, Japón</span>
            </div>
          </motion.div>

          {/* FOTO 2: Medio Derecha */}
          <motion.div 
            initial={{ opacity: 0, rotate: 20, x: 50 }}
            whileInView={{ opacity: 1, rotate: 12, x: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute translate-x-12 md:translate-x-16 -translate-y-10 z-20 transition-transform duration-500 hover:z-50 hover:scale-110"
          >
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 shadow-xl border border-gray-100">
              <img 
                src="https://picsum.photos/id/429/400/500" 
                alt="Tradición" 
                className="w-32 h-44 md:w-40 md:h-52 object-cover"
              />
              <span className="block mt-2 font-kaushan text-gray-400 text-[10px] md:text-sm text-center">Tradición</span>
            </div>
          </motion.div>

          {/* FOTO 3: Principal Frente */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-30 transition-all duration-500 hover:z-50 hover:scale-105"
          >
            <div className="bg-white p-3 md:p-4 pb-10 md:pb-14 shadow-2xl border border-gray-50 transform -rotate-2 hover:rotate-0 transition-transform">
              <img 
                src="https://picsum.photos/id/488/500/600" 
                alt="Lacquered Tales" 
                className="w-48 h-60 md:w-60 md:h-72 object-cover"
              />
              <p className="mt-4 font-kaushan text-brand-red text-center text-xl md:text-2xl">Lacquered Tales</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}