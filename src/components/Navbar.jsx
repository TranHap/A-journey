import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
import { styles } from '../styles';
import { navLinks} from '../constants';
import {menu, close} from '../assets';
import { motion } from 'framer-motion';
const Navbar = () => {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const [active , setActive] = useState('');
  const[toggle, setToggle] = useState(false);
  return (
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-tertiary`}       
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-3'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
            <p className="text-white text-[24px] font-bold cursor-pointer">A-journey</p>
            {/* <p className="text-pink font-light sm:block hidden">Take courage</p> */}
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-pink" : "text-secondary"} hover:text-pink text-[18px] font-bold cursor-pointer`}
                onClick = {() => setActive(link.title)}
              >
                <a href={`${link.id}`}>{link.title}</a>
        
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-end">
              <img src={toggle? close : menu} 
              alt="menu" 
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick ={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient 
              absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
                <motion.nav
                    animate={toggle ? "open" : "closed"}
                    variants={variants}
                  >
                  <ul className="list-none flex flex-col justify-end items-center  gap-4">
                    {navLinks.map((link) => (
                      <li
                        key={link.id}
                        className={`${active === link.title ? "text-pink" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick = {() => {
                          setToggle(!toggle);
                          setActive(link.title)
                        }}
                      >
                        <a href={`${link.id}`}>{link.title}</a>
                
                      </li>
                    ))}
                </ul>
                </motion.nav>
              </div>
          </div>


        </div>
      </nav>
  )
};

export default Navbar;