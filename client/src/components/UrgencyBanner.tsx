import { useEffect, useState } from "react";

export default function UrgencyBanner() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    setCurrentDate(formatted);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 text-center font-bold text-xs sm:text-sm md:text-base sticky top-0 z-50 shadow-lg">
      <div className="flex flex-row items-center justify-center gap-1 flex-nowrap">
        {/* Atualizado para exibir a mensagem de desconto apenas nesta página. Mantém o estilo original com destaque em uma tag span. */}
        <p className="animate-pulse inline-flex items-center gap-2 whitespace-nowrap">
          ⚡ Desconto só HOJE
        </p>
        <span className="bg-yellow-300 text-red-600 px-3 py-1 rounded-full font-black text-xs sm:text-sm md:text-base shadow-lg transform hover:scale-110 transition-transform whitespace-nowrap">
          nessa página
        </span>
        <p className="animate-pulse inline-flex items-center gap-2 whitespace-nowrap">
          - {currentDate} ⚡
        </p>
      </div>
    </div>
  );
}
