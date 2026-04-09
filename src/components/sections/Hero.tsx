import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const palabras = ["Magia", "Fantasía", "Tradición"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={targetRef} className='relative flex items-center justify-center w-full min-h-screen bg-brand-white overflow-hidden px-8'>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
         <span className="text-[15vw] font-kaushan opacity-[0.03] text-brand-black -rotate-12">
           Ghibli
         </span>
      </div>

      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10'>
        
        <div className='flex flex-col space-y-10'>
          
          <div className='text-6xl lg:text-7xl font-kaushan leading-[1.2] flex flex-col'>
            <span className="text-brand-black">Un festín que</span>
            
            <div className="flex items-baseline gap-x-4">
              <span className="text-brand-black">es pura</span>
              
              {/* Ajustamos la alineación con un contenedor relativo que no corte el texto */}
              <div className="relative overflow-visible" style={{ minWidth: '220px', height: '1em' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={palabras[index]}
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.05, x: 10 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    /* AQUÍ EL TRUCO: 
                      - Usamos translate-y-[10%] (ajusta este número si aún lo ves alto/bajo)
                      - Quitamos pb-2 y overflow-hidden
                    */
                    className="absolute left-0 text-brand-red whitespace-nowrap translate-y-[8%]"
                  >
                    {palabras[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="font-noto text-xl text-brand-black/70 max-w-md leading-relaxed">
            Ramen artesanal y delicias japonesas en el corazón de Sopocachi. Una experiencia mágica para tu paladar.
          </p>

          <div className="pt-4">
            <button className="group relative px-10 py-4 bg-brand-black text-brand-white rounded-full font-quicksand font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
               <span className="relative z-10">Ver Menú</span>
               <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className='flex justify-center items-center relative'>
          <div className="absolute w-[85%] h-[85%] border-2 border-dashed border-brand-red/10 rounded-full animate-[spin_30s_linear_infinite]" />
          
          <motion.div style={{ rotate }} className='w-full max-w-150 drop-shadow-[0_35px_60px_rgba(0,0,0,0.3)]'>
            <img src="/RamenHero.png" alt="Ramen Signature" className="w-full h-auto" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}