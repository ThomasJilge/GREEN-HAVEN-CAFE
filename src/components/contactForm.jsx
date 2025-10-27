import { useState } from 'react';
import contactFormImage from '../assets/bkkContactForm.jpg';
import ValidationIcon from './validationIcons';
import './contactForm.css';
import './validateInput.css';
import ValidatedInput from './validateInput';

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
              <ValidatedInput
                name="name"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Name"
              />
              {nameValid !== null && (
                <ValidationIcon isValid={nameValid} />
              )}
            </div>

            <div className="inputWrapper">
              <ValidatedInput
                name="mail"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Email"
              />
              {emailValid !== null && (
                <ValidationIcon isValid={emailValid} />
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
