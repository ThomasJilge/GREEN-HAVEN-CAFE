import aboutUsImageOne from '../assets/aboutUsOne.png';
import aboutUsImageTwo from '../assets/aboutUsTwo.png';
import aboutUsImageThree from '../assets/aboutUsThree.png';
import aboutUsImageFour from '../assets/aboutUsFour.png';
import aboutUsImageFive from '../assets/aboutUsFive.png';
import aboutUsImageSix from '../assets/aboutUsSix.png';
import aboutUsImageSeven from '../assets/aboutUsSeven.png';
import arrowLeftImage from '../assets/arrowLeft.png';
import arrowRightImage from '../assets/arrowRight.png';
import './aboutUs.css';
import OpenStatus from './openStatus';
import './openStatus.css';
import { useState, useEffect } from 'react';

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

  const descriptions = [
    "Our coffee is ground using state-of-the-art technology to extract the best possible and most intense flavor from the bean",
    "At our bar, we serve freshly brewed espresso crafted with care—rich in aroma, perfectly balanced, and topped with a velvety crema that invites you to pause and savor the moment",
    "Locally sourced ingredients come together with clean, modern design—creating a space that feels both grounded and inspiring",
    "Tucked into a leafy corner of Bangkok, our garden glows in the golden hour—peaceful, warm, and full of life",
    "Soft glances. Honest warmth. Here, friendliness flows naturally—like the aroma of fresh coffee",
    "Warm smiles. Kind eyes. A place where friendliness is more than a gesture—it’s a feeling",
    "From textures to tones, our café reflects the dynamic rhythm of Bangkok—where tradition meets motion"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setVisibleCount(1);
      } else if (width <= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount(); // Initial check
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className='aboutUs' id='aboutUs'>
      <div className='textContainer'>
        <div className='aboutUsHeader'>
          <h2>About Us</h2>
        </div>
        <div className='textAboutUs'>
          <p>
            <span className='highlight'>Welcome</span> to the heart of <span className='highlight'>Thonburi</span> – where <span className='highlight'>tradition</span> meets <span className='highlight'>urban rhythm</span>. Our café is more than just a place for <span className='highlight'>good coffee</span>. It is a retreat for anyone who wants to not only experience Bangkok, but feel it.
          </p>
          <p>
            We love the <span className='highlight'>diversity</span> of this city: the <span className='highlight'>golden temples</span>, the <span className='highlight'>vibrant street markets</span>, the <span className='highlight'>quiet moments</span> by the river. It is precisely this energy that flows into our drinks, our interior design, and our hospitality. Whether you stop by for a quick espresso or <span className='highlight'>spend hours</span> working over a cold brew, you are always welcome here.
          </p>
          <p>
            Our <span className='highlight'>ingredients</span> are carefully selected, our recipes <span className='highlight'>refined with love</span>. And our <span className='highlight'>team</span>? It consists of people who <span className='highlight'>love Bangkok</span> just as much as you do. Come by, <span className='highlight'>feel the warmth</span>, taste the city – and feel free to stay a little longer.
          </p>
        </div>
      </div>

      <div className="imageSliderContainer">
        <img
          src={arrowLeftImage}
          alt="Arrow left"
          onClick={prevImage}
          className="arrow arrowLeft"
        />

        <div className="sliderImages">
          {Array.from({ length: visibleCount }).map((_, offset) => {
            const index = (currentIndex + offset) % images.length;
            return (
              <div className="imageCard" key={index}>
                <div className="imageInner">
                  <div className="imageFront">
                    <img
                      className="aboutUsLogo"
                      src={images[index]}
                      alt={`About us ${index + 1}`}
                    />
                  </div>
                  <div
                    className="imageBack"
                    style={{
                      backgroundImage: `url(${images[index]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="imageOverlay">
                      <p className="imageDescription">{descriptions[index]}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <img
          src={arrowRightImage}
          alt="Arrow right"
          onClick={nextImage}
          className="arrow arrowRight"
        />
      </div>
    </section>
  );
}
