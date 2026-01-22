
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800', 
      alt: 'Corte moderno' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1621605815841-28d944683b83?auto=format&fit=crop&q=80&w=800', 
      alt: 'Barba alinhada' 
    },
    { 
      // Esta imagem representa o estilo ondulado/clássico enviado pelo utilizador
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800', 
      alt: 'Corte clássico' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', 
      alt: 'Ambiente da barbearia' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1512690118299-a937204e3046?auto=format&fit=crop&q=80&w=800', 
      alt: 'Produtos premium' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1593702288069-23933245999c?auto=format&fit=crop&q=80&w=800', 
      alt: 'Detalhe do corte' 
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">O Nosso Trabalho</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden aspect-square rounded-sm cursor-pointer shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <div>
                  <p className="text-white font-serif text-xl mb-2">{img.alt}</p>
                  <div className="w-12 h-0.5 bg-amber-600 mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
