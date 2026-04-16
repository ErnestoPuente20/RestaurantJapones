import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const palabras = ["Magia", "Fantasía", "Tradición"];

const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  },
});

export default function Hero() {
  const [index, setIndex] = useState(0);

  // SOLUCIÓN: Usamos el scroll global sin 'target' para evitar errores de posicionamiento
  const { scrollY } = useScroll();

  // Mapeamos el scroll de 0 a 800 píxeles para una rotación de 180 grados
  const rotate = useTransform(scrollY, [0, 800], [0, 180]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % palabras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <Helmet>
        <title>El Castillo Vagabundo | El Mejor Ramen de La Paz</title>
        <meta name="description" content="Ven a Sopocachi y disfruta de un ramen artesanal único. Inspirado en la magia de Ghibli y el sabor auténtico de Japón. ¡Visítanos en La Paz!" />
        <meta property="og:title" content="El Castillo Vagabundo - Ramen & Magia" />
        <meta property="og:description" content="¿Buscas el mejor ramen de Bolivia? Descubre nuestra receta original en un ambiente mágico." />
        <meta property="og:type" content="website" />
        {/* Aquí iría la URL de una foto real de tu ramen para redes sociales */}
        <meta property="og:image" content="https://tu-dominio.com/preview-ramen.jpg" /> 
      </Helmet>

      <section className="relative flex items-center justify-center w-full min-h-screen bg-brand-white overflow-hidden px-6 md:px-12 py-24 md:py-0">
      
        {/* Fondo decorativo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] md:text-[15vw] font-kaushan opacity-[0.03] text-brand-black -rotate-12 translate-y-[-10%]">
            Ghibli
          </span>
        </div>

        {/* Elementos flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bg-brand-red/20 rounded-full blur-xl"
              style={{
                width: `${20 + i * 8}px`,
                height: `${20 + i * 8}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">

          {/* ── LADO IZQUIERDO ── */}
          <div className="flex flex-col space-y-6 md:space-y-10 text-center md:text-left items-center md:items-start">

            {/* Badge */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 text-brand-red font-quicksand font-bold tracking-widest text-xs uppercase"
            >
              <span className="w-8 h-px bg-brand-red hidden md:block" />
              Sopocachi • La Paz
            </motion.div>

            {/* Título */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-8xl font-kaushan leading-[1.1] flex flex-col items-center md:items-start"
            >
              <span className="text-brand-black">Un festín que</span>
              <div className="flex items-baseline gap-x-3 flex-wrap justify-center md:justify-start">
                <span className="text-brand-black">es pura</span>
                <div className="relative overflow-visible" style={{ minWidth: '180px', height: '1.1em' }}>
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
            </motion.div>

            {/* Descripción */}
            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
              className="font-noto text-base md:text-xl text-brand-black/70 max-w-md leading-relaxed"
            >
              Ramen artesanal y delicias japonesas. Cada tazón cuenta una historia de{' '}
              <span className="text-brand-black font-bold">tradición y cariño.</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp(0.55)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6"
            >
              <a
                href="#menu-section"
                className="group relative inline-block px-8 md:px-10 py-3 md:py-4 bg-brand-black text-brand-white rounded-full font-quicksand font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <span className="relative z-10">Ver Menú</span>
                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <div className="flex flex-col">
                <span className="font-kaushan text-brand-red text-2xl leading-none">Abierto</span>
                <span className="text-base uppercase tracking-tighter text-gray-600">12:00 - 22:00</span>
              </div>
            </motion.div>
          </div>

          {/* ── LADO DERECHO: IMAGEN ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative order-first md:order-last"
          >
            <div className="absolute w-56 h-56 md:w-80 md:h-80 bg-brand-red/10 blur-[100px] rounded-full" />
            <div className="absolute w-[85%] h-[85%] border border-dashed border-brand-red/20 rounded-full animate-[spin_40s_linear_infinite]" />

            <div className="hidden sm:flex absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 border border-brand-red/20 rounded-full items-center justify-center animate-[spin_20s_linear_infinite] p-2">
              <span className="text-[7px] md:text-[8px] font-bold text-brand-red text-center uppercase tracking-tighter">
                • Receta Original • Sabor de Nara •
              </span>
            </div>

            <motion.div
              style={{ rotate }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)] relative z-20"
            >
              <img src="/RamenHero.webp" alt="Ramen Signature" className="w-full h-auto" />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
    
  );
}