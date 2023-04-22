import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuNavBar from '../MenuNavBar/MenuNavBar';
import MenuBurger from '../MenuBurger/MenuBurger';
import monImage from '/src/assets/images/formula1bg.png'; // importez votre image

function Header() {
  const location = useLocation();
  const [windowX, setWindowX] = useState(window.innerWidth)

  const menuHeader = (
    <nav className='header-link-container'>
      <Link to="/app/home" className={location.pathname === '/app/home' ? 'active-header-link' : 'header-link'}>Accueil</Link>
      <Link to="/app/classement" className={location.pathname === '/app/classement' ? 'active-header-link' : 'header-link'}>Classement</Link>
      <Link to="/app/historique" className={location.pathname === '/app/historique' ? 'active-header-link' : 'header-link'}>Historique</Link>
      <Link to="/app/contact" className={location.pathname === '/app/contact' ? 'active-header-link' : 'header-link'}>Contact</Link>
    </nav>
  )

  window.addEventListener("resize", ()=>{
    setWindowX(window.innerWidth)
  })

  return (
    <header className='mb-20'>
      <div className="logo">
        <Link to="/">
          <img src={monImage} alt="Logo" />
        </Link>
      </div>
      {windowX > 600
      ? <MenuNavBar>
          {menuHeader}
        </MenuNavBar>
      : <MenuBurger>
          {menuHeader}
        </MenuBurger>}
    </header>
  );
}

export default Header;