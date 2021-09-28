import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyAfyaUQiwK9ujxMEiRCPqqub-OwOZUQjR8",
  authDomain: "e-site-53120.firebaseapp.com",
  databaseURL: "https://e-site-53120-default-rtdb.firebaseio.com",
  projectId: "e-site-53120",
  storageBucket: "e-site-53120.appspot.com",
  messagingSenderId: "83053626633",
  appId: "1:83053626633:web:e74c43517790e0cab7ffd8"
};

const app = firebase.initializeApp(config);

export default app;