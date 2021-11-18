import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDKSfXuhwbrQ53LuFlo1Sjjp4oaLCeHwYs",
    authDomain: "clone-51cc1.firebaseapp.com",
    projectId: "clone-51cc1",
    databaseURL: "https://clone-51cc1-default-rtdb.firebaseio.com",
    storageBucket: "clone-51cc1.appspot.com",
    messagingSenderId: "938016225137",
    appId: "1:938016225137:web:531e5bdadd89fc134268d0",
    measurementId: "G-1L1QJWW24D"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };