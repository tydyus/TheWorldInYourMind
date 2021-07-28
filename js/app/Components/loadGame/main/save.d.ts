import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
export declare const Save: (db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<void>;
