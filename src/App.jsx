import React from 'react';
import {
  Hero,
  Navbar,
  Billing,
  Business,
  Stats,
  Footer,
  Clients,
  Cta,
  Testimonials,
  CardDeal,
} from './layout';
import style from './style';

export const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* Navbar */}
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className={`${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* other section */}
    <div className={`${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);
