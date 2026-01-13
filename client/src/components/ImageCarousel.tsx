import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, src: '/slide-1.png', alt: 'O Hack para Anúncios que Convertem' },
  { id: 2, src: '/slide-2.png', alt: 'Como Criar Títulos Perfeitos' },
  { id: 3, src: '/slide-3.png', alt: 'Fotos Profissionais que Vendem' },
  { id: 4, src: '/slide-4.png', alt: 'Encontrando Produtos que Vendem' },
  { id: 5, src: '/slide-5.png', alt: 'Conhecendo a Central de Vendas' },
  { id: 6, src: '/slide-6.png', alt: 'Análise de Métricas' },
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-0">
      {/* Carrossel Container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-black">
        <div className="relative w-full" style={{ aspectRatio: '9/12' }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain bg-black"
              />
            </div>
          ))}
        </div>

        {/* Botões de Navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-[#ff6b35]/80 hover:bg-[#ff6b35] text-white p-2 sm:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-[#ff6b35]/80 hover:bg-[#ff6b35] text-white p-2 sm:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicadores de Slide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#ff6b35] w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contador de Slides */}
      <div className="text-center mt-6 text-gray-600 font-semibold">
        Slide {currentSlide + 1} de {slides.length}
      </div>
    </div>
  );
}
