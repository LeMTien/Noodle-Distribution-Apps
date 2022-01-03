
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDp_sBTfY4ScNMPb-qFe5DosMQIvIfWeGU",
  authDomain: "appnoodles.firebaseapp.com",
  databaseURL: "https://appnoodles-default-rtdb.firebaseio.com",
  projectId: "appnoodles",
  storageBucket: "appnoodles.appspot.com",
  messagingSenderId: "76814593627",
  appId: "1:76814593627:web:5f1af4173c9bf59542197e",
  measurementId: "G-B69ZLPPRZN"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
export default database