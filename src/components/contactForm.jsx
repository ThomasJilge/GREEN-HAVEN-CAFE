import contactFormImage from '../assets/bkkContactForm.jpg'
import './contactForm.css'


export default function ContactForm() {
  return (
    <section className='contactFormContainer' id='contactForm'>
        <div className="imageContainer">
            <img className="contactFormLogo" src={contactFormImage} alt=""/>
            <div className='contactContainer'>
                <h3 className='contactFormHeadline'>Contact Us</h3>
                    <form className='contactForm' action="">
                        <input className='' type="text" placeholder='Name' />
                        <input className='' type="text" placeholder='Email'/>
                        <textarea className='' name="" id="" placeholder='Message'></textarea>
                        <button className='buttonContactForm'>Send</button>
                    </form>
            </div>
        </div>
    </section>
  )
}