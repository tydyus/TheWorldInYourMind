import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../../Types/infoType";
export declare const loadGame: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null) => string;
export declare const eventLoadGame: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => void;
