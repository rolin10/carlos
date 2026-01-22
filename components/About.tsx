
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200" 
              alt="Barbeiro profissional a trabalhar" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 p-8 z-20 hidden md:block">
              <span className="block text-4xl font-serif font-bold text-white">15+</span>
              <span className="text-xs uppercase tracking-widest text-white/80">Anos de Experiência</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">Sobre a Barbearia</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Arte, Confiança e Precisão em Cada Detalhe.</h2>
            <div className="space-y-4 text-stone-400 leading-relaxed text-lg">
              <p>
                A <strong>Barbearia Carlos Vaz</strong> é mais do que um espaço de estética; é um local de tradição em Odivelas onde a arte da barbearia clássica se encontra com as tendências mais modernas.
              </p>
              <p>
                O nosso compromisso é oferecer um atendimento personalizado em cada serviço. Quer procure um corte clássico intemporal ou um estilo moderno e arrojado, a nossa equipa foca-se na perfeição e no detalhe.
              </p>
              <p>
                Aqui, encontrará um ambiente acolhedor, confortável e profissional, pensado para que cada cliente se sinta em casa. Utilizamos apenas os melhores produtos para garantir que o seu cabelo e barba recebem o tratamento que merecem.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-2">Atendimento Premium</h4>
                <p className="text-stone-500 text-sm">Cada cliente é único e merece o melhor.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Ambiente Clássico</h4>
                <p className="text-stone-500 text-sm">Espaço confortável com estilo vintage moderno.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
