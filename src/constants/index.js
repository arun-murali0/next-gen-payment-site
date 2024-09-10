import { star, shield, send } from '../assets';
const NavLinks = [
  {
    id: 'Home',
    title: 'Home',
  },
  {
    id: 'Features',
    title: 'Features',
  },
  {
    id: 'Products',
    title: 'Products',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

const stats = [
  {
    id: 'stats-1',
    title: 'user Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '240+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

export { NavLinks, stats, features };
