//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../Types/infoType";
import {Profil, eventProfil} from "./profil/profil";
import {Main, MainContent, eventMain} from "./main/main";
import {Footer, eventFooter} from "../section/footer"

export const Game = () => {
    document.body.innerHTML += 
    `
    <!-- pop-up -->
    
    <div id="popUpConfirmPath" class="hidden">
        <div>
            <div class="head"><div id="popUpClose" class="close"></div> </div>
            <div class="text">
                <p>êtes-vous sur de choisir ce chemin?</p>
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
    <header id="profilGame">
    </header>
    <main id="mainGame">
    </main>
    <footer id="footer">
    </footer>
    `)
}
export const GameContent = async (info:Info,db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    const profil = Profil(info,user);
    (document.getElementById("profilGame") as HTMLElement).innerHTML = profil;
    const main = Main();
    (document.getElementById("mainGame") as HTMLElement).innerHTML = main;
    const footer = Footer();
    (document.getElementById("footer") as HTMLElement).innerHTML = footer;
    await MainContent(info,db,user)
        .then(_ => eventGame(info, db,user,auth));
}

export const eventGame = (info:Info, db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    eventMain(info, db,user,auth);
    eventProfil(user,auth);
    eventFooter();
}