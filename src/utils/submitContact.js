import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export async function submitContact(data) {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), data);
    console.log('Contact saved with ID:', docRef.id);
    return true;
  } catch (error) {
    console.error('Error saving contact:', error);
    return false;
  }
}
