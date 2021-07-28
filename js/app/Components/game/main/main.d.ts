import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../../../Types/infoType";
export declare const Main: () => string;
export declare const MainContent: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<void>;
export declare const eventMain: (info: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => void;
export declare const majMain: (idNode: number | undefined, db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<void>;
