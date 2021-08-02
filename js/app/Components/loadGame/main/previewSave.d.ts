import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
export declare const previewSave: (saveName: string, db: firebase.firestore.Firestore, user: firebase.User | null) => void;
