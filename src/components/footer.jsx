import footerLogo from '../assets/greenHavenCafe.png'
import instagramLogo from '../assets/instagramIcon.png'
import facebookLogo from '../assets/facebookIcon.png'
import youtubeLogo from '../assets/youtubeIcon.png'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className='footerContainer'>
            <img className='footerLogo' src={footerLogo} alt="Logo" />
        <div className='copyRightContainer'>
            <p>© Thomas Jilge 2025</p>
            <p className='icons8Container'>Icons by icons8</p>
        </div>
        <div className='iconContainer'>
            <img className='footerIcon' src={instagramLogo} alt="" />
            <img className='footerIcon' src={facebookLogo} alt="" />
            <img className='footerIcon' src={youtubeLogo} alt="" />
        </div>
      </div>
    </footer>
  )
}