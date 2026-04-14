import { categories } from "../../data/categories";

interface CategoryFilterProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function CategoryFilter({ selectedId, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-14 justify-center">
      {categories.map(({ id, name, icon: Icon }) => {
        const isSelected = selectedId === id;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="flex flex-col items-center gap-1 group"
          >
            <Icon
              size={32}
              className={`transition-colors ${
                isSelected ? "text-brand-red" : "text-brand-black/50 group-hover:text-red-400"
              }`}
            />
            <span
              className={`text-base font-bold transition-colors ${
                isSelected ? "text-brand-red" : "text-gray-500 group-hover:text-red-400"
              }`}
            >
              {name}
            </span>
            {/* Punto indicador */}
            <span
              className={`w-1.5 h-1.5 rounded-full bg-red-600 transition-opacity ${
                isSelected ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}