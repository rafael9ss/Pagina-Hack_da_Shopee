import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Check, X, Shield, Zap, TrendingUp, Users, Mail } from "lucide-react";
import UrgencyBanner from "@/components/UrgencyBanner";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import UpsellModal from "@/components/UpsellModal";

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  // Link do Plano Básico (R$ 10,00)
  // Atualizado para corrigir o endereço de checkout do plano básico. Esse link
  // envia o comprador diretamente para o pagamento do plano de R$10,00.
  const basicPlanLink = "https://lastlink.com/p/C5A7176F8/checkout-payment/";
  const premiumUpsellLink = "https://lastlink.com/p/C8D0FE83F/checkout-payment/"; // Link do Upsell Premium (R$ 24,90)

  const handleBasicPlanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  };

  const handlePremiumConfirm = () => {
    setIsUpsellOpen(false);
    window.location.href = premiumUpsellLink;
  };

  const handleModalClose = () => {
    setIsUpsellOpen(false);
  };
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Carrega o script do player de vídeo imediatamente para carregamento mais rápido
  useEffect(() => {
    // Carrega o script imediatamente (sem delay) para o vídeo abrir mais rápido
    const script = document.createElement('script');
    script.src =
      'https://scripts.converteai.net/a930954b-410c-46a3-9750-318da063a52e/players/692dc6f83dbab420e98ff2ad/v4/player.js';
    script.async = true;
    script.defer = false; // Garante que carrega o mais rápido possível
    document.head.appendChild(script);
  }, []);

  // Aplica animações de botão em mobile/touch e desktop
  useEffect(() => {
    // Adiciona classe de animação mobile a todos os botões em dispositivos touch
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          ('ontouchstart' in window ||
            (navigator as any).maxTouchPoints > 0 ||
            (navigator as any).msMaxTouchPoints > 0)) ||
        false
      );
    };

    if (isTouchDevice()) {
      // Em mobile, adiciona animação de pulse
      const buttons = document.querySelectorAll('button, a[role="button"]');
      buttons.forEach((btn) => {
        if (!btn.classList.contains('btn-mobile-pulse')) {
          btn.classList.add('btn-mobile-pulse');
        }
      });
    }

    // Mantém a funcionalidade original para remover animação após clique
    const buttons = document.querySelectorAll('.btn-scale-pulse');
    buttons.forEach((btn) => {
      const stop = () => (btn as HTMLElement).classList.remove('btn-scale-pulse');
      (btn as HTMLElement).addEventListener('touchstart', stop, { passive: true, once: true });
      (btn as HTMLElement).addEventListener('click', stop, { once: true });
    });

    return () => {
      buttons.forEach((btn) => {
        const stop = () => (btn as HTMLElement).classList.remove('btn-scale-pulse');
        (btn as HTMLElement).removeEventListener('touchstart', stop as EventListener);
        (btn as HTMLElement).removeEventListener('click', stop as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UrgencyBanner />
      <PurchaseNotifications />
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative bg-black text-white py-4 md:py-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff6b35_1px,transparent_1px),linear-gradient(to_bottom,#ff6b35_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/*
              Substituímos a imagem estática por um player de vídeo incorporado. O
              script necessário é carregado via useEffect no início do
              componente. Utilizamos dangerouslySetInnerHTML para que o
              elemento personalizado seja inserido sem que o TypeScript
              acuse erro de tipagem.
            */}
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<vturb-smartplayer id="vid-692dc6f83dbab420e98ff2ad" style="display: block; margin: 0 auto; width: 100%; max-width: 320px; background: #000;"></vturb-smartplayer>',
              }}
              className="w-full flex justify-center"
            />
            <button 
              onClick={scrollToPlans}
              className="premium-cta-btn text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 md:px-12 lg:px-14 py-4 sm:py-6 md:py-7 lg:py-8 inline-block max-w-[90%] break-words mt-1 md:mt-3 hover:shadow-lg active:shadow-md"
            >
              QUERO MEU ACESSO
            </button>
            <div className="bg-gray-900 text-gray-100 p-6 sm:p-8 rounded-xl my-6 max-w-3xl mx-auto hidden">
              <p className="text-lg mb-4 text-left">
                Não importa se você já está na Shopee e não decola, ou se ainda está com medo de começar — este treinamento vai te dar o caminho claro que faltava.
              </p>
              <p className="text-lg mb-4 text-left">
                São <span className="font-bold text-[#EE4D2D]">VÍDEO AULAS</span> 100% PRÁTICAS mostrando exatamente o que fazer:
              </p>
              <ul className="list-none space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Fornecedor certo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Precificação com margem;</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Configuração de anúncio.</span>
                </li>
              </ul>
              <p className="text-lg mt-4 text-left font-semibold">
                Tudo que você precisa para sair do zero (ou do prejuízo) e <span className="font-bold bg-gray-800 px-1 py-0.5 rounded">lucrar de verdade</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 px-4">
            A PROVA DE QUE O CÓDIGO FUNCIONA:
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-12 px-4">
            Veja os resultados de quem parou de queimar dinheiro e começou a usar o Hack da Shopee.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center bg-white shadow-lg">
              <Users className="w-16 h-16 mx-auto mb-4 text-[#ff6b35]" />
              <div className="text-5xl font-black text-black mb-2">+1.500</div>
              <div className="text-lg text-gray-600">Alunos Faturando Alto</div>
            </Card>
            <Card className="p-8 text-center bg-white shadow-lg">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-[#ff6b35]" />
              <div className="text-5xl font-black text-black mb-2">+R$ 10M</div>
              <div className="text-lg text-gray-600">em Vendas Geradas</div>
            </Card>
            <Card className="p-8 text-center bg-white shadow-lg">
              <Zap className="w-16 h-16 mx-auto mb-4 text-[#ff6b35]" />
              <div className="text-5xl font-black text-black mb-2">+50.000</div>
              <div className="text-lg text-gray-600">Produtos na Primeira Página</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "WhatsAppImage2025-10-30at08.41.09(3).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(4).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(5).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(6).jpeg",
              "WhatsAppImage2025-10-30at08.41.09.jpeg",
              "WhatsAppImage2025-10-30at08.41.08(1).jpeg"
            ].map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <img 
                  src={`/${img}`} 
                  alt={`Depoimento ${idx + 1}`} 
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Vídeo de Depoimento */}
          <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-center mb-8 text-gray-900">Veja o Depoimento de Quem Já Contratou:</h3>
            <div style={{paddingBottom: '56.25%', position: 'relative', height: 0}}>
              <iframe 
                src="https://player.vimeo.com/video/1135463264?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                title="Feedback de quem já contratou no Hack da Shopee"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Este Produto Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 md:mb-6 px-4">
            PARA QUEM É O HACK DA SHOPEE?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-8 md:mb-12 px-4">
            Este método foi criado para pessoas reais que querem resultados reais
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35]/10 to-[#ff6b35]/5 border-2 border-[#ff6b35]">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Iniciantes Absolutos</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Você nunca vendeu nada online? Perfeito. O método foi desenhado para quem está começando do ZERO absoluto. Sem jargões, sem enrolação.
                  </p>
                </div>
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35]/10 to-[#ff6b35]/5 border-2 border-[#ff6b35]">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Vendedores Frustrados</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Já tentou vender na Shopee mas só teve prejuízo? Descubra o que você estava fazendo errado e como corrigir em 24 horas.
                  </p>
                </div>
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35]/10 to-[#ff6b35]/5 border-2 border-[#ff6b35]">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Pessoas com Pouco Tempo</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Trabalha o dia todo e só tem 1-2 horas por dia? O Hack da Shopee é otimizado para quem tem vida corrida e precisa de eficiência máxima.
                  </p>
                </div>
              </div>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35]/10 to-[#ff6b35]/5 border-2 border-[#ff6b35]">
                <div className="flex items-start gap-4">
                  <Check className="w-8 h-8 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Quem Quer Renda Extra</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Precisa de R$ 2.000 a R$ 10.000 extras por mês para pagar contas, viajar ou investir? Este é o caminho mais rápido e honesto.
                  </p>
                </div>
              </div>
            </Card>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 sm:p-8 bg-red-50 border-2 border-red-500 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-black mb-3 text-red-600">⚠️ NÃO É PARA VOCÊ SE:</h3>
              <div className="space-y-2 text-left">
                <p className="text-base sm:text-lg text-gray-700 flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  Você quer ficar rico sem fazer nada (não existe fórmula mágica)
                </p>
                <p className="text-base sm:text-lg text-gray-700 flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  Você não está disposto a investir pelo menos 1 hora por dia
                </p>
                <p className="text-base sm:text-lg text-gray-700 flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  Você quer esquemas ilegais ou atalhos desonestos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dor e Identificação Section */}
      <section className="py-20 bg-black text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <img src="/resultados-real.png" alt="Resultados Reais - Métricas de Vendas" className="w-full rounded-lg shadow-2xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-8 md:mb-12 text-[#ff6b35] px-4">
            COMO EU SAÍ DO ZERO PARA MAIS DE R$ 2.000.000,00 FATURADOS NA SHOPEE
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
              <p>
                Sou <span className="font-bold text-[#ff6b35]">Seller Embaixador</span> e certificado pela própria Shopee.
              </p>
              
              <p>
                Depois de vender mais de <span className="font-bold text-[#ff6b35]">R$ 2.000.000 na plataforma</span>, decidi abrir o jogo e entregar o <span className="font-bold text-[#ff6b35]">Hack da Shopee</span> — meu método 100% criado, testado e validado em operação real: passo a passo direto, sem enrolação, pra você vender muito mais com ofertas otimizadas e anúncios profissionais, sem depender de ninguém.
              </p>
              
              <p>
                Eu já estive no seu lugar: perdido em vídeos no YouTube, testando campanha errada e vendo o dinheiro escorrer pelo ralo. Com este método, centenas de alunos pararam de depender de loja física, desencalharam estoque e passaram a vender com previsibilidade.
              </p>
            </div>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35]/20 to-[#ff5722]/20 border-2 border-[#ff6b35]">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Agora você tem duas escolhas: <span className="font-bold">continuar tentando no escuro</span> ou <span className="font-bold text-[#ff6b35]">aplicar o Hack da Shopee e vender do jeito certo</span>. Isso não é curso largado na área de membros. É <span className="font-bold">método, estratégia e execução</span>.
              </p>
            </Card>

            <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
              <p>
                Se você aplicar, vai vender. Quando vender, vai escalar. E quando escalar, vai perceber que isso pode ser o negócio que muda sua vida.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 px-4">
            <Button 
              size="lg" 
              onClick={scrollToPlans}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all inline-block max-w-[95%] break-words shine-press btn-scale-pulse"
            >
              QUERO DESTRAVAR O HACK DA SHOPEE
            </Button>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 md:mb-6 px-4">
            O MÉTODO QUE VAI TE TIRAR DO ZERO
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-8 md:mb-12 px-4">
            E te colocar na primeira página da Shopee
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 px-4">
              Dentro do <span className="font-bold text-[#ff6b35]">Hack da Shopee</span> você tem várias aulas simples e objetivas, mostrando o passo a passo da estratégia que eu usei pra sair do zero e finalmente ver venda entrando todo dia.
            </p>

            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Botão de Compra - CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#ff6b35] to-[#ff5722] text-white">
        <div className="container text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-6">Pronto para Transformar sua Loja?</h3>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">Não deixe mais dinheiro na mesa. Comece hoje mesmo com o Hack da Shopee.</p>
          <button 
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#ff6b35] px-10 py-4 rounded-full font-black text-lg shadow-xl transform hover:scale-105 transition-all inline-block shine-press btn-scale-pulse"
          >
            QUERO DESTRAVAR O HACK DA SHOPEE
          </button>
        </div>
      </section>

      {/* Lista de Conteúdo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12">
            O QUE ESTÁ INCLUSO NO HACK DA SHOPEE?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-base md:text-lg">
            Por menos de R$ 0,50/dia, você tem acesso a um treinamento completo, com tutoriais mostrando na tela como eu crio, configuro e otimizo anúncios que vendem todos os dias.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Passo a Passo para Criar sua Loja na Shopee",
                description: "Para iniciantes - Guia completo desde a criação até a primeira venda"
              },
              {
                title: "Como Aumentar Seu Ranking (Nota) e Vender Mais",
                description: "Sem investir 1 centavo - Técnicas comprovadas para subir no ranking"
              },
              {
                title: "Como Conseguir Feedbacks (Avaliações) Positivos",
                description: "Estratégias para transformar clientes em avaliações 5 estrelas"
              },
              {
                title: "Como Aproveitar Datas Comemorativas Para Vender Mais",
                description: "Calendário completo com estratégias por data e tipo de produto"
              },
              {
                title: "Aumentando seu Ticket Médio e Fidelizando Clientes",
                description: "Técnicas para vender mais para cada cliente e criar repetição de compras"
              },
              {
                title: "Precificação que Cobre as Taxas da Shopee",
                description: "Aprenda a cobrar preços que cubram as taxas e ainda sejam atrativos"
              },
              {
                title: "Melhor Otimização dos seus Anúncios",
                description: "Passo a passo para criar anúncios que convertem e vendem"
              },
              
              
              {
                title: "Como Criar Títulos, Descrições e Fotos que Vendem",
                description: "Copywriting e fotografia que aumentam muito suas vendas"
              },
              {
                title: "Análise das suas Métricas na Shopee",
                description: "Entenda cada métrica e como usá-las para crescer"
              },
              {
                title: "Modalidades de Venda com Frete Grátis",
                description: "Estratégias para vender com frete grátis e manter lucro"
              },
              {
                title: "Modalidades: Leve Mais por Menos e Minhas Promoções",
                description: "Como usar essas ferramentas para aumentar volume de vendas"
              },
              {
                title: "Como Definitivamente Sair da CLT e Decolar seus Lucros",
                description: "Mindset e estratégia para transformar a Shopee em renda principal"
              },
              {
                title: "Planilha de Precificacao (Video Ensinando a Usar)",
                description: "Ferramenta pronta para calcular seus precos ideais automaticamente",
                isBonus: true
              },
{
	                title: "Planilha Completa de Controle de Produtos e Faturamento",
	                description: "Video ensinando a usar - Controle total de seu negocio em um lugar",
	                isBonus: true
	              },
	              {
	                title: "BÔNUS PREMIUM: Guia Definitivo do Afiliado Lucrativo",
	                description: "Disponível apenas no Plano Premium",
	                isBonus: true,
	                isPremiumBonus: true
	              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <Card className={`p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all ${
	                  (item as any).isPremiumBonus 
	                    ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-500 ring-4 ring-yellow-300' 
	                    : (item as any).isBonus 
	                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-400' 
	                      : 'bg-white'
	                }`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35] flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      {(item as any).isBonus && (
                        <span className="inline-block bg-[#ff6b35] text-white text-xs font-black px-3 py-1 rounded-full mb-2">BONUS</span>
                      )}
                      <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-black text-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 md:mb-6 text-[#ff6b35] px-4">
            ESCOLHA SEU ATALHO PARA O SUCESSO
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-8 md:mb-12 px-4">
            Não perca mais tempo. Comece a vender ainda hoje com o plano que mais se encaixa na sua meta.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plano Básico */}
            <ScrollReveal delay={0}>
              <Card className="p-6 sm:p-8 bg-gray-900 border-2 border-gray-700 relative">
	              <UpsellModal 
	                isOpen={isUpsellOpen}
	                onClose={handleModalClose}
	                onConfirm={handlePremiumConfirm}
	                basicPlanLink={basicPlanLink}
	              />
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-black mb-2">PLANO BÁSICO</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Primeiras Vendas e Provas em 7 Dias</p>
                <p className="text-xs sm:text-sm text-yellow-400 font-bold mb-3 bg-yellow-400/10 py-2 px-3 rounded">O Guía do Afiliado não está incluído neste plano</p>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ff6b35]">R$ 10,00</div>
                <p className="text-sm text-gray-400 mt-2">Acesso por 6 meses</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">14 Videoaulas Completas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Planilha de Precificacao (Video Ensinando)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Planilha de Controle de Produtos e Faturamento</span>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Acesso por 6 meses</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Tatica Black Friday</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Produtos Campeoes</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Lista de Fornecedores</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-500">Hack Primeira Pagina</span>
                </div>
              </div>

              <button onClick={handleBasicPlanClick} className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold break-words shine-press btn-scale-pulse">
	                  QUERO DESTRAVAR O HACK DA SHOPEE
	                </button>
            </Card>
            </ScrollReveal>

            {/* Plano Completo - Oferta Premium */}
            <ScrollReveal delay={100}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35] to-[#ff5722] border-4 border-[#ff6b35] relative transform md:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 sm:px-6 py-2 rounded-full font-black text-xs sm:text-sm">
                MAIS ESCOLHIDO - 90% ESCOLHEM ESTE
              </div>
              
              <div className="text-center mb-4 sm:mb-6 mt-4">
                <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">OFERTA PREMIUM</h3>
                <p className="text-sm sm:text-base text-white/90 mb-6 font-bold">Escala, Primeira Página e Operação PRO o Ano Todo</p>
                
                {/* Preço Otimizado */}
                <div className="mb-6">
                  <p className="text-white/80 text-sm sm:text-base mb-2">de R$ 197,00 por apenas 7x de</p>
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-3">R$ 6,31</div>
                  <p className="text-sm sm:text-base text-white/80">(ou R$ 37,90 à vista!)</p>
                </div>
                
                <p className="text-sm text-white/90 font-bold">ACESSO VITALÍCIO</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-semibold">TUDO DO PLANO BÁSICO +</span>
                </div>

                {/* BÔNUS SECTION */}
                <div className="bg-white/20 border-2 border-white rounded-lg p-4 mt-4 mb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white text-[#ff6b35] text-xs font-black px-3 py-1 rounded-full">BÔNUS EXCLUSIVOS</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <span className="text-white font-semibold">Tática Secreta para Vender até 100% a Mais na Black Friday</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <span className="text-white font-semibold">Tática para Escolher Produtos Campeões e Vender Muito Mais</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <span className="text-white font-semibold">Lista Especial de Fornecedores Confiáveis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <span className="text-white font-semibold">Suporte para Tirar Dúvidas Todos os Dias</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <span className="text-white font-semibold">O Hack para Botar seus Produtos na Primeira Página da Shopee</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/10 p-3 rounded mt-3 border-l-4 border-white">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-white font-black block mb-1">BÔNUS PREMIUM: Guia Definitivo do Afiliado Lucrativo</span>
                        <span className="text-white/90 text-sm">Tecnica secreta para afiliados venderem mais na plataforma</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white">Acesso Vitalicio a Tudo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white font-bold">Atualizações Futuras INCLUÍDAS</span>
                </div>
              </div>

              <a href="https://lastlink.com/p/CD9471E2D/checkout-payment/" target="_blank" rel="noopener noreferrer" className="block w-full group">
                <Button className="w-full bg-white text-[#ff6b35] hover:bg-white py-10 sm:py-12 md:py-14 lg:py-16 text-base sm:text-lg md:text-2xl lg:text-3xl font-black shadow-[0_0_50px_rgba(255,255,255,0.6)] break-words leading-tight uppercase tracking-tighter transform hover:scale-110 transition-all duration-300 ring-8 ring-white/20 animate-pulse-slow relative overflow-hidden">
                  <span className="relative z-10">QUERO DESTRAVAR O HACK DA SHOPEE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                </Button>
              </a>
            </Card>
            </ScrollReveal>
          </div>
          
          {/* Métodos de Pagamento */}
          <div className="mt-12 md:mt-16 text-center">
            <img src="/pagamentos.png" alt="Métodos de Pagamento" className="max-w-xs sm:max-w-sm md:max-w-md mx-auto w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Conteúdo Adicional da Oferta Premium */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              CONTEÚDO ADICIONAL DA
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#ff6b35] mb-6">
              OFERTA PREMIUM:
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Você receberá esses bônus exclusivos optando pela oferta premium.
            </p>
          </div>

          {/* Bônus Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Bônus 1 */}
            <ScrollReveal delay={0}>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f2438] border-2 border-[#ff6b35] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-full font-black text-sm mb-4">BÔNUS 1</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                  Tática Secreta para Vender até 100% a Mais na Black Friday
                </h3>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                Descubra as estratégias exclusivas que vendedores profissionais usam para multiplicar suas vendas durante a Black Friday na Shopee.
              </p>
              </div>
            </ScrollReveal>

            {/* Bônus 2 */}
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f2438] border-2 border-[#ff6b35] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-full font-black text-sm mb-4">BÔNUS 2</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                  Tática para Escolher Produtos Campeões e Vender Muito Mais
                </h3>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                Aprenda a identificar quais produtos têm maior potencial de venda e como otimizá-los para gerar lucros exponenciais.
              </p>
              </div>
            </ScrollReveal>

            {/* Bônus 3 */}
            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f2438] border-2 border-[#ff6b35] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-full font-black text-sm mb-4">BÔNUS 3</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                  Lista Especial de Fornecedores Confiáveis
                </h3>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                Acesso a uma lista curada de fornecedores verificados e confiáveis para que você possa escalar sua operação com segurança.
              </p>
              </div>
            </ScrollReveal>

            {/* Bônus 4 */}
            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f2438] border-2 border-[#ff6b35] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-full font-black text-sm mb-4">BÔNUS 4</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                  Suporte para Tirar Dúvidas Todos os Dias
                </h3>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                Tenha acesso a suporte diário para tirar todas as suas dúvidas e receber orientação personalizada durante sua jornada.
              </p>
              </div>
            </ScrollReveal>

            {/* Bônus 5 */}
            <ScrollReveal delay={400}>
              <div className="bg-gradient-to-br from-[#1a3a52] to-[#0f2438] border-2 border-[#ff6b35] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all md:col-span-2 md:max-w-md md:mx-auto">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-full font-black text-sm mb-4">BÔNUS 5</span>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                  O Hack para Botar seus Produtos na Primeira Página da Shopee
                </h3>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                Desbloqueie o segredo que coloca seus produtos em destaque na primeira página da Shopee, garantindo máxima visibilidade.
              </p>
              </div>
            </ScrollReveal>

            {/* BONUS PREMIUM */}
            <ScrollReveal delay={500}>
              <div className="bg-gradient-to-br from-[#ff6b35] to-[#ff5722] border-4 border-yellow-300 rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all md:col-span-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-[#ff6b35] px-4 py-2 rounded-full font-black text-xs sm:text-sm">
                BONUS PREMIUM - APENAS PLANO PREMIUM
              </div>
              <div className="text-center mb-6 mt-4">
                <span className="inline-block bg-yellow-300 text-[#ff6b35] px-4 py-2 rounded-full font-black text-sm mb-4">BONUS EXCLUSIVO PREMIUM</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Guia Definitivo do Afiliado Lucrativo na Shopee
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <img src="/bonus-premium-guia.png" alt="Guia Definitivo do Afiliado" className="w-full h-auto rounded-lg shadow-lg" />
                <img src="/bonus-premium-extras.png" alt="Extras do Bonus Premium" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <p className="text-white text-center leading-relaxed font-semibold text-lg">
                Tecnica secreta ensinada para afiliados da Shopee venderem MUITO mais. Aprenda como maximizar suas comissoes e escalar suas vendas rapidamente.
              </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img src="/garantia-30-dias-416x362.png" alt="Garantia 30 Dias" className="w-32 sm:w-40 md:w-48 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 px-4">
                RISCO ZERO. RESULTADO GARANTIDO
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 px-4">
                OU SEU DINHEIRO DE VOLTA
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <Card className="p-4 sm:p-6 bg-gray-50">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#ff6b35]">Sou iniciante o treinamento é pra mim também?</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Sim, no treinamento você terá acesso a uma estratégia onde não precisa investir praticamente nada além do valor do treinamento para já fazer as primeiras vendas e ter resultados.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-gray-50">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#ff6b35]">Tenho pouco dinheiro para investir, serve pra mim?</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Sim, o treinamento foi estruturado para levar você do 0, mesmo que não saiba nada ou está começando e quer acelerar os seus resultados.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-gray-50">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#ff6b35]">Como eu faço pra começar?</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Após garantir o acesso ao Hack da Shopee, você vai receber o acesso de uma área de membros premium com todo o conteúdo passo a passo e organizado para você apenas executar o que eu mostro.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 bg-gray-50">
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#ff6b35]">Preciso ter estoque?</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Não, você pode começar com fornecedores dropshipping (loja sem estoque).
                </p>
              </Card>
            </div>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff6b35] to-[#ff5722] text-white text-center">
              <h3 className="text-2xl sm:text-3xl font-black mb-4">GARANTIA INCONDICIONAL DE 30 DIAS</h3>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                Se em 30 dias você aplicar o método e não sentir que está mais perto de vender R$ 50.000, nós devolvemos cada centavo do seu investimento.
              </p>
              <p className="text-base sm:text-lg font-bold">
                Sem perguntas. Sem burocracia. Sem enrolação.
              </p>
            </Card>

            <div className="text-center mt-12 px-4">
              <Button 
                size="lg" 
                onClick={scrollToPlans}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all inline-block max-w-[95%] break-words shine-press btn-scale-pulse"
              >
                QUERO DESTRAVAR O HACK DA SHOPEE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secao de Contato */}
      <section className="py-20 bg-gradient-to-r from-[#ff6b35] to-[#ff5722] text-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">DUVIDAS? ENTRE EM CONTATO!</h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                Tem alguma pergunta antes de comecar? Envie um email para nos!
              </p>
              <a 
                href="mailto:hackdashopeeoficial@gmail.com" 
                className="inline-block bg-white text-[#ff6b35] px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                hackdashopeeoficial@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/logo.png" alt="Hack da Shopee" className="w-32 sm:w-40 md:w-48" />
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2025 Hack da Shopee. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
