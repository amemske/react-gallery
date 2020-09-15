
import * as firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALR7J8TAIL3bhVhu1Dac1hxkEORqZyFgg",
    authDomain: "photogallery-49b60.firebaseapp.com",
    databaseURL: "https://photogallery-49b60.firebaseio.com",
    projectId: "photogallery-49b60",
    storageBucket: "photogallery-49b60.appspot.com",
    messagingSenderId: "1055945581058",
    appId: "1:1055945581058:web:fdd08fe9e7011757d87d1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //create constants for firestore and storage

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};
