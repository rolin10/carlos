
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">O que fazemos por si</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-stone-400">Oferecemos uma gama completa de serviços de barbearia profissional em Odivelas. Escolha o seu estilo e deixe o resto connosco.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-stone-900 border border-stone-800 hover:border-amber-600/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-stone-800 group-hover:bg-amber-600 text-amber-500 group-hover:text-white transition-colors duration-300">
                  {parseInt(service.id) % 2 === 0 ? '✂️' : '💈'}
                </div>
                <span className="text-amber-500 font-bold font-serif">{service.price}</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-500 text-sm mb-6 italic">Nota: Os preços indicados são valores base e podem variar consoante a complexidade.</p>
          <a href="#contactos" className="inline-block px-12 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-widest transition-colors shadow-xl">
            Agendar um Horário
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
