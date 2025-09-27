import headerLogo from '../assets/greenHavenCafe.png'
import './Header.css'

export default function Header() {
  return (
    <section className="header">
        <div className='headerContainer'>
            <img className='headerLogo' src={headerLogo} alt="Logo" />
        <nav className="navbarHeader">
            <a href="#home" className="navbarLink">Home</a>
            <a href="#aboutUs" className="navbarLink">About us</a>
            <a href="#contact" className="navbarLink">Contact</a>
        </nav>
      </div>
    </section>
  )
}