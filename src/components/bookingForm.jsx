import './bookingForm.css';
import bookingFormImage from '../assets/bookingFormTwo.jpg';
import { useState } from 'react';
import { submitBooking } from '../utils/submitBooking';
import { notifyOwner } from '../utils/email';
import ValidatedInput from './validateInput';
import LoadingSpinner from './loadingSpinner';
import StatusOverlay from './statusOverlayForm';

function generateTimeSlots(start, end, intervalMinutes) {
  const slots = [];
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current <= endTime) {
    const hours = current.getHours().toString().padStart(2, '0');
    const minutes = current.getMinutes().toString().padStart(2, '0');
    slots.push(`${hours}:${minutes}`);
    current.setMinutes(current.getMinutes() + intervalMinutes);
  }

  return slots;
}


export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    people: '',
    seating: '',
    mail: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail);
  const isValidName = formData.name.trim().length >= 4;
  const isValidTime = formData.time >= '07:00' && formData.time <= '18:00';
  const isValidDate = formData.date.trim() !== '';
  const isValidPeople = formData.people.trim() !== '';
  const isValidSeating = formData.seating.trim() !== '';
  const isValidMessage = formData.message.trim().length > 0;

  const allValid =
  isValidEmail &&
  isValidName &&
  isValidTime &&
  isValidDate &&
  isValidPeople &&
  isValidSeating &&
  isValidMessage;

if (!allValid) {
  setStatus('error');
  setTimeout(() => setStatus(null), 2000);
  return;
}


  if (!isValidEmail || !isValidName) {
    setStatus('error');
    setTimeout(() => setStatus(null), 2000);
    return;
  }

  setLoading(true);

  const success = await submitBooking(formData);

  if (success) {
    await notifyOwner(formData);
    setLoading(false);
    setStatus('success');
    setFormData({
      name: '',
      date: '',
      time: '',
      people: '',
      seating: '',
      mail: '',
      message: '',
    });
    setTimeout(() => setStatus(null), 2000);
  } else {
    setLoading(false);
    setStatus('error');
    setTimeout(() => setStatus(null), 2000);
  }
};

  return (
    <>
      {loading && <LoadingSpinner />}
      {status && <StatusOverlay type={status} />}
      <section className='bookingFormContainer' id='bookingForm'>
        <div className="imageContainer">
          <img className="bookingFormLogo" src={bookingFormImage} alt="" />
          <div className='bookingContainer'>
            <div className='bookingFormHeaderContainer'>
              <h3 className='bookingFormHeadline'>Book your visit</h3>
              <p className='textBookingFormHeadline'>Secure your favorite seat, inside or out.</p>
            </div>
            <div className='bookingFormMainContainer'>
              <form className='bookingForm' onSubmit={handleSubmit}>
                <div className='bookingFormRow'>
                  <div className='bookingFormContainerOne'>
                    <ValidatedInput
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="people"
                      className="bookingSelect"
                      value={formData.people}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Number of people</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className='bookingFormContainerTwo'>
                  <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="bookingSelect"
                      required
                    >
                      <option value="">Select time</option>
                      {generateTimeSlots('07:00', '18:00', 15).map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <div className="seatingOptions">
                      <label className='label'>
                        <input
                          type="radio"
                          name="seating"
                          value="inside"
                          checked={formData.seating === 'inside'}
                          onChange={handleChange}
                          required
                        />
                        Inside
                      </label>
                      <label className='label'>
                        <input
                          type="radio"
                          name="seating"
                          value="outside"
                          checked={formData.seating === 'outside'}
                          onChange={handleChange}
                          required
                        />
                        Outside
                      </label>
                    </div>
                    <ValidatedInput
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className='messageContainer'>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything we should know?"
                    required
                  />
                </div>
                <button className='button' type="submit">BOOK NOW</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
