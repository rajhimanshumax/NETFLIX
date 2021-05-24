import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDfhiWeIv1-QLCmaWQhyOtjfLyuhbpsXVk",
  authDomain: "netflix-clone-15461.firebaseapp.com",
  projectId: "netflix-clone-15461",
  storageBucket: "netflix-clone-15461.appspot.com",
  messagingSenderId: "702867196805",
  appId: "1:702867196805:web:383020cdb1210609bd12ec"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth};
export default db;