import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { User } from "./header/user";
export declare const Header: (user: firebase.User | null, pic?: string, info?: string, navA?: string) => string;
export declare const eventHeader: (user: firebase.User | null, auth: firebase.auth.Auth) => void;
