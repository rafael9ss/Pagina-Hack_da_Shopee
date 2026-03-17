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
      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-center font-semibold text-[10px] sm:text-xs md:text-sm sticky top-0 z-50 transition-colors duration-200 cursor-pointer border-none"
    >
      <div className="flex items-center justify-center gap-1.5">
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          ⚡ Desconto só HOJE
        </span>
        <span className="bg-white/15 text-white px-2 py-0.5 font-bold text-[10px] sm:text-xs whitespace-nowrap">
          nessa página
        </span>
        <span className="inline-flex items-center whitespace-nowrap">
          — {currentDate} ⚡
        </span>
      </div>
    </button>
  );
}
