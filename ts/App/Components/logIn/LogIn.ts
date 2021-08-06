//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../Types/infoType";
import {Main, eventMain} from "./main/main"
import {Footer, eventFooter} from "../section/footer"
import {Header,eventHeader} from "../section/header";

export const LogIn = (info:Info,user:firebase.User|null) => {
    document.body.innerHTML += 
    `
    <!-- pop-up -->
    <div id="popUpConfirmPath" class="hidden">
        <div>
            <div class="head"><div id="popUpClose" class="close"></div> </div>
            <div class="text">
                <p id="textPopUp">Charger la partie?</p>
            </div>
            <div class="choice">
                <div id="popUpChoiceYes">Oui</div>
                <div id="popUpChoiceNo">Non</div>
            </div>
            
        </div>
        
    </div>
    <!-- ------ -->
    `
    return (`
    <header class="signInPage">
    </header>
    <main class="noPaths signInPage ">
        ${Main()}
    </main>
    <footer>
        ${Footer()}
    </footer>
    `)
}

export const eventLogIn = (user:firebase.User|null,auth:firebase.auth.Auth) => {
    eventMain(user,auth);
    eventFooter();
    eventHeader(user,auth);
}