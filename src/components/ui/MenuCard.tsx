import { PlusCircle } from "lucide-react";
import type { MenuItem } from "../../types";

interface MenuCardProps {
  item: MenuItem;
  onOpenModal: (item: MenuItem) => void;
}

export default function MenuCard({ item, onOpenModal }: MenuCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Imagen */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-brand-red font-semibold text-lg">{item.name}</h3>

        {item.variants ? (
          // Tiene variantes → botón
          <button
            onClick={() => onOpenModal(item)}
            className="flex items-center gap-1.5 text-base text-gray-600 hover:text-brand-red transition-colors w-fit"
          >
            <PlusCircle size={16} />
            Ver variantes
          </button>
        ) : (
          // Sin variantes → descripción + precio
          <>
            {item.description && (
              <p className="text-base text-gray-500 line-clamp-2">{item.description}</p>
            )}
            <span className="text-lg text-gray-700 font-medium">Bs. {item.price}</span>
          </>
        )}
      </div>
    </div>
  );
}