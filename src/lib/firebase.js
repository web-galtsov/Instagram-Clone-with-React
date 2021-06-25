import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
//import {seedDatabase} from "../seed";

const config = {
  apiKey: "AIzaSyBDFkXbEEmaF6u5V22PqslwxeC_CwbwUCw",
  authDomain: "instagram-react-new.firebaseapp.com",
  projectId: "instagram-react-new",
  storageBucket: "instagram-react-new.appspot.com",
  messagingSenderId: "401631559574",
  appId: "1:401631559574:web:4a3855dd1a90511de5e7b7"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is were I want to call the seed file (only ONCE!)
// seedDatabase(firebase)

export { firebase, FieldValue };
