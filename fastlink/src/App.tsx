import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, MapPin, Clock, Phone, UserPlus } from "lucide-react";
import { useHeroConfig } from "./hooks/useHeroConfig";
import { useControls, Leva, button, LevaInputs, LevaPanel, useCreateStore } from "leva";
import { useState } from "react";

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
  const { primaryColor, titleParts, subtitleParts, heroButtons, heroBadges, image, contacts } = useHeroConfig();
  const cssVars = { "--primary": primaryColor } as React.CSSProperties;

  return (
    <div className="min-h-screen font-sans bg-background" style={cssVars}>
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
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
                {titleParts.map(part => (
                  <span key={part.text} className={part.highlight ? "text-[var(--primary)]" : ""}>{part.text}</span>
                ))}
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {subtitleParts.map((part, i) => (
                  <span key={i} className={part.highlight ? "text-[var(--primary)] font-semibold" : ""}>{part.text}</span>
                ))}
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                {/* <Link href="/auth">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    CRIAR MEU LINK GRÁTIS
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-secondary/50">
                  Ver como funciona
                </Button> */}
                {heroButtons.map(btn => (
                  <Button 
                    key={btn.id} 
                    variant={btn.variant} 
                    size="lg" 
                    className={`h-14 px-8 text-lg rounded-xl ${btn.variant === "primary" ? "bg-[var(--primary)]" : ""} ${btn.variant === "secondary" ? "bg-[var(--primary)]/50" : ""}`}
                    onClick={() => window.open(`https://wa.me/55${btn.number.replace(/\D/g, "")}`, "_blank")}
                  >
                    {btn.label}
                  </Button>
                ))}
              </motion.div>
              
              <motion.p variants={fadeIn} className="text-sm text-muted-foreground flex items-center gap-2">
                {heroBadges.map(badge => (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    {badge.text}
                  </>
                ))}
              </motion.p>
            </motion.div>
            
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-card rounded-[2.5rem] p-4 animate-float shadow-2xl">
               <img 
                src={image}
                alt="Business owner using mobile"
                className="rounded-[2rem] w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ SECTION DE CONTATO / INFORMAÇÕES */}
      <section className="pb-24 px-4 bg-white">
        <div className="max-w-xl mx-auto border-t border-slate-100 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Info Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Endereço
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    {contacts.endereco || "Não informado"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Horário
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Consulte via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Contato
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    {contacts.contato || "Não informado"}
                  </p>
                </div>
              </div>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 h-12 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all duration-300"
              >
                <UserPlus className="w-4 h-4" />
                SALVAR CONTATO
              </motion.button> */}
            </div>
          </div>

          {/* Footer Branding */}
          <div className="mt-20 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-all duration-300 group"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                Potencializado por
              </span>
              <span className="font-black text-slate-400 group-hover:text-blue-600">
                digita mei
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

            // <motion.div 
            //   initial={{ opacity: 0, x: 20 }}
            //   animate={{ opacity: 1, x: 0 }}
            //   transition={{ duration: 0.8, delay: 0.2 }}
            //   className="relative hidden lg:block"
            // >
            //   {/* Phone Mockup */}
            //   <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            //     <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            //     <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            //     <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            //     <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            //     <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
            //       {/* Fake App UI */}
            //       <div className="bg-primary h-32 w-full flex flex-col items-center justify-center pt-4 relative">
            //         <div className="w-16 h-16 bg-white rounded-full border-4 border-white shadow-sm mt-8 overflow-hidden">
            //           {/* Using generic avatar placeholder */}
            //           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full" />
            //         </div>
            //       </div>
            //       <div className="pt-10 px-4 text-center">
            //         <h3 className="font-bold text-lg">Delícias da Ana</h3>
            //         <p className="text-xs text-muted-foreground">Bolos e doces artesanais 🎂</p>
                    
            //         <div className="mt-6 space-y-3">
            //           <div className="p-3 bg-primary text-white rounded-xl shadow-md flex items-center justify-between cursor-pointer hover:bg-primary/90">
            //             <span className="font-medium text-sm">Faça seu Pedido</span>
            //             <ArrowRight className="w-4 h-4" />
            //           </div>
            //           <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-between">
            //             <span className="font-medium text-sm text-gray-700">Ver Cardápio</span>
            //             <ArrowRight className="w-4 h-4 text-gray-400" />
            //           </div>
            //           <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-between">
            //             <span className="font-medium text-sm text-gray-700">WhatsApp</span>
            //             <ArrowRight className="w-4 h-4 text-gray-400" />
            //           </div>
            //         </div>

            //         <div className="mt-8 grid grid-cols-2 gap-2">
            //            {/* Unsplash food image: cupcake */}
            //            <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=300&fit=crop" className="rounded-lg h-24 w-full object-cover" alt="Cupcake" />
            //            {/* Unsplash food image: cake */}
            //            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" className="rounded-lg h-24 w-full object-cover" alt="Cake" />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
              
            //   {/* Floating Element 1 */}
            //   <motion.div 
            //     animate={{ y: [0, -10, 0] }}
            //     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            //     className="absolute top-20 -left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[180px]"
            //   >
            //     <div className="flex items-center gap-2 mb-2">
            //       <div className="w-2 h-2 rounded-full bg-green-500" />
            //       <span className="text-xs font-semibold">Novo Pedido!</span>
            //     </div>
            //     <p className="text-xs text-muted-foreground">Bolo de Chocolate (2kg) acabou de ser vendido.</p>
            //   </motion.div>

            //   {/* Floating Element 2 */}
            //   <motion.div 
            //     animate={{ y: [0, 10, 0] }}
            //     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            //     className="absolute bottom-32 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            //   >
            //     <div className="bg-blue-100 p-2 rounded-lg text-primary">
            //       <BarChart3 className="w-5 h-5" />
            //     </div>
            //     <div>
            //       <p className="text-xs text-muted-foreground">Vendas hoje</p>
            //       <p className="font-bold text-lg">R$ 485,00</p>
            //     </div>
            //   </motion.div>
            // </motion.div>