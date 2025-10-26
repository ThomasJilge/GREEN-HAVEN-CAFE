import { useState } from 'react';
import contactFormImage from '../assets/bkkContactForm.jpg';
import checkIcon from '../assets/checkMark.png';
import crossIcon from '../assets/cross.png';

import './contactForm.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  const handleNameChange = (value) => {
    setName(value);
    setNameValid(value.trim().length >= 4);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  return (
    <section className='contactFormContainer' id='contactForm'>
      <div className="imageContainer">
        <img className="contactFormLogo" src={contactFormImage} alt="" />
        <div className='contactContainer'>
          <h3 className='contactFormHeadline'>Contact Us</h3>
          <form className='contactForm' action="">
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                className={`inputField ${nameValid === null ? '' : nameValid ? 'valid' : 'invalid'}`}
              />
              {nameValid !== null && (
                <img
                  src={nameValid ? checkIcon : crossIcon}
                  alt={nameValid ? 'Valid' : 'Invalid'}
                  className="validationIcon"
                />
              )}
            </div>

            <div className="inputWrapper">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`inputField ${emailValid === null ? '' : emailValid ? 'valid' : 'invalid'}`}
              />
              {emailValid !== null && (
                <img
                  src={emailValid ? checkIcon : crossIcon}
                  alt={emailValid ? 'Valid' : 'Invalid'}
                  className="validationIcon"
                />
              )}
            </div>

            <textarea className="inputField" placeholder="Message"></textarea>
            <button className="button">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
}
