// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId 
//   };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// console.log(app)



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWeLtZjucU9cEzN8XVCBHAcQ0JYwEQ86o",
  authDomain: "dashboard-payment-c92a0.firebaseapp.com",
  projectId: "dashboard-payment-c92a0",
  storageBucket: "dashboard-payment-c92a0.appspot.com",
  messagingSenderId: "1006003297863",
  appId: "1:1006003297863:web:085d8db13682efa392db62"

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;