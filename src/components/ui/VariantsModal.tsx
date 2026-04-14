import { useEffect } from "react";
import { X } from "lucide-react";
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
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* max-w-4xl — más ancho para que los textos respiren */}
      <div
        className="bg-white rounded-2xl overflow-hidden flex w-full max-w-4xl max-h-[90vh] shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* lado izquierdo — imagen */}
        <div className="w-1/2 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* lado derecho — variantes */}
        <div className="w-1/2 flex flex-col overflow-hidden bg-[#f9f6f1]">
          {/* botón cerrar */}
          <div className="flex justify-end p-5">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* lista de variantes */}
          <div className="overflow-y-auto px-8 pb-8 flex flex-col divide-y divide-gray-200">
            {/* nota general del producto (ej: salsas del ramen) */}
            {item.note && (
              <p className="text-base text-brand-red italic pb-5">{item.note}</p>
            )}
            {item.variants?.map((variant) => (
              <div key={variant.id} className="py-5 first:pt-0">
                <div className="flex justify-between items-start gap-4 mb-2">
                  {/* nombre — jerarquía alta */}
                  <h3 className="font-bold text-gray-900 text-xl leading-snug">
                    {variant.name}
                  </h3>
                  {/* precio — jerarquía alta pero en rojo */}
                  <span className="text-brand-red font-bold text-xl shrink-0">
                    Bs {variant.price}
                  </span>
                </div>
                {/* descripción — jerarquía secundaria */}
                {variant.description && (
                  <p className="text-base text-gray-500 leading-relaxed">
                    {variant.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}