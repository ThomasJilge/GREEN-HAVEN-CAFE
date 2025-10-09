import './bookingForm.css'
import contactFormImage from '../assets/bkkContactForm.jpg'
import bookingFormImage from '../assets/bookingFormTwo.jpg'

export default function BookingForm() {
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
          <form className='bookingForm' action="">
            <div className='bookingFormRow'>
            <div className='bookingFormContainerOne'>
                <input type="text" placeholder='Name' />
                <input type="date" placeholder='Date' />

                <select name="people" className="bookingSelect">
                  <option value="">Number of people</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
            </div>
            <div className='bookingFormContainerTwo'>
                  <input type="time" placeholder='Time' />
              <div className="seatingOptions">
                <label className='label'>
                  <input type="radio" name="seating" value="inside" />
                  Inside
                </label>
                <label className='label'>
                  <input type="radio" name="seating" value="outside" />
                  Outside
                </label>
              </div>
            </div>
            </div>
             <div className='messageContainer'>
                  <textarea placeholder='Anything we should know?' />
            </div>
            <button className='buttonContactForm'>BOOK NOW</button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
