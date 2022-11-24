import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBg3gtqIMD8z2y58v3UBFNOSs7JNrDii-4",
    authDomain: "database-6ad9c.firebaseapp.com",
    projectId: "database-6ad9c",
    storageBucket: "database-6ad9c.appspot.com",
    messagingSenderId: "978445725303",
    appId: "1:978445725303:web:000534687eb0a357082072"  
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyBc4WUZi-S-Yc7cLGxtbo0i12ouvAQkuLM",
//     authDomain: "quizee-f69f7.firebaseapp.com",
//     projectId: "quizee-f69f7",
//     storageBucket: "quizee-f69f7.appspot.com",
//     messagingSenderId: "768830780178",
//     appId: "1:768830780178:web:3ddda3a22531960454f9cb",
//     measurementId: "G-Y38WGHK2KH"
//   };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        alert('You are not registered! Firsly register yourself.');
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};