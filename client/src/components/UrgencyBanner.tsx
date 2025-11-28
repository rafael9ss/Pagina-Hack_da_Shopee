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
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 text-center font-bold text-sm sm:text-base md:text-lg sticky top-0 z-50 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
        <p className="animate-pulse inline-flex items-center gap-2">
          ⚡ Desconto de
        </p>
        <span className="bg-yellow-300 text-red-600 px-3 py-1 rounded-full font-black text-sm sm:text-base md:text-lg shadow-lg transform hover:scale-110 transition-transform">
          Black Friday
        </span>
        <p className="animate-pulse inline-flex items-center gap-2">
          só HOJE - {currentDate} ⚡
        </p>
      </div>
    </div>
  );
}
