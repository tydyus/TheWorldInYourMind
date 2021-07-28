import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
export declare const Main: () => string;
export declare const eventMain: (db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => void;
export declare const newGame: (db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => void;
