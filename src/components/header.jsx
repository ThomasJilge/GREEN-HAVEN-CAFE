import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import headerLogo from '../assets/greenHavenCafe.png';
import './Header.css';
import OpenStatus from './openStatus';
import './openStatus.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="header" id="header">
      <div className="headerContainer">
        <div className="headerLogoContainer">
          <a href="">
            <img className="headerLogo" src={headerLogo} alt="Green Haven Café logo with white coffee cup icon and bold text on dark green background" />
          </a>
        </div>

        <div className="burgerMenu" onClick={toggleMobileMenu}>
          <FaBars size={28} />
        </div>

        <div ref={menuRef} className={`navBarContainer ${menuOpen ? 'showMenu' : ''}`}>
          <nav className="navbarHeader">
            <a href="#aboutUs" className="navbarLink">About Us</a>
            <a href="#menu" className="navbarLink">Menu</a>
            <a href="#location" className="navbarLink">Location</a>
            <a href="#contactForm" className="navbarLink">Contact</a>
          </nav>
        </div>
        <div className="openCloseContainer">
          <OpenStatus />
        </div>
      </div>
    </section>
  );
}


