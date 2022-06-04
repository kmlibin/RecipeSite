import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCxWLvicPlhcQQI8UQGy4LRuDFZlmRsafE",
    authDomain: "cooking-ninja-site-563c7.firebaseapp.com",
    projectId: "cooking-ninja-site-563c7",
    storageBucket: "cooking-ninja-site-563c7.appspot.com",
    messagingSenderId: "161676893453",
    appId: "1:161676893453:web:30bdda011a9bfd55fe6444"
  };

  //initialize firebase

  firebase.initializeApp(firebaseConfig)

  //initialize services

  const projectFirestore = firebase.firestore()

  export { projectFirestore } 