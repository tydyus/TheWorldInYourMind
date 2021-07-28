import firebase from "firebase/app";
import "firebase/firestore";
import { Info } from "../../../Types/infoType";
import { Node } from "../../../Types/nodeType";
export declare const pathIsValid: (nodeToGoID: number, indexPath: number, data: Array<Node>, db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<boolean>;
export declare const eventOn: (info: Info, tags: string, type: "node" | "path") => Info;
export declare const goToPath: (nodeToGoID: number, indexPath: number, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => Promise<void>;
