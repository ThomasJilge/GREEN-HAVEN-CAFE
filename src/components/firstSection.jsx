import firstSectionLogo from '../assets/firstSection.png'
import rotateLogo from '../assets/rotateImage.png'
import './firstSection.css'
import BlurText from './blurText';

// import firstSectionLogo from '../assets/firstSection.png';
// import rotateLogo from '../assets/rotateImage.png';
// import './firstSection.css';
// import BlurText from './blurText';

export default function FirstSection() {
  return (
    <section className="firstSection">
      <div className="imageContainer">
        <img className="firstSectionLogo" src={firstSectionLogo} alt="" />
        <div className="textContent">
          <BlurText
            text={`WELCOME TO\nGREEN HAVEN CAFE`}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold text-white text-center whitespace-pre-line"
          />
          <BlurText
            text="Your cozy urban retreat in the heart of Bangkok"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-lg text-white mt-4 text-center"
          />
          <button
            className="button"
            onClick={() => {
              document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            VIEW OUR MENU
          </button>
        </div>
      </div>
    </section>
  );
}


// export default function FirstSection() {
//   return (
//     <section className="firstSection">
//     <div className="imageContainer">
//         <img className="firstSectionLogo" src={firstSectionLogo} alt=""/>
//         <div className="textContent">
//             <h1>WELCOME TO<br /> GREEN HAVEN CAFE</h1>
//             <p>Your cozy urban retread in the heart of Bangkok</p>
//             <button className='button' onClick={()=> {document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}}>VIEW OUR MENU</button>
//         </div>
//     </div>
//     </section>
//   )
// }