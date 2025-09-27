import aboutUsImageOne from '../assets/aboutUsOne.png'
import aboutUsImageTwo from '../assets/aboutUsTwo.png'
import aboutUsImageThree from '../assets/aboutUsThree.png'
import aboutUsImageFour from '../assets/aboutUsFour.png'
import './aboutUs.css'

export default function AboutUs() {
  return (
    <section className='aboutUs' id='aboutUs'>
        <div className='textContainer'>
            <div className='aboutUsHeader'>
                <h2>About Us</h2>
            </div>
            <div className='textAboutUs'>
                <p>
                    <span className='highlight'>Welcome</span> to the heart of <span className='highlight'>Thonburi</span> - where <span className='highlight'>tradition</span> meets <span className='highlight'>urban rhythm</span>. Our café is more than just a place for <span className='highlight'>good coffee</span>. It is a retreat for anyone who wants to not only experience Bangkok, but feel it.
                </p>
                <p>
                    We love the <span className='highlight'>diversity</span> of this city: the <span className='highlight'>golden temples</span>, the <span className='highlight'>vibrant street markets</span>, the <span className='highlight'>quiet moments</span> by the river. It is precisely this energy that flows into our drinks, our interior design, and our hospitality. Whether you stop by for a quick espresso or <span className='highlight'>spend hours</span> working over a cold brew, you are always welcome here.
                </p>
                <p>
                    Our <span className='highlight'>ingredients</span> are carefully selected, our recipes <span className='highlight'>refined with love</span>. And our <span className='highlight'>team</span>? It consists of people who <span className='highlight'>love Bangkok</span> just as much as you do. Come by, <span className='highlight'>feel the warmth</span>, taste the city - and feel free to stay a little longer.
                </p>
            </div>
        </div>
        <div className='imageContainer'>
            <img className="aboutUsLogo" src={aboutUsImageOne} alt="" />
            <img className="aboutUsLogo" src={aboutUsImageFour} alt="" />
            <img className="aboutUsLogo" src={aboutUsImageThree} alt="" />
        </div>
        <div className='googleMapsContainer'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29796.737560132588!2d100.46242430034351!3d13.718547596849811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2985f39205789%3A0x30100b25de24e70!2sThonburi%2C%20Bangkok%2010600%2C%20Thailand!5e1!3m2!1sde!2sde!4v1758363396366!5m2!1sde!2sde"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        <div className='locationContainer'>
            <div className='addressContainer'>
                <p className='address'>Address:</p>
                <p className='addressText'>Bangkok 10600</p>
                <p className='addressText'>Thonburi</p>
                <p className='addressText'>Thonburi Road</p>
            </div>
            <div className='openingHoursContainer'>
                <p className='openingHours'>Opening hours:</p>
                <p className='openingHoursText'>Everyday: 7 a.m. - 6 p.m.</p>
            </div>
        </div>
        </div>
    </section>
  )
}