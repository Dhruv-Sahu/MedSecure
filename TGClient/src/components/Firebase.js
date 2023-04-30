import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXAt8g7Jn2QaKDekyyOZqvOyknQQJPlJU",
    authDomain: "ios-api-25ad7.firebaseapp.com",
    databaseURL: "https://ios-api-25ad7-default-rtdb.firebaseio.com",
    projectId: "ios-api-25ad7",
    storageBucket: "ios-api-25ad7.appspot.com",
    messagingSenderId: "895246409338",
    appId: "1:895246409338:web:f099cfb097474931a825c3",
    measurementId: "G-0HSC2N33HM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

