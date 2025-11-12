import footerLogo from '../assets/greenHavenCafe.png'
import instagramLogo from '../assets/instagramIcon.png'
import facebookLogo from '../assets/facebookIcon.png'
import youtubeLogo from '../assets/youtubeIcon.png'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className='footerContainer'>
            <a href="#header">
                <img className='footerLogo' src={footerLogo} alt="Green Haven Café logo with coffee cup icon on dark green background" />
            </a>
        <div className='copyRightContainer'>
            <p>© Thomas Jilge 2025</p>
            <p className='icons8Container'>
              Icons by{"\u00A0"} <a href="https://icons8.de" target="_blank" rel="noopener noreferrer">Icons8</a>
            </p>
        </div>
        <div className='iconContainer'>
            <img className='footerIcon' src={instagramLogo} alt="Follow Green Haven Café on Instagram" />
            <img className='footerIcon' src={facebookLogo} alt="Visit Green Haven Café on Facebook" />
            <img className='footerIcon' src={youtubeLogo} alt="Watch Green Haven Café videos on YouTube" />
        </div>
      </div>
    </footer>
  )
}