import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../../Types/infoType";
export declare const Game: () => string;
export declare const GameContent: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => Promise<void>;
export declare const eventGame: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => void;
