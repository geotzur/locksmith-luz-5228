import { services, areas } from './data';

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/',
    children: services.map(s => ({ label: s.name, href: `/services/${s.slug}/` })),
  },
  { label: 'Areas', href: '/areas/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export { services, areas };
