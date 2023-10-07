// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlGoSzjVnGKFLIdoIsitafKQRtKlzViBk",
  authDomain: "wedding-event-management-89da0.firebaseapp.com",
  projectId: "wedding-event-management-89da0",
  storageBucket: "wedding-event-management-89da0.appspot.com",
  messagingSenderId: "811497353881",
  appId: "1:811497353881:web:8893e76cf3d45b3830be08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app