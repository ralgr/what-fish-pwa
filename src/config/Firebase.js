import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyA2u1hJeE8US1Ox2fDMPrbkJcY2eO-MAhU",
    authDomain: "emoji-app-tutorial-5c2df.firebaseapp.com",
    databaseURL: "https://emoji-app-tutorial-5c2df.firebaseio.com",
    projectId: "emoji-app-tutorial-5c2df",
    storageBucket: "emoji-app-tutorial-5c2df.appspot.com",
    messagingSenderId: "484436492762",
    appId: "1:484436492762:web:42a96b5a9e5c162f"
  };

export const fb = firebase.initializeApp(config);
export const db = firebase.firestore(); //Database export.

// Enable offline persistence
db.enablePersistence({experimentalTabSynchronization:true});
