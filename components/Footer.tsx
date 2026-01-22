
import React from 'react';
import { Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 bg-amber-600 rounded-lg mb-4">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white uppercase tracking-tighter mb-6">Barbearia Carlos Vaz</h2>
          <nav className="flex flex-wrap justify-center gap-8 mb-10">
            <a href="#home" className="text-stone-500 hover:text-amber-500 uppercase tracking-widest text-xs font-bold transition-colors">Início</a>
            <a href="#sobre" className="text-stone-500 hover:text-amber-500 uppercase tracking-widest text-xs font-bold transition-colors">Sobre Nós</a>
            <a href="#servicos" className="text-stone-500 hover:text-amber-500 uppercase tracking-widest text-xs font-bold transition-colors">Serviços</a>
            <a href="#galeria" className="text-stone-500 hover:text-amber-500 uppercase tracking-widest text-xs font-bold transition-colors">Galeria</a>
            <a href="#contactos" className="text-stone-500 hover:text-amber-500 uppercase tracking-widest text-xs font-bold transition-colors">Contactos</a>
          </nav>
          <div className="w-full h-px bg-stone-900 mb-10"></div>
          <div className="text-center space-y-2">
            <p className="text-stone-500 text-sm">
              {BUSINESS_INFO.address}, {BUSINESS_INFO.city}
            </p>
            <p className="text-amber-600 font-bold">{BUSINESS_INFO.phone}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-stone-600 text-xs uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Barbearia Carlos Vaz. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com Paixão em Odivelas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
