import { useEffect, useState } from "react";

interface DragCursorProps {
  isOver: boolean;
  isDragging: boolean;
}

export default function DragCursor({ isOver, isDragging }: DragCursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!isOver) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{ left: pos.x + 16, top: pos.y - 12 }} // offset al lado derecho del cursor
    >
      <div className={`bg-black text-white text-xs font-semibold rounded-full px-3 py-1.5 transition-transform ${isDragging ? "scale-90" : "scale-100"}`}>
        Arrastrar
      </div>
    </div>
  );
}