import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../../../Types/infoType";
import { Path } from "../../../Types/nodeType";
export declare const PathsElement: (paths: Array<Path>, info: Info, db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<string>;
