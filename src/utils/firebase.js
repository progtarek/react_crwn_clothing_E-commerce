import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAB6lVCpywrd8BfgfUBbLv12TqEZvg1sko',
  authDomain: 'crwn-db-75211.firebaseapp.com',
  databaseURL: 'https://crwn-db-75211.firebaseio.com',
  projectId: 'crwn-db-75211',
  storageBucket: 'crwn-db-75211.appspot.com',
  messagingSenderId: '456135959883',
  appId: '1:456135959883:web:2c09e2541e75765a5bf4ce',
  measurementId: 'G-VMPLYP0ZHJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase;
