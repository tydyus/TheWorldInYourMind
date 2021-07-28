import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Info } from "../Types/infoType";
export declare const encoding: (asciiString: string) => string;
export declare const decoding: (hexString: string) => string;
export declare const parseData: (data: string) => Info;
export declare const stringifyData: (info: Info) => string;
export declare const getInfoFromUrl: () => Info;
export declare const getInfo: (nameSave: string, db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<Info>;
export declare const saveOn: (nameSave: string, save: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => Promise<void>;
export declare const CreateOn: (nameSave: string, save: Info, db: firebase.firestore.Firestore, user: firebase.User | null, auth: firebase.auth.Auth) => Promise<void>;
export declare const deleteSave: (nameSave: string) => void;
export declare const getNameOfUser: () => string;
export declare const getSaves: (db: firebase.firestore.Firestore, user: firebase.User | null) => Promise<{
    name: string;
    data: string;
}[] | undefined>;
