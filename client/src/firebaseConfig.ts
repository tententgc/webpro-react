// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj9n2EhMWZQm2x_x8a_Y07V5khOitn5oc",
    authDomain: "webpro-astro.firebaseapp.com",
    projectId: "webpro-astro",
    storageBucket: "webpro-astro.appspot.com",
    messagingSenderId: "516443802282",
    appId: "1:516443802282:web:2d1ac7313ea61276d25ed3",
    measurementId: "G-YWYJ59Q51K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { app, analytics, auth }