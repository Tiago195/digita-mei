import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight, Store, Coffee, Scissors, MessageCircle, BarChart3, ShoppingBag, CreditCard, Calendar, MousePointer2 } from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Novo: Agendamento via WhatsApp
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
                Seu negócio mais <span className="text-primary">organizado</span>. Vendendo mais.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Crie seu link na bio profissional em 2 minutos e organize estoque, vendas, agendamentos e pagamentos sem complicação.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    CRIAR MEU LINK GRÁTIS
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-secondary/50">
                  Ver como funciona
                </Button>
              </motion.div>
              
              <motion.p variants={fadeIn} className="text-sm text-muted-foreground flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Sem cartão de crédito
                <Check className="w-4 h-4 text-green-500 ml-2" /> Plano gratuito para sempre
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                  {/* Fake App UI */}
                  <div className="bg-primary h-32 w-full flex flex-col items-center justify-center pt-4 relative">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-sm mt-8 overflow-hidden">
                      {/* Using generic avatar placeholder */}
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full" />
                    </div>
                  </div>
                  <div className="pt-10 px-4 text-center">
                    <h3 className="font-bold text-lg">Delícias da Ana</h3>
                    <p className="text-xs text-muted-foreground">Bolos e doces artesanais 🎂</p>
                    
                    <div className="mt-6 space-y-3">
                      <div className="p-3 bg-primary text-white rounded-xl shadow-md flex items-center justify-between cursor-pointer hover:bg-primary/90">
                        <span className="font-medium text-sm">Faça seu Pedido</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-700">Ver Cardápio</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-700">WhatsApp</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-2">
                       {/* Unsplash food image: cupcake */}
                       <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=300&fit=crop" className="rounded-lg h-24 w-full object-cover" alt="Cupcake" />
                       {/* Unsplash food image: cake */}
                       <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" className="rounded-lg h-24 w-full object-cover" alt="Cake" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold">Novo Pedido!</span>
                </div>
                <p className="text-xs text-muted-foreground">Bolo de Chocolate (2kg) acabou de ser vendido.</p>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-blue-100 p-2 rounded-lg text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Vendas hoje</p>
                  <p className="font-bold text-lg">R$ 485,00</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* PAIN POINTS */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Seu negócio está assim hoje?</h2>
            <p className="text-muted-foreground">Muitos empreendedores perdem tempo e dinheiro tentando organizar tudo pelo WhatsApp e caderninho.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PainPointCard icon="❌" title="Perde vendas no WhatsApp" desc="Demora para responder e o cliente desiste de comprar." />
            <PainPointCard icon="📝" title="Anota tudo no papel" desc="Esquece agendamentos e perde o controle do fiado." />
            <PainPointCard icon="📉" title="Estoque bagunçado" desc="Não sabe o que tem para vender e fura com o cliente." />
            <PainPointCard icon="🔗" title="Links espalhados" desc="Manda 3 links diferentes para o cliente pagar e agendar." />
            <PainPointCard icon="👥" title="Clientes somem" desc="Não sabe quem são seus melhores clientes para vender de novo." />
            <div className="bg-primary/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center border-2 border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-2">A solução?</h3>
              <p className="text-sm text-muted-foreground mb-4">Um sistema que cresce com você.</p>
              <Link href="/auth">
                <Button>Começar grátis agora</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES BY SEGMENT */}
      <section id="examples" className="section-padding bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Funciona para o seu negócio</h2>
            <p className="text-muted-foreground">Veja como o digita mei se adapta ao que você faz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <SegmentCard 
               icon={<Scissors className="w-8 h-8" />}
               title="Barbearia & Beleza"
               features={["Agenda online", "Lembrete automático", "Link na bio"]}
               color="bg-orange-100 text-orange-600"
             />
             <SegmentCard 
               icon={<Coffee className="w-8 h-8" />}
               title="Restaurante & Delivery"
               features={["Cardápio digital", "Pedido no WhatsApp", "QR Code na mesa"]}
               color="bg-red-100 text-red-600"
             />
             <SegmentCard 
               icon={<Store className="w-8 h-8" />}
               title="Loja & Varejo"
               features={["Controle de estoque", "Catálogo online", "Gestão de vendas"]}
               color="bg-purple-100 text-purple-600"
             />
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/auth">
               <Button size="lg" className="rounded-full px-8">Quero organizar meu negócio</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Tudo o que você precisa</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Feature icon={<MousePointer2 />} title="Link na Bio" desc="Profissional e personalizável" />
            <Feature icon={<ShoppingBag />} title="Controle de Estoque" desc="Saiba exatamente o que tem" />
            <Feature icon={<Store />} title="Loja Virtual" desc="Monte sua vitrine em minutos" />
            <Feature icon={<CreditCard />} title="Pagamentos" desc="Aceite PIX e cartão fácil" />
            <Feature icon={<Calendar />} title="Agendamento" desc="Seus clientes marcam sozinhos" />
            <Feature icon={<MessageCircle />} title="CRM Simples" desc="Histórico de cada cliente" />
            <Feature icon={<BarChart3 />} title="Relatórios" desc="Saiba quanto lucrou no mês" />
            <Feature icon={<MessageCircle />} title="Automação Zap" desc="Envie mensagens automáticas" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#1E3A8A] text-white">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Pare de perder vendas.</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de pequenos empreendedores que profissionalizaram seus negócios.
          </p>
          <Link href="/auth">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl rounded-full shadow-2xl hover:scale-105 transition-transform  font-bold">
              COMEÇAR AGORA GRÁTIS
            </Button>
          </Link>
          <p className="mt-6 text-sm text-blue-200">Leva menos de 2 minutos para criar.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PainPointCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function SegmentCard({ icon, title, features, color }: { icon: React.ReactNode, title: string, features: string[], color: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300">
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-4 font-display">{title}</h3>
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-muted-foreground text-sm">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}
