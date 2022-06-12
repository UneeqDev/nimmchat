// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RSm6MBClg7a6R9lVBK2RjxErDMf9nx0",
  authDomain: "nimmchat-a5fa5.firebaseapp.com",
  databaseURL: "http://nimmchat-a5fa5.firebaseio.com",
  projectId: "nimmchat-a5fa5",
  storageBucket: "nimmchat-a5fa5.appspot.com",
  messagingSenderId: "849913889785",
  appId: "1:849913889785:web:b16efe211cd540d37b7328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
