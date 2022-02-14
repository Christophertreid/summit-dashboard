// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId, 
  storageBucket: process.env.storageBucket,  
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
 

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app)

// export the service objects
export {db, storage}
