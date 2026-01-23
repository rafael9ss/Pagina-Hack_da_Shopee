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

  const handleBannerClick = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={handleBannerClick}
      className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-1.5 sm:py-3 px-4 text-center font-bold text-[10px] sm:text-sm md:text-base sticky top-0 z-50 shadow-lg hover:from-red-700 hover:to-red-600 transition-all active:scale-95 cursor-pointer border-none"
    >
      <div className="flex flex-row items-center justify-center gap-1 flex-nowrap">
        <p className="animate-pulse inline-flex items-center gap-2 whitespace-nowrap">
          ⚡ Desconto só HOJE
        </p>
        <span className="bg-yellow-300 text-red-600 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-black text-[10px] sm:text-sm md:text-base shadow-lg transform hover:scale-110 transition-transform whitespace-nowrap">
          nessa página
        </span>
        <p className="animate-pulse inline-flex items-center gap-2 whitespace-nowrap">
          - {currentDate} ⚡
        </p>
      </div>
    </button>
  );
}
