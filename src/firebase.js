import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCAGzfQ1i36BJ1YD5St5UN5tFC2wdZ1ByY',
  authDomain: 'social-media-20409.firebaseapp.com',
  projectId: 'social-media-20409',
  storageBucket: 'social-media-20409.appspot.com',
  messagingSenderId: '268551664148',
  appId: '1:268551664148:web:a6f1927fe26c28d702ad01',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
