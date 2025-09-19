import headerLogo from '../assets/headerLogo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
        <div className='headerContainer'>
            <img className='headerLogo' src={headerLogo} alt="Logo" />
        <nav className="navbarHeader">
            <a href="#home" className="navbarLink">Home</a>
            <a href="#menu" className="navbarLink">Menu</a>
            <a href="#contact" className="navbarLink">Contact</a>
        </nav>
      </div>
    </header>
  )
}