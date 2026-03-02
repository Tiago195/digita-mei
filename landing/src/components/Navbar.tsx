import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              d
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              digita mei
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Exemplos
            </a>
            {/* <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Preços
            </a> */}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link href="/auth">
              <Button variant="ghost" className="hidden sm:inline-flex cursor-pointer">Entrar</Button>
            </Link>
            <Link href="/auth">
              <Button>Criar Conta</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
