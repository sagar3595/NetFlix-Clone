// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACrvrXjCCEjeXFyW5LdYuLfP5pDQNJFQk",
    authDomain: "netflix-clone-9883a.firebaseapp.com",
    projectId: "netflix-clone-9883a",
    storageBucket: "netflix-clone-9883a.appspot.com",
    messagingSenderId: "301130446210",
    appId: "1:301130446210:web:56bec9137e599205e40b9b"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }