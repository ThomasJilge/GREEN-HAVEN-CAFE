import aboutUsImageOne from '../assets/aboutUsOne.png'
import aboutUsImageTwo from '../assets/aboutUsTwo.png'
import aboutUsImageThree from '../assets/aboutUsThree.png'
import aboutUsImageFour from '../assets/aboutUsFour.png'
import aboutUsImageFive from '../assets/aboutUsFive.png'
import aboutUsImageSix from '../assets/aboutUsSix.png'
import aboutUsImageSeven from '../assets/aboutUsSeven.png'
import arrowLeftImage from '../assets/arrowLeft.png'
import arrowRightImage from '../assets/arrowRight.png'
import './aboutUs.css'
import OpenStatus from './openStatus';
import './openStatus.css'
import { useState } from 'react';


export default function AboutUs() {

  const images = [
    aboutUsImageThree,
    aboutUsImageSeven,
    aboutUsImageSix,
    aboutUsImageFour,
    aboutUsImageOne,
    aboutUsImageTwo,
    aboutUsImageFive
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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

      <div className="imageSliderContainer">
        <img
          src={arrowLeftImage}
          alt="Previous"
          onClick={prevImage}
          className="arrow"
        />

        <div className="sliderImages">
          <img
            className="aboutUsLogo"
            src={images[currentIndex]}
            alt={`About us ${currentIndex + 1}`}
          />
          <img
            className="aboutUsLogo"
            src={images[(currentIndex + 1) % images.length]}
            alt={`About us ${(currentIndex + 1) % images.length + 1}`}
          />
          <img
            className="aboutUsLogo"
            src={images[(currentIndex + 2) % images.length]}
            alt={`About us ${(currentIndex + 2) % images.length + 1}`}
          />
        </div>

        <img
          src={arrowRightImage}
          alt="Next"
          onClick={nextImage}
          className="arrow"
        />
      </div>
    </section>
  )
}