import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion, AnimatePresence } from "framer-motion";

import CategoryFilter from "../ui/CategoryFilter";
import MenuCard from "../ui/MenuCard";
import { menuItems } from "../../data/menuItems";
import type { MenuItem } from "../../types";
import VariantsModal from "../ui/VariantsModal";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);

  const filtered = menuItems.filter(item => item.categoryId === selectedCategory);

  return (
    <section id="menu-section" className="w-full py-20 md:py-32 bg-brand-white">
      <div className="lg:max-w-6xl 2xl:max-w-7xl mx-auto px-4">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-kaushan text-5xl md:text-6xl text-brand-red mb-12 md:mb-20 text-center"
        >
          Nuestro Menú
        </motion.h2>

        <CategoryFilter
          selectedId={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Contenedor del Slider con animación de cambio */}
        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Splide
                options={{
                  type: 'slide',
                  arrows: true,
                  pagination: false,
                  perPage: 4,
                  gap: '2rem',
                  breakpoints: {
                    1280: { perPage: 3 },
                    1024: { perPage: 2, gap: '1.5rem' },
                    640: { 
                      perPage: 1, 
                      padding: { right: '4rem' }, // Deja ver un poco de la siguiente card
                      gap: '1rem',
                      arrows: false 
                    }
                  }
                }}
              >
                {filtered.map(item => (
                  <SplideSlide key={item.id} className="pb-12"> {/* Padding para la sombra */}
                    <MenuCard item={item} onOpenModal={setModalItem}/>
                  </SplideSlide>
                ))}
              </Splide>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {modalItem && (
            <VariantsModal
              item={modalItem}
              onClose={() => setModalItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}