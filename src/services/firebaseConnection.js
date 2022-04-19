import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCZ1tTLl3qxpZx0_MtRGuPpTeU8nDywYhI",
    authDomain: "admin-template-620e1.firebaseapp.com",
    projectId: "admin-template-620e1",
    storageBucket: "admin-template-620e1.appspot.com",
    messagingSenderId: "6208377453",
    appId: "1:6208377453:web:ce51bbbbcc6977f1e12564"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;