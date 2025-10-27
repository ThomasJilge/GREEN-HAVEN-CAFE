import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export async function submitBooking(data) {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), data);
    console.log('Booking saved with ID:', docRef.id);
    return true;
  } catch (error) {
    console.error('Error saving booking:', error);
    return false;
  }
}
