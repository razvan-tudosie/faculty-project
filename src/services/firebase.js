import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgWEk7GrLLkk0Aj0GQ33CAhDFNjPLfQ90",
    authDomain: "cinema-project-e44f6.firebaseapp.com",
    databaseURL: "https://cinema-project-e44f6.firebaseio.com",
    projectId: "cinema-project-e44f6",
    storageBucket: "cinema-project-e44f6.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const userCollection = db.collection('users');


// export const getKey = async id => {
//     const key = await secretsCollection.doc(id).get()
//     return key.exists ? key.data() : null
// }