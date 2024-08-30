
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import { getAuth} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDSXzVBUvhrLS5OBQh7UuwQVieGiSGhMk4",
    authDomain: "tsd-firebase.firebaseapp.com",
    projectId: "tsd-firebase",
    storageBucket: "tsd-firebase.appspot.com",
    messagingSenderId: "791604617413",
    appId: "1:791604617413:web:778d5fc344a112f97c90ac"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);