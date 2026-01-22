
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, Facebook, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    servico: 'Corte',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo seu contacto, Carlos Vaz responderá em breve!');
    setFormData({ nome: '', email: '', servico: 'Corte', mensagem: '' });
  };

  return (
    <section id="contactos" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">Contactos</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Onde nos Encontrar</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-sm text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Localização</h4>
                  <p className="text-stone-400">{BUSINESS_INFO.address}</p>
                  <p className="text-stone-400">{BUSINESS_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-sm text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefone</h4>
                  <p className="text-stone-400 font-bold text-lg">{BUSINESS_INFO.phone}</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-500 text-sm hover:underline">Ligar Agora</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-sm text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Horário de Funcionamento</h4>
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between w-64 text-stone-400 text-sm py-1 border-b border-stone-800 last:border-0">
                      <span>{h.day}:</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a 
                href={BUSINESS_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-stone-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded-full"
              >
                <Facebook size={20} />
              </a>
              <div className="w-12 h-12 bg-stone-800 flex items-center justify-center text-white hover:bg-amber-600 transition-colors rounded-full cursor-pointer">
                <Mail size={20} />
              </div>
            </div>
            
            <div className="mt-12 rounded-sm overflow-hidden border border-stone-800 h-64 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.431256338356!2d-9.176378484652516!3d38.79051837958694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932f2f099c631%3A0xc31c0e86b206191b!2sR.%20Guilherme%20Gomes%20Fernandes%2081%2C%202675-385%20Odivelas!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-stone-950 p-8 md:p-12 border border-stone-800 shadow-2xl relative">
            <h3 className="text-3xl font-serif text-white mb-8">Marcar Agendamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full bg-stone-900 border border-stone-800 text-white p-4 focus:border-amber-600 outline-none transition-colors"
                  placeholder="Ex: João Silva"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Email / Telefone</label>
                  <input 
                    type="text" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-stone-900 border border-stone-800 text-white p-4 focus:border-amber-600 outline-none transition-colors"
                    placeholder="912 345 678"
                  />
                </div>
                <div>
                  <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Serviço Pretendido</label>
                  <select 
                    value={formData.servico}
                    onChange={(e) => setFormData({...formData, servico: e.target.value})}
                    className="w-full bg-stone-900 border border-stone-800 text-white p-4 focus:border-amber-600 outline-none transition-colors appearance-none"
                  >
                    <option value="Corte">Corte Masculino</option>
                    <option value="Barba">Barba</option>
                    <option value="CorteBarba">Corte + Barba</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Mensagem Adicional</label>
                <textarea 
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full bg-stone-900 border border-stone-800 text-white p-4 focus:border-amber-600 outline-none transition-colors resize-none"
                  placeholder="Prefira indicar o dia e hora desejados..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-widest py-5 transition-all shadow-lg"
              >
                <span>Enviar Solicitação</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
