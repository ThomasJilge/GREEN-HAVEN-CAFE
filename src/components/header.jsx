import headerLogo from '../assets/greenHavenCafe.png'
import './Header.css'
import OpenStatus from './openStatus';
import './openStatus.css'

export default function Header() {
  return (
    <section className="header" id='header'>
        <div className='headerContainer'>
          <a href="">
            <img className='headerLogo' src={headerLogo} alt="Logo" />
          </a>
          <div className='navBarContainer'>
        <nav className="navbarHeader">
            <a href="#aboutUs" className="navbarLink">About Us</a>
            <a href="#menu" className="navbarLink">Menu</a>
            <a href="#location" className="navbarLink">Location</a>
            <a href="#contactForm" className="navbarLink">Contact</a>
        </nav>
        <div className='openCloseContainer'>
          <OpenStatus />
        </div>
        </div>
      </div>
    </section>
  )
}