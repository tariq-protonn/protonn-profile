import firebase from 'firebase';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDYdAv56xeMA89FYLaGkUs-etgSu-7KuXM",
    authDomain: "profile-auth-99ad0.firebaseapp.com",
    databaseURL: "https://profile-auth-99ad0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "profile-auth-99ad0",
    storageBucket: "profile-auth-99ad0.appspot.com",
    messagingSenderId: "334609864242",
    appId: "1:334609864242:web:a2e1f9ddd65971b1fe0e2b",
    measurementId: "G-LZ5N23N2JS"
};


export default function firebaseClient() {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
};