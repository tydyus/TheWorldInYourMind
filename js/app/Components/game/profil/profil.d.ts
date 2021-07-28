import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../../../Types/infoType";
export declare const Profil: (info: Info, user: firebase.User | null) => string;
export declare const eventProfil: (user: firebase.User | null, auth: firebase.auth.Auth) => void;
