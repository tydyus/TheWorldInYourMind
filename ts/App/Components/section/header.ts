//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {User, eventUser} from "./header/user"

export const Header = (user:firebase.User|null,pic="",info="",navA="") => {
    return `
    <div class="a" id="profilPicture">
        ${pic}
    </div>
    <div class="b" id="profilInfo">
        <div>
            ${info}
        </div>
        <div class="profilNav">
            <div class="a" >
                ${navA}
            </div>
            <div class="b" >
                ${User(user)}
            </div>
        </div>
    </div>
    <div class="c"></div>
    <div class="d"></div>
    `}

export const eventHeader = (user:firebase.User|null,auth:firebase.auth.Auth) => {
    eventUser(user,auth);
}