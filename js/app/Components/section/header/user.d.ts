import firebase from "firebase/app";
import "firebase/auth";
export declare const User: (user: firebase.User | null) => string;
export declare const eventUser: (user: firebase.User | null, auth: firebase.auth.Auth) => void;
export declare const startUi: (user: firebase.User | null, auth: firebase.auth.Auth, idHTML?: string) => void;
