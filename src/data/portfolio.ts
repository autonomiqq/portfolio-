import { Skill, Experience, Service, Testimonial } from '../types';

export const skills: Skill[] = [
  { name: 'LLM Development', level: 95, category: 'technical' },
  { name: 'SLM Development', level: 93, category: 'technical' },
  { name: 'AI/ML Optimization', level: 90, category: 'technical' },
  { name: 'SaaS Development', level: 92, category: 'technical' },
  { name: 'Docker & Kubernetes', level: 88, category: 'technical' },
  { name: 'Claude AI', level: 91, category: 'technical' },
  { name: 'Instructional Design', level: 94, category: 'training' },
  { name: 'Curriculum Development', level: 90, category: 'training' },
  { name: 'Virtual Training', level: 93, category: 'training' },
  { name: 'Mentoring & Coaching', level: 91, category: 'training' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Founder & CEO',
    company: 'Orbivex',
    period: '2024 - Present',
    description: 'Leading innovation in Agentic AI applications. Building autonomous AI systems that solve complex real-world problems through intelligent automation.',
    highlights: [
      'Building next-gen Agentic AI solutions',
      'Developing AI-powered automation platforms',
      'Solving real-world business challenges with AI',
    ],
  },
  {
    id: 2,
    title: 'Technical Trainer',
    company: 'byteXL',
    period: '2024 - Present',
    description: 'Currently working as a Technical Trainer at byteXL, delivering comprehensive training on AI, ML, and modern technologies.',
    highlights: [
      'Training students and professionals on AI/ML technologies',
      'Conducting hands-on workshops on LLM & SLM development',
      'Providing practical knowledge on real-world AI applications',
    ],
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'AI/ML Development',
    description: 'Custom LLM & SLM development, model optimization, and AI solutions for your business needs.',
    icon: 'Brain',
    features: ['LLM Fine-tuning', 'SLM Development', 'Model Optimisation', 'AI Integration'],
  },
  {
    id: 2,
    title: 'Corporate Training',
    description: 'Customized training programs for organizations looking to upskill their technical teams.',
    icon: 'Building2',
    features: ['On-site & Remote Options', 'Custom Curriculum', 'Progress Tracking', 'Certificate Completion'],
  },
  {
    id: 3,
    title: 'Bootcamps',
    description: 'Intensive, hands-on training programs for individuals seeking career transition into tech.',
    icon: 'GraduationCap',
    features: ['12-16 Week Programs', 'Project-Based Learning', 'Career Support', 'Industry Certification'],
  },
  {
    id: 4,
    title: 'Workshop Sessions',
    description: 'Focused, single-topic workshops for teams wanting to master specific technologies.',
    icon: 'Laptop',
    features: ['Flexible Duration', 'Hands-on Labs', 'Real-World Projects', 'Post-Workshop Support'],
  },
  {
    id: 5,
    title: '1:1 Mentoring',
    description: 'Personalized coaching for developers looking to accelerate their career growth.',
    icon: 'Users',
    features: ['Career Roadmap', 'Code Reviews', 'Technical Coaching', 'Interview Prep'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'InnovateTech',
    content: 'Rajesh transformed our team\'s AI capabilities in just 8 weeks. The practical approach and real-world examples made complex concepts accessible to everyone.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Senior Developer',
    company: 'CloudScale Inc',
    content: 'The best technical trainer I\'ve ever worked with. Rajesh has a unique ability to break down complex topics and make them engaging and memorable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'CTO',
    company: 'DataFlow Systems',
    content: 'We\'ve seen a 45% improvement in our team\'s output since the React training program. Highly recommend for any organization serious about developer education.',
    rating: 5,
  },
];
