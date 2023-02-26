import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FiAlignRight } from 'react-icons/fi';

import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>

      <a href="/" className='logo'>Logo</a>

      <ul className={`navbar__links ${open ? '' : 'hidden'}`}>
        <li><Link to="erfaring" spy={true} smooth={true} offset={-100} duration={500}>Erfaring</Link></li>
        <li><Link to="kompetencer" spy={true} smooth={true} offset={-100} duration={500}>Kompetencer</Link></li>
        <li><Link to="uddannelse" spy={true} smooth={true} offset={50} duration={500}>Uddannelse</Link></li>
        <li><Link to="kommunikation" spy={true} smooth={true} offset={50} duration={500}>Kommunikation</Link></li>
        <li><Link to="projekter" spy={true} smooth={true} offset={50} duration={500}>Projekter</Link></li>
      </ul>

      <Link to="kontakt" spy={true} smooth={true} offset={50} duration={500} className={`cta ${open ? '' : 'hidden'}`}><button>Kontakt</button></Link>

      <FiAlignRight size={40} className='mobile' onClick={() => setOpen(!open)}/>

      {open && <div className='menu' />}

    </div>
  )
}

export default Navbar