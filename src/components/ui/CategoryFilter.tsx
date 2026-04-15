import { categories } from "../../data/categories";

interface CategoryFilterProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function CategoryFilter({ selectedId, onSelect }: CategoryFilterProps) {
  return (
    <div className="w-full flex justify-start md:justify-center overflow-x-auto no-scrollbar pb-4 px-4">
      {/* Contenedor con ancho mínimo para evitar que las categorías se encojan */}
      <div className="flex gap-8 md:gap-14 min-w-max">
        {categories.map(({ id, name, icon: Icon }) => {
          const isSelected = selectedId === id;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className="flex flex-col items-center gap-2 group transition-all"
            >
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                isSelected ? "bg-brand-red/10 scale-110" : "bg-transparent"
              }`}>
                <Icon
                  size={28}
                  className={`transition-colors ${
                    isSelected ? "text-brand-red" : "text-brand-black/40 group-hover:text-brand-red/60"
                  }`}
                />
              </div>
              <span
                className={`text-xs md:text-sm font-quicksand font-bold uppercase tracking-wider transition-colors ${
                  isSelected ? "text-brand-red" : "text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {name}
              </span>
              {/* Indicador sutil */}
              <div
                className={`w-1 h-1 rounded-full bg-brand-red transition-all duration-300 ${
                  isSelected ? "opacity-100 scale-125" : "opacity-0 scale-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}