import firebase from "firebase/app";
import "firebase/auth";
export declare const Main: () => string;
export declare const eventMain: (user: firebase.User | null, auth: firebase.auth.Auth) => void;
