import firebase from "firebase/app";
import "firebase/firestore";
export declare const Main: (db: firebase.firestore.Firestore) => string;
export declare const eventMain: (db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<void>;
export declare const majMain: (actuelNode?: number) => void;
