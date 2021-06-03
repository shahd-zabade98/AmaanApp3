import  firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage"
const firebaseConfig = {
  apiKey: 'AIzaSyAw6pppE_u-TPYiuMFJoyReENHBbO5iNAo',
  authDomain: 'my-gp2-73461.firebaseapp.com',
  databaseURL: 'https://my-gp2-73461-default-rtdb.firebaseio.com/',
  projectId: 'my-gp2-73461',
  storageBucket: 'my-gp2-73461.appspot.com',
  messagingSenderId: '751998787773',
  appId: '1:751998787773:android:e98dc7777f39deb46c57d4',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

  export { firebase} ;