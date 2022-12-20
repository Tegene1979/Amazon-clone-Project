// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app"

import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from '/src/firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBXJaeesRZPO1kYWjT0FS-7aPnGYenMpII",
   
    authDomain: "cloneproject-ea23d.firebaseapp.com",
    projectId: "cloneproject-ea23d",
    storageBucket: "cloneproject-ea23d.appspot.com",
    messagingSenderId: "383089198427",
    appId: "1:383089198427:web:3c8b7af8049c4b9f44067e",
    measurementId: "G-552M1D6GEB"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
 const auth = firebase.auth();
export { db, auth };

// import firebase from 'firebase';
//  const firebaseConfig = {
//     apiKey: "AIzaSyBXJaeesRZPO1kYWjT0FS-7aPnGYenMpII",
// //   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };