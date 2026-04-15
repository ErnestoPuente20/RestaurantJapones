import { PlusCircle } from "lucide-react";
import type { MenuItem } from "../../types";

interface MenuCardProps {
  item: MenuItem;
  onOpenModal: (item: MenuItem) => void;
}

export default function MenuCard({ item, onOpenModal }: MenuCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Imagen con zoom sutil */}
      <div className="w-full aspect-4/5 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col grow gap-2">
        <h3 className="text-brand-black font-kaushan text-xl md:text-2xl group-hover:text-brand-red transition-colors">
          {item.name}
        </h3>

        {item.variants ? (
          <button
            onClick={() => onOpenModal(item)}
            className="mt-auto flex items-center gap-2 text-sm font-quicksand font-bold uppercase tracking-tighter text-gray-400 hover:text-brand-red transition-colors w-fit"
          >
            <PlusCircle size={18} />
            Ver Opciones disponibles
          </button>
        ) : (
          <div className="mt-auto flex flex-col gap-2">
            {item.description && (
              <p className="text-sm text-gray-500 font-noto leading-relaxed">
                {item.description}
              </p>
            )}
            <span className="text-xl font-quicksand font-bold text-brand-red">
              Bs {item.price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}