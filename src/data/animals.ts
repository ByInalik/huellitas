export interface Animal {
  id: string;
  name: string;
  type: 'Perro' | 'Gato';
  gender: 'Macho' | 'Hembra';
  age: string;
  description: string;
  image: string;
  gallery?: string[];
  fullStory?: string;
  healthStatus?: string[];
  monthlyGoal?: string;
  rescuedDate?: string;
}

export const animals: Animal[] = [
  {
    id: 'luna',
    name: 'Luna',
    type: 'Perro',
    gender: 'Hembra',
    age: '2 años',
    description: 'Rescatada de una vía principal. Es cariñosa, alegre y le encanta compartir con otros perritos.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop'
    ],
    fullStory: 'Luna fue encontrada desorientada cerca de una carretera transitada. Presentaba desnutrición leve y mucho temor al contacto humano.',
    healthStatus: ['Vacunada', 'Esterilizada', 'Desparasitada'],
    monthlyGoal: '$120.000 COP',
    rescuedDate: 'Marzo 2024'
  },
  {
    id: 'thor',
    name: 'Thor',
    type: 'Perro',
    gender: 'Macho',
    age: '4 años',
    description: 'Lleno de energía y nobleza. Le encanta jugar y salir a correr por las tardes.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Enero 2024'
  },
  {
    id: 'milo',
    name: 'Milo',
    type: 'Gato',
    gender: 'Macho',
    age: '8 meses',
    description: 'Rescatado muy pequeño. Es muy juguetón, ronronea siempre y busca un padrino.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Mayo 2024'
  },
  {
    id: 'mia',
    name: 'Mia',
    type: 'Gato',
    gender: 'Hembra',
    age: '1 año',
    description: 'Tranquila, hogareña y amante de las siestas al sol. Lista para recibir tu cariño.',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Febrero 2024'
  },
  {
    id: 'rocky',
    name: 'Rocky',
    type: 'Perro',
    gender: 'Macho',
    age: '3 años',
    description: 'Súper protector, leal y juguetón. Le fascina salir a pasear al parque.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Abril 2024'
  },
  {
    id: 'simba',
    name: 'Simba',
    type: 'Gato',
    gender: 'Macho',
    age: '2 años',
    description: 'Curioso y amigable. Le gusta dormir en lugares altos y recibir cariñitos.',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Junio 2024'
  },
  {
    id: 'nala',
    name: 'Nala',
    type: 'Perro',
    gender: 'Hembra',
    age: '1.5 años',
    description: 'Dulce, obediente y llena de vida. Excelente compañera para familias.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Julio 2024'
  },
  {
    id: 'oliver',
    name: 'Oliver',
    type: 'Gato',
    gender: 'Macho',
    age: '5 meses',
    description: 'Un gatito rescate muy tierno, travieso y en busca de un hogar amoroso.',
    image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=800&auto=format&fit=crop',
    rescuedDate: 'Agosto 2024'
  }
];