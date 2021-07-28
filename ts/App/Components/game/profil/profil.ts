//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../../Types/infoType";
import { Header, eventHeader } from "../../section/header";

export const Profil = (info:Info,user:firebase.User|null) => {
    let profilPic = `<img src="./img/tof.png" alt="">`;
    let profilInfo = `<p>${info.game.user.name}</p>`;
    let navA = 
    `<input type="checkbox" name="checkboxViewBadgeProfil" id="checkboxViewBadgeProfil">
    <div class="checkboxDeco"></div>`;
    return Header(user,profilPic,profilInfo,navA);
}

export const eventProfil = (user:firebase.User|null,auth:firebase.auth.Auth) => {
    eventHeader(user,auth);
}