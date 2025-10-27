import './bookingForm.css';
import bookingFormImage from '../assets/bookingFormTwo.jpg';
import { useState } from 'react';
import { submitBooking } from '../utils/submitBooking';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    people: '',
    seating: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitBooking(formData);
    if (success) {
      alert('Booking submitted!');
      setFormData({
        name: '',
        date: '',
        time: '',
        people: '',
        seating: '',
        message: '',
      });
    } else {
      alert('Error submitting booking.');
    }
  };

  return (
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
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <select
                    name="people"
                    className="bookingSelect"
                    value={formData.people}
                    onChange={handleChange}
                  >
                    <option value="">Number of people</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className='bookingFormContainerTwo'>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  <div className="seatingOptions">
                    <label className='label'>
                      <input
                        type="radio"
                        name="seating"
                        value="inside"
                        checked={formData.seating === 'inside'}
                        onChange={handleChange}
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
                      />
                      Outside
                    </label>
                  </div>
                </div>
              </div>
              <div className='messageContainer'>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything we should know?"
                />
              </div>
              <button className='button' type="submit">BOOK NOW</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
