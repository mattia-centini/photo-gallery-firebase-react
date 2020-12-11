import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJzCM4HvSmrY3N5gnYAUQolhupEgDp_ao",
    authDomain: "photo-gallery-d992d.firebaseapp.com",
    projectId: "photo-gallery-d992d",
    storageBucket: "photo-gallery-d992d.appspot.com",
    messagingSenderId: "853125551383",
    appId: "1:853125551383:web:fdac6dfa4ef5cefa89d352"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { firebase , projectStorage, projectFirestore, timestamp }