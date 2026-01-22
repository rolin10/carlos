
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-stone-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-amber-500 font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Barbearia Tradicional em Odivelas
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight max-w-4xl mx-auto">
          Cortes de cabelo e barba com estilo, tradição e precisão.
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#contactos" 
            className="w-full sm:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-widest transition-all transform hover:scale-105"
          >
            Agendar Corte
          </a>
          <a 
            href="#servicos" 
            className="w-full sm:w-auto px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all"
          >
            Ver Serviços
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-500 animate-bounce cursor-pointer" onClick={() => document.getElementById('sobre')?.scrollIntoView()}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
