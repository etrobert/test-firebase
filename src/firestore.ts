import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvOMM_qOxvudUGotMHT8UBcEfDI3p6sQc',
  authDomain: 'test-ee6d8.firebaseapp.com',
  projectId: 'test-ee6d8',
  storageBucket: 'test-ee6d8.appspot.com',
  messagingSenderId: '572242636876',
  appId: '1:572242636876:web:b45f83b137e9f25f9284e9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

export default firestore;
