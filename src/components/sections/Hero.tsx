import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Utensils } from 'lucide-react';

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
      
      {/* 1. Fondo Decorativo Mejorado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[15vw] font-kaushan opacity-[0.03] text-brand-black -rotate-12 translate-y-[-10%]">
          Ghibli
        </span>
      </div>

      {/* 2. Elementos Flotantes (Pétalos o Chispas de Magia) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-brand-red/20 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10'>
        
        <div className='flex flex-col space-y-10'>
          {/* Badge de "Sopocachi, Bolivia" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-brand-red font-quicksand font-bold tracking-widest text-xs uppercase"
          >
            <span className="w-8 h-px bg-brand-red"></span>
            Sopocachi • La Paz
          </motion.div>

          <div className='text-6xl lg:text-8xl font-kaushan leading-[1.1] flex flex-col'>
            <span className="text-brand-black">Un festín que</span>
            <div className="flex items-baseline gap-x-4">
              <span className="text-brand-black">es pura</span>
              <div className="relative overflow-visible" style={{ minWidth: '220px', height: '1em' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={palabras[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-brand-red whitespace-nowrap translate-y-[8%]"
                  >
                    {palabras[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="font-noto text-xl text-brand-black/70 max-w-md leading-relaxed">
            Ramen artesanal y delicias japonesas. Cada tazón cuenta una historia de <span className="text-brand-black font-bold text-lg">tradición y cariño.</span>
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="#menu-section" 
              className="group relative inline-block px-10 py-4 bg-brand-black text-brand-white rounded-full font-quicksand font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <span className="relative z-10">Ver Menú</span>
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <div className="flex flex-col">
               <span className="font-kaushan text-brand-red text-xl leading-none">Abierto</span>
               <span className="text-[10px] uppercase tracking-tighter text-gray-400">12:00 - 22:00</span>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: IMAGEN CON GLOW */}
        <div className='flex justify-center items-center relative'>
          {/* Brillo mágico detrás del plato */}
          <div className="absolute w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full" />
          
          <div className="absolute w-[90%] h-[90%] border border-dashed border-brand-red/20 rounded-full animate-[spin_40s_linear_infinite]" />
          
          {/* Sello circular tipo Hanko */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-brand-red/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite] p-2">
            <span className="text-[8px] font-bold text-brand-red text-center uppercase tracking-tighter">
              • Receta Original • Sabor de Nara •
            </span>
          </div>

          <motion.div 
            style={{ rotate }} 
            className='w-full max-w-150 drop-shadow-[0_45px_70px_rgba(0,0,0,0.4)] relative z-20'
          >
            <img src="/RamenHero.png" alt="Ramen Signature" className="w-full h-auto" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}