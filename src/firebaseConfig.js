import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGGMw4BUY6AC8alXF0neq0hqrHrW5sces',
  authDomain: 'bkk-cafe.firebaseapp.com',
  projectId: 'bkk-cafe',
  storageBucket: 'bkk-cafe.firebasestorage.app',
  messagingSenderId: '12890813613',
  appId: '1:12890813613:web:d52866a9cc5b1264afc224',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
