import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2kiWghp05dZ3rzeffLECwIKGEkkGfVgE",
  authDomain: "invoice-app-4a3d3.firebaseapp.com",
  projectId: "invoice-app-4a3d3",
  storageBucket: "invoice-app-4a3d3.appspot.com",
  messagingSenderId: "813904077081",
  appId: "1:813904077081:web:929058c5f36bd37a39a588"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()