import firstSectionLogo from '../assets/firstSection.png'
import './firstSection.css'

export default function FirstSection() {
  return (
    <section className="firstSection">
    <div className="imageContainer">
        <img className="firstSectionLogo" src={firstSectionLogo} alt=""/>
        <div className="textContent">
            <h1>WELCOME TO<br /> GREEN HAVEN CAFE</h1>
            <p>Your cozy urban retread in the heart of Bangkok</p>
            <button className='buttonMenu'>View our menu</button>
        </div>
    </div>
    </section>
  )
}