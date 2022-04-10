import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzl836_BB8Ltia_m31iltgATG9LANSW6U",
  authDomain: "note-app-ed85b.firebaseapp.com",
  projectId: "note-app-ed85b",
  storageBucket: "note-app-ed85b.appspot.com",
  messagingSenderId: "303147270420",
  appId: "1:303147270420:web:25fdfcc942763c4b624201"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export{ firebase }