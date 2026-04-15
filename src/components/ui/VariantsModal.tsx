import { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion"; // Añadido
import type { MenuItem } from "../../types";

interface VariantsModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function VariantsModal({ item, onClose }: VariantsModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay - Oscurece el fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Contenedor del Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] shadow-2xl z-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar flotante (para móvil) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full text-brand-black shadow-lg md:hidden"
        >
          <X size={20} />
        </button>

        {/* Lado izquierdo — Imagen (Se ajusta en móvil) */}
        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto shrink-0 relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente opcional para la imagen en móvil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
        </div>

        {/* Lado derecho — Variantes */}
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden bg-[#f9f6f1]">
          {/* Botón cerrar (Solo Escritorio) */}
          <div className="hidden md:flex justify-end p-5">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-brand-red transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Header del Modal en móvil */}
          <div className="px-6 pt-6 md:hidden">
            <h2 className="font-kaushan text-3xl text-brand-red">{item.name}</h2>
          </div>

          {/* Lista de variantes - Scrollable */}
          <div className="overflow-y-auto px-6 md:px-8 pb-8 pt-4 md:pt-0 flex flex-col divide-y divide-gray-200/60 custom-scrollbar">
            {/* Nota del producto */}
            {item.note && (
              <div className="bg-brand-red/5 p-4 rounded-xl mb-6">
                <p className="text-sm md:text-base text-brand-red font-quicksand font-medium italic">
                  {item.note}
                </p>
              </div>
            )}

            {item.variants?.map((variant) => (
              <div key={variant.id} className="py-5 first:pt-0 group">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-quicksand font-bold text-gray-900 text-lg md:text-xl leading-tight group-hover:text-brand-red transition-colors">
                    {variant.name}
                  </h3>
                  <span className="text-brand-red font-bold text-lg md:text-xl shrink-0 whitespace-nowrap">
                    Bs {variant.price}
                  </span>
                </div>
                
                {variant.description && (
                  <p className="text-sm md:text-base text-gray-500 font-noto leading-relaxed">
                    {variant.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footer del modal (Opcional, para dar cierre visual) */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 md:hidden text-center">
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
               Desliza para ver más opciones
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}