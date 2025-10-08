import './bookingForm.css'
import contactFormImage from '../assets/bkkContactForm.jpg'

export default function BookingForm() {
  return (
    <section className='bookingFormContainer' id='bookingForm'>
      <div className="imageContainer">
        <img className="bookingFormLogo" src={contactFormImage} alt="" />
        <div className='bookingContainer'>
          <div className='bookingFormHeaderContainer'>
            <h3 className='bookingFormHeadline'>Book your visit</h3>
            <p className='textBookingFormHeadline'>Secure your favorite seat, inside or out.</p>
          </div>
          <form className='bookingForm' action="">
            <input type="text" placeholder='Name' />
            <input type="date" placeholder='Date' />
            <input type="time" placeholder='Time' />

            <select name="people" className="bookingSelect">
              <option value="">Number of people</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <div className="seatingOptions">
              <label className='label'>
                <input type="radio" name="seating" value="inside" defaultChecked />
                Inside
              </label>
              <label className='label'>
                <input type="radio" name="seating" value="outside" />
                Outside
              </label>
            </div>

            <textarea placeholder='Anything we should know?' />
            <button className='buttonContactForm'>BOOK NOW</button>
          </form>
        </div>
      </div>
    </section>
  )
}
