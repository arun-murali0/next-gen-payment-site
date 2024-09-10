import { useState } from 'react';
import { NavLinks } from '../constants';
import { logo, menu, close } from '../assets';
import styles from '../style';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={ `${styles.paddingX} w-full py-6 flex justify-between items-center`}>
      <img src={logo} className='w-[124px] h-[32px]' alt='Logo' />
      <ul className=' justify-end items-center list-none sm:flex hidden flex-1 '>
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white font-normal font-poppins ${
              index === NavLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex justify-end items-center sm:hidden flex-1'>
        <img
          src={toggle ? close : menu}
          alt='toogle button'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-black-gradient absolute right-0 top-20 mx-4 my-2 rounded-xl sidebar min-w-[140px]`}
      >
        <ul className=' justify-center items-center list-none flex flex-col flex-1 navbar'>
          {NavLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-white font-normal font-poppins ${
                index === NavLinks.length - 1 ? 'mb-0' : 'mb-5'
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
