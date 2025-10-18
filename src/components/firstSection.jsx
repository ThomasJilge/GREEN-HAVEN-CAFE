import firstSectionLogo from '../assets/firstSection.png'
import './firstSection.css'
import BlurText from './blurText';
import { motion } from 'framer-motion';

export default function FirstSection() {
  return (
    <section className="firstSection">
      <div className="imageContainer">
        <img className="firstSectionLogo" src={firstSectionLogo} alt="" />
        <div className="textContent">
          <h1 className="textHeadline">
            <BlurText
              text="WELCOME TO"
              delay={100}
              stepDuration={0.35}
              animateBy="words"
              direction="top"
              className="textH1"
            />
            <BlurText
              text="GREEN HAVEN CAFE"
              delay={200}
              stepDuration={0.5}
              animateBy="words"
              direction="top"
              className="textH2"
            />
          </h1>
          <BlurText
            text="Your cozy urban retreat in the heart of Bangkok"
            delay={220}
            stepDuration={0.55}
            animateBy="words"
            direction="bottom"
            className="textInfo"
          />
          <motion.button
            className="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 1.5, ease: 'easeOut' }}
            onClick={() => {
              document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            VIEW OUR MENU
          </motion.button>
        </div>
      </div>
    </section>
  );
}