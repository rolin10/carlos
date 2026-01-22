
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">Testemunhos</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">A satisfação dos clientes</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-stone-900 p-10 border border-stone-800 relative">
              <Quote className="text-amber-600/20 absolute top-6 right-6" size={48} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-stone-300 italic mb-8 leading-relaxed">
                "{t.comment}"
              </p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider">{t.name}</h4>
                <p className="text-amber-500/60 text-xs uppercase tracking-widest mt-1">Cliente Habitual</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
