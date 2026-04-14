export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'training';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}
