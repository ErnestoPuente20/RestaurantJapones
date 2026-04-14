import React from 'react';

export default function AboutUs() {
  return (
    <section className="w-full py-24 bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LADO IZQUIERDO: TEXTO NARRATIVO */}
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <span className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs border-l-2 border-brand-red pl-4">
              Est. 1984
            </span>
            <h2 className="font-kaushan text-5xl md:text-6xl text-brand-black leading-tight">
              Donde la Nostalgia se <br /> vuelve <span className="text-brand-red">Santuario</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed max-w-xl">
            <p className="italic font-noto text-xl text-gray-500 border-gray-200">
              "Nuestra historia comenzó en una pequeña aldea cerca de Nara, donde el humo de la leña y el aroma del dashi llenaban las mañanas brumosas. Queríamos traer ese sentimiento de hogar a la ciudad."
            </p>
            <p className="font-quicksand text-lg">
              <strong className="text-brand-black">Lacquered Tales</strong> no es solo un restaurante; es un refugio contra el paso del tiempo. Utilizamos técnicas de lacado tradicional en nuestra vajilla y métodos de cocción lenta que honran a nuestros ancestros.
            </p>
          </div>
          
          {/* Un pequeño detalle decorativo extra */}
          <div className="w-20 h-px bg-brand-red/30"></div>
        </div>

        {/* LADO DERECHO: COMPOSICIÓN DE FOTOS (STAKED PHOTOS) */}
        <div className="relative h-125 w-full flex items-center justify-center mt-12 lg:mt-0">
          
          {/* FOTO 1: Rotada a la izquierda (Fondo) */}
          <div className="absolute transform -rotate-12 -translate-x-16 translate-y-10 z-10 transition-all duration-500 hover:z-50 hover:scale-110 hover:-rotate-2">
            <div className="bg-white p-3 pb-10 shadow-xl border border-gray-100 rotate-2">
              <img 
                src="https://picsum.photos/id/431/400/500" 
                alt="Interior del restaurante" 
                className="w-40 h-52 object-cover grayscale-[0.2]"
              />
              <span className="block mt-2 font-kaushan text-gray-400 text-sm">Nara, Japón</span>
            </div>
          </div>

          {/* FOTO 2: Rotada a la derecha (Medio) */}
          <div className="absolute transform rotate-12 translate-x-16 -translate-y-10 z-20 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-2">
            <div className="bg-white p-3 pb-10 shadow-xl border border-gray-100 rotate-3">
              <img 
                src="https://picsum.photos/id/429/400/500" 
                alt="Plato tradicional" 
                className="w-40 h-52 object-cover"
              />
              <span className="block mt-2 font-kaushan text-gray-400 text-sm">Tradición</span>
            </div>
          </div>

          {/* FOTO 3: La foto principal (Frente) */}
          <div className="absolute transform -rotate-2 z-30 transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0">
            <div className="bg-white p-4 pb-14 shadow-2xl border border-gray-50">
              <img 
                src="https://picsum.photos/id/488/500/600" 
                alt="Nuestra historia" 
                className="w-60 h-72 object-cover"
              />
              <p className="mt-4 font-kaushan text-brand-red text-center text-2xl">Lacquered Tales</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}