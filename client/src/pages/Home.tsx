import { useState, useEffect } from "react";
import { Check, X, Shield, ArrowRight, ChevronDown, TrendingDown, AlertTriangle, Clock, Eye } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import UrgencyBanner from "@/components/UrgencyBanner";
import PurchaseNotifications from "@/components/PurchaseNotifications";
import WhatsAppButton from "@/components/WhatsAppButton";
import UpsellModal from "@/components/UpsellModal";

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const basicPlanLink = "https://payfast.greenn.com.br/redirect/259808";
  const premiumUpsellLink = "https://payfast.greenn.com.br/redirect/259806";

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/a930954b-410c-46a3-9750-318da063a52e/players/6978ef4614d220c3d64fd2b3/v4/player.js';
    script.async = true;
    script.defer = false;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#fafafa] font-sans overflow-x-hidden">
      <UrgencyBanner />
      <PurchaseNotifications />
      <WhatsAppButton />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden noise-overlay">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#ff6b35]/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-5"
          >
            <span className="section-label px-4 py-1.5 border border-[#ff6b35]/20 bg-[#ff6b35]/[0.05] inline-block">
              Método Validado • +1.500 Alunos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-semibold mb-5 leading-[1.1] tracking-tight"
          >
            Ex-CLT descobre{" "}
            <span className="text-[#ff6b35]">"brecha" simples na Shopee</span>{" "}
            que pode gerar de R$150 a R$233 por dia — e qualquer pessoa pode começar hoje.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-white/50 mb-8 max-w-xl mx-auto"
          >
            <strong className="text-white/90">Assista o vídeo</strong> e descubra como.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-3xl mx-auto mb-10"
          >
            <div className="absolute -inset-px bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
            <div
              dangerouslySetInnerHTML={{
                __html: '<vturb-smartplayer id="vid-6978ef4614d220c3d64fd2b3" style="display: block; margin: 0 auto; width: 100%; max-width: 800px; aspect-ratio: 16/9;"></vturb-smartplayer>',
              }}
              className="w-full border border-white/[0.06] bg-black relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button
              onClick={scrollToPlans}
              className="btn-cta px-8 py-4 md:px-10 md:py-5 text-base md:text-lg animate-pulse-glow"
            >
              QUERO ACESSO IMEDIATO <ArrowRight className="inline-block ml-2 w-5 h-5 mb-0.5" />
            </button>
            <p className="mt-4 text-[10px] text-white/25 tracking-[0.15em] font-medium">
              🔒 ACESSO VITALÍCIO • GARANTIA 30 DIAS • RISCO ZERO
            </p>
          </motion.div>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ═══════════════════════════════════════════
          PROVA SOCIAL
      ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5">

          <StaggerContainer className="grid grid-cols-3 gap-4 md:gap-8 mb-14">
            {[
              { number: "+1.500", label: "Alunos Ativos" },
              { number: "+R$ 10M", label: "Faturados" },
              { number: "TOP 1%", label: "Sellers Shopee" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center py-4 md:py-6 border-l border-[#ff6b35]/40">
                  <div className="text-2xl md:text-[2.75rem] font-semibold text-white tracking-tight leading-none mb-1.5">
                    <AnimatedCounter value={stat.number} />
                  </div>
                  <div className="section-label">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2" staggerDelay={0.06}>
            {[
              "WhatsAppImage2025-10-30at08.41.09(3).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(4).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(5).jpeg",
              "WhatsAppImage2025-10-30at08.41.09(6).jpeg",
              "WhatsAppImage2025-10-30at08.41.09.jpeg",
              "WhatsAppImage2025-10-30at08.41.08(1).jpeg"
            ].map((img, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="overflow-hidden border border-white/[0.05] group cursor-pointer"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(255, 107, 53, 0.3)' }}
                  transition={{ duration: 0.25 }}
                >
                  <img
                    src={`/${img}`}
                    alt={`Resultado de aluno ${idx + 1}`}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Depoimento */}
          <ScrollReveal delay={200} className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-center mb-5 text-white/60">
              Veja quem já <span className="text-[#ff6b35]">aplicou e vendeu:</span>
            </h3>
            <div className="border border-white/[0.06] overflow-hidden" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
              <iframe
                src="https://player.vimeo.com/video/1135463264?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Depoimento de aluno do Hack da Shopee"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ═══════════════════════════════════════════
          DORES → SOLUÇÕES
      ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative noise-overlay">
        <div className="max-w-5xl mx-auto px-5 relative z-10">

          <ScrollReveal className="mb-10">
            <span className="section-label mb-3 block">Diagnóstico</span>
            <h2 className="text-2xl md:text-[2.5rem] font-semibold tracking-tight leading-tight">
              Você se <span className="text-[#ff6b35]">identifica?</span>
            </h2>
            <div className="accent-bar mt-4" />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerDelay={0.1}>
            {[
              {
                icon: TrendingDown,
                pain: "Cria anúncios mas ninguém compra",
                solution: "Aprenda a otimizar títulos, fotos e descrições que convertem de verdade."
              },
              {
                icon: AlertTriangle,
                pain: "Já gastou com ads e só teve prejuízo",
                solution: "Descubra como vender organicamente sem queimar dinheiro."
              },
              {
                icon: Clock,
                pain: "Tem pouco tempo e precisa de resultado rápido",
                solution: "Método otimizado para quem tem 1-2h por dia."
              },
              {
                icon: Eye,
                pain: "Vê outros vendendo e não sabe por onde começar",
                solution: "Passo a passo do zero até os primeiros R$ 5.000."
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex gap-4 p-4 md:p-5 card-surface group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#ff6b35]/[0.08] border border-[#ff6b35]/15 group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#ff6b35]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">{item.pain}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{item.solution}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={400} className="mt-10 text-center">
            <button
              onClick={scrollToPlans}
              className="btn-cta px-8 py-4 md:px-10 md:py-4.5 text-sm md:text-base"
            >
              QUERO RESOLVER ISSO AGORA <ArrowRight className="inline-block ml-2 w-4 h-4 mb-0.5" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ═══════════════════════════════════════════
          AUTORIDADE
      ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <ScrollReveal>
            <div className="overflow-hidden border border-white/[0.06] bg-[#0f0f11]">
              <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="relative h-[280px] md:h-auto">
                  <img
                    src="/resultados-real.png"
                    alt="Dashboard Shopee com resultados reais"
                    className="absolute inset-0 w-full h-full object-cover object-left"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-[#ff6b35] font-semibold text-4xl md:text-5xl tracking-tight mb-0.5">
                        <AnimatedCounter value="R$ 2M+" />
                      </div>
                      <p className="section-label">Faturados na Shopee</p>
                    </motion.div>
                  </div>
                </div>

                <div className="p-7 md:p-10 flex flex-col justify-center">
                  <ScrollReveal direction="right" delay={200}>
                    <span className="section-label mb-3 block">Credenciais</span>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-tight">
                      Quem criou o <span className="text-[#ff6b35]">Hack</span>.
                    </h2>
                    <div className="space-y-3.5">
                      {[
                        ["Seller Embaixador", "certificado pela própria Shopee"],
                        ["+R$ 2 milhões", "faturados em operação real"],
                        ["+1.500 alunos", "usando o método com resultados"],
                      ].map(([bold, text], i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 flex items-center justify-center bg-[#ff6b35]/10 flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#ff6b35]" />
                          </div>
                          <p className="text-white/70 text-sm">
                            <strong className="text-white/90">{bold}</strong> — {text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-white/30 text-xs mt-6 leading-relaxed">
                      Não sou guru de palco. Sou campo de batalha. O que eu vendo aqui é o{" "}
                      <strong className="text-white/50">manual de operações</strong> da minha empresa.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ═══════════════════════════════════════════
          ARSENAL
      ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 relative noise-overlay">
        <div className="max-w-5xl mx-auto px-5 relative z-10">

          <ScrollReveal className="text-center mb-10">
            <span className="section-label mb-3 block">O que você recebe</span>
            <h2 className="text-2xl md:text-[2.5rem] font-semibold mb-2">
              Arsenal <span className="text-[#ff6b35]">Completo</span>
            </h2>
            <p className="text-white/35 text-sm max-w-md mx-auto">Tudo que você precisa para vender na Shopee. Nada que não precisa.</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12" staggerDelay={0.06}>
            {[
              { title: "Setup de Loja Profissional", benefit: "Comece certo desde o dia 1" },
              { title: "SEO e Rankeamento", benefit: "Apareça na primeira página" },
              { title: "Avaliações 5 Estrelas", benefit: "Construa reputação rápido" },
              { title: "Calendário de Vendas Sazonais", benefit: "Venda mais em datas-chave" },
              { title: "Fidelização de Clientes", benefit: "Clientes que voltam a comprar" },
              { title: "Precificação Anti-Prejuízo", benefit: "Nunca mais venda no vermelho" },
              { title: "Copywriting para Anúncios", benefit: "Títulos que atraem cliques" },
              { title: "Análise de Dados e Métricas", benefit: "Decisões baseadas em números" },
              { title: "Frete Grátis Lucrativo", benefit: "Ofereça frete grátis com margem" },
              { title: "Estratégias de Flash Sale", benefit: "Explosões de venda programadas" },
            ].map((mod, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex items-center gap-3.5 p-3.5 card-surface group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-7 h-7 flex items-center justify-center bg-[#ff6b35]/[0.08] text-[#ff6b35] font-medium text-[10px] flex-shrink-0 border border-[#ff6b35]/10 group-hover:bg-[#ff6b35]/15 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0 flex items-baseline gap-2">
                    <span className="font-medium text-white/85 text-sm">{mod.title}</span>
                    <span className="text-white/25 text-xs hidden md:inline">— {mod.benefit}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Garantia */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-5 p-6 md:p-8 border border-[#ff6b35]/15 bg-[#ff6b35]/[0.03]">
              <img src="/garantia-30-dias-416x362.png" alt="Garantia 30 Dias" className="w-16 md:w-20 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Risco zero. Garantia de 30 dias.</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Aplique o método. Se em 30 dias não sentir resultado, devolvemos{" "}
                  <strong className="text-white/70">cada centavo</strong>. Sem perguntas. Sem burocracia.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ═══════════════════════════════════════════
          PRICING + FAQ
      ═══════════════════════════════════════════ */}
      <section id="planos" className="py-16 md:py-24 relative noise-overlay">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff6b35]/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 relative z-10">

          <ScrollReveal className="text-center mb-12">
            <span className="section-label mb-3 block">Oferta por Tempo Limitado</span>
            <h2 className="text-2xl md:text-[2.5rem] lg:text-[3rem] font-semibold text-white">
              Escolha seu <span className="text-[#ff6b35]">caminho</span>
            </h2>
          </ScrollReveal>

          <UpsellModal
            isOpen={isUpsellOpen}
            onClose={handleModalClose}
            onConfirm={handlePremiumConfirm}
            basicPlanLink={basicPlanLink}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">

            {/* Starter */}
            <ScrollReveal direction="left" delay={100}>
              <motion.div
                className="h-full p-6 md:p-8 border border-white/[0.06] bg-white/[0.015] flex flex-col"
                whileHover={{ borderColor: 'rgba(255,255,255,0.12)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white/80 mb-0.5">Starter</h3>
                <p className="text-white/30 mb-5 text-xs">Para quem quer testar a água.</p>
                <div className="text-[2.5rem] font-semibold text-white mb-5 tracking-tight">
                  R$ 10<span className="text-base text-white/30 font-normal">,00</span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-white/60 flex-1">
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> 14 Aulas Práticas</li>
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> Planilhas de Precificação</li>
                  <li className="flex gap-3"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> 6 Meses de Acesso</li>
                  <li className="flex gap-3 text-white/20"><X className="w-4 h-4 flex-shrink-0" /> <span className="line-through">Grupo de Suporte</span></li>
                  <li className="flex gap-3 text-white/20"><X className="w-4 h-4 flex-shrink-0" /> <span className="line-through">Táticas Black Friday</span></li>
                  <li className="flex gap-3 text-white/20"><X className="w-4 h-4 flex-shrink-0" /> <span className="line-through">Lista de Fornecedores</span></li>
                  <li className="flex gap-3 text-white/20"><X className="w-4 h-4 flex-shrink-0" /> <span className="line-through">Hack Primeira Página</span></li>
                </ul>

                <button onClick={handleBasicPlanClick} className="btn-outline w-full py-3.5 text-xs uppercase tracking-[0.15em]">
                  Começar Básico
                </button>
              </motion.div>
            </ScrollReveal>

            {/* Pro Seller */}
            <ScrollReveal direction="right" delay={200}>
              <motion.div
                className="h-full p-6 md:p-8 border-2 border-[#ff6b35]/60 relative bg-[#0f0f11] flex flex-col"
                whileHover={{ borderColor: 'rgba(255, 107, 53, 0.9)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6b35] text-white font-semibold px-4 py-1 text-[10px] uppercase tracking-[0.12em]">
                  90% Escolhem Este
                </div>

                <h3 className="text-xl font-semibold text-[#ff6b35] mb-0.5">Pro Seller</h3>
                <p className="text-white/35 mb-5 text-xs">O arsenal completo para escalar.</p>

                <div className="flex items-baseline gap-2.5 mb-1">
                  <span className="text-white/30 line-through text-sm">R$ 197</span>
                  <span className="text-[2.75rem] font-semibold text-white tracking-tight">R$ 37<span className="text-lg text-white/35 font-normal">,90</span></span>
                </div>
                <p className="text-[10px] text-white/25 mb-6 tracking-[0.12em] font-medium">PAGAMENTO ÚNICO • ACESSO VITALÍCIO • 7x de R$ 6,31</p>

                <div className="space-y-2.5 mb-6 text-sm flex-1">
                  <div className="flex gap-3 text-white font-medium"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> TUDO do Plano Starter</div>
                  <div className="flex gap-3 text-white/80"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> Acesso Vitalício + Updates</div>
                  <div className="flex gap-3 text-white/80"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> <span><span className="text-[#ff6b35] font-medium">Bônus:</span> Táticas Black Friday</span></div>
                  <div className="flex gap-3 text-white/80"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> <span><span className="text-[#ff6b35] font-medium">Bônus:</span> Lista de Fornecedores</span></div>
                  <div className="flex gap-3 text-white/80"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> <span><span className="text-[#ff6b35] font-medium">Bônus:</span> Suporte Diário</span></div>
                  <div className="flex gap-3 text-white/80"><Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" /> <span><span className="text-[#ff6b35] font-medium">Bônus:</span> Hack Primeira Página</span></div>
                  <div className="flex gap-3 text-white/90 bg-white/[0.03] p-3 border-l-2 border-[#ff6b35] mt-1">
                    <Check className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-sm">Bônus Premium: Guia do Afiliado Lucrativo</span>
                      <span className="text-white/35 text-xs">Técnica secreta para afiliados venderem mais</span>
                    </div>
                  </div>
                </div>

                <a href="https://payfast.greenn.com.br/redirect/259805" className="block w-full">
                  <button className="btn-cta w-full py-4 text-base animate-pulse-glow font-semibold">
                    GARANTIR ACESSO PRO
                  </button>
                </a>

                <div className="mt-3 text-center">
                  <span className="text-[10px] text-white/25 flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3" /> Garantia de 30 dias • Pagamento seguro
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Pagamentos */}
          <ScrollReveal delay={300} className="mt-8 text-center">
            <img src="/pagamentos.png" className="h-6 mx-auto grayscale opacity-25 hover:grayscale-0 hover:opacity-80 transition-all duration-500" alt="Métodos de pagamento aceitos" />
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={200} className="max-w-3xl mx-auto mt-16">
            <h3 className="text-lg font-semibold text-center text-white/50 mb-6">Perguntas Frequentes</h3>
            <div className="space-y-2">
              {[
                {
                  q: "Sou iniciante, serve pra mim?",
                  a: "Sim. O método foi feito para quem está começando do zero. Sem jargões, sem enrolação."
                },
                {
                  q: "Preciso ter estoque?",
                  a: "Não. Você pode começar com fornecedores dropshipping, sem precisar de estoque próprio."
                },
                {
                  q: "Quanto tempo para ver resultados?",
                  a: "Os primeiros resultados podem aparecer em 7-14 dias aplicando o método corretamente."
                },
              ].map((faq, i) => (
                <motion.button
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-4 card-surface"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-sm text-white/80">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-4 h-4 text-white/30 flex-shrink-0" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === i ? 'auto' : 0,
                      opacity: openFaq === i ? 1 : 0,
                      marginTop: openFaq === i ? 10 : 0,
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <div className="gradient-line" />
      <footer className="py-8 text-center text-white/20 text-xs">
        <div className="max-w-5xl mx-auto px-5 space-y-2">
          <p>&copy; 2025 Hack da Shopee. Todos os direitos reservados.</p>
          <p>
            <a href="mailto:hackdashopeeoficial@gmail.com" className="text-white/30 hover:text-[#ff6b35] transition-colors duration-300">
              hackdashopeeoficial@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
