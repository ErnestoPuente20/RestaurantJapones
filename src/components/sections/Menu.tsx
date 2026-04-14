import { useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';

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
    <section id="menu-section" className="w-full py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-kaushan text-5xl text-brand-red mb-15 text-center">
          Nuestro Menú
        </h2>

        <CategoryFilter
          selectedId={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Grid de cards */}
        <div className="mt-10">
          <Splide
            key={selectedCategory}
            options={{
              type: 'slide',
              drag: 'free',
              snap: true,
              perPage: 4,
              gap: '1.5rem',
              arrows: true,
              pagination: true,
              breakpoints: {
                1024: {perPage: 3},
                768: {perPage: 2},
                640: {perPage: 1.5, gap: '1rem', paddiing: {right: '2rem'}}
              }
            }}
          >
            {filtered.map(item => (
              <SplideSlide key={item.id}>
                <MenuCard item={item} onOpenModal={setModalItem}/>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Modal — lo hacemos después */}
        {modalItem && (
          <VariantsModal
            item={modalItem}
            onClose={() => setModalItem(null)}
          />
        )}
      </div>
    </section>
  );
}