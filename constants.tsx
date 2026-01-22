
import { Service, Testimonial } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte de Cabelo Masculino',
    description: 'Corte personalizado, do clássico ao moderno, com lavagem e finalização profissional.',
    price: 'a partir de 12€'
  },
  {
    id: '2',
    name: 'Barba Completa',
    description: 'Tratamento premium com toalha quente, hidratação e desenho preciso com navalha.',
    price: '10€'
  },
  {
    id: '3',
    name: 'Corte + Barba',
    description: 'O pack completo para uma renovação total da sua imagem.',
    price: '20€'
  },
  {
    id: '4',
    name: 'Aparar Barba',
    description: 'Manutenção rápida para manter a sua barba sempre alinhada e impecável.',
    price: '7€'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Silva',
    comment: 'O melhor barbeiro de Odivelas. Atendimento cinco estrelas e um profissionalismo difícil de encontrar.',
    rating: 5
  },
  {
    id: '2',
    name: 'João Pereira',
    comment: 'Ambiente espetacular e corte sempre impecável. Recomendo vivamente a todos na zona.',
    rating: 5
  },
  {
    id: '3',
    name: 'António Santos',
    comment: 'Sou cliente há anos e nunca saí desiludido. O Carlos é um verdadeiro artista.',
    rating: 5
  }
];

export const BUSINESS_INFO = {
  name: "Barbearia Carlos Vaz",
  address: "Rua Guilherme Gomes Fernandes 81 B",
  city: "2675 Odivelas, Portugal",
  phone: "+351 912 345 678",
  hours: [
    { day: "Segunda - Sexta", time: "09:00 - 19:30" },
    { day: "Sábado", time: "09:00 - 18:00" },
    { day: "Domingo", time: "Encerrado" }
  ],
  facebook: "https://www.facebook.com/barbeariacarlosvaz"
};
