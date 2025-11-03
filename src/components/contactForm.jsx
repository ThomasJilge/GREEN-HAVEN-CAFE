import './contactForm.css';
import './validateInput.css';
import './button.css';
import contactFormImage from '../assets/bkkContactForm.jpg';
import { useState } from 'react';
import ValidatedInput from './validateInput';
import { handleContact } from '../utils/handleContact';
import LoadingSpinner from './loadingSpinner';
import StatusOverlay from './statusOverlayForm';
import { submitContact } from '../utils/submitContact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail);
    const isValidName = formData.name.trim().length >= 4;
    const isValidMessage = formData.message.trim().length > 0;

    const allValid = isValidEmail && isValidName && isValidMessage;

    if (!allValid) {
      setStatus('error');
      setStatusMessage('Bitte alle Felder korrekt ausfüllen.');
      setTimeout(() => setStatus(null), 2000);
      return;
    }

    setLoading(true);

    const saved = await submitContact(formData);
    const result = await handleContact(formData);

    setLoading(false);

    if (saved && result?.success) {
      setStatus('success');
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', mail: '', message: '' });
    } else {
      setStatus('error');
      setStatusMessage('Error sending message!');
    }

    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {status && (
        <StatusOverlay
          type={status}
          message={statusMessage}
          onClose={() => setStatus(null)}
        />
      )}
      <section className='contactFormContainer' id='contactForm'>
        <div className="imageContainer">
          <img className="contactFormLogo" src={contactFormImage} alt="" />
          <div className='contactContainer'>
            <h3 className='contactFormHeadline'>Contact Us</h3>
            <form className='contactForm' onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <ValidatedInput
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="inputWrapper">
                <ValidatedInput
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <textarea
                name="message"
                className="inputField"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />

              <button className="button" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

