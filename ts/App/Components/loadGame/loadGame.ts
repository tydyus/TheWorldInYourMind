//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../Types/infoType";
import {Main, eventMain} from "./main/main";
import {Footer, eventFooter} from "../section/footer";
import {Header,eventHeader} from "../section/header";

export const loadGame = (info:Info, db:firebase.firestore.Firestore,user:firebase.User|null) => {
    document.body.innerHTML += 
    `
    <!-- pop-up -->
    <div id="popUpConfirmPath" class="hidden popUpConfirmLoadSave">
        <div>
            <div class="head"><div id="popUpClose" class="close"></div> </div>
            <div class="text" id="textSaveLoadNameGlobal">
                <div class="text1" id="textSaveLoadName">
                    <p id="textPopUp">nomPartie</p>
                </div>
                <div class="text2">
                    <div class="zonetextloadInfo" id="textLoadDate">
                        <p>Date creation:</p>
                        <p>Date dernière sauvegarde:</p>
                    </div>
                    <div class="zone decoHideInput">
                        <input type="checkbox">
                        <button class="decoInput deleteSave">suprimer</button>
                        <button id="btnDeleteSave" class="hiddenByInput"><i class="fas fa-trash"></i></button>
                    </div>
                    
                </div>       
            </div>
            <div class="choice">
                <div id="popUpChoiceYes">Charger</div>
                <div id="popUpChoiceNo">Retour</div>
            </div>
            
        </div>
        
    </div>
    <!-- ------ -->
    `
    return (`
    <header>
        ${Header(user)}
    </header>
    <main class="loadPage">
        ${Main(db)}
    </main>
    <footer>
        ${Footer()}
    </footer>
    `)
}

export const eventLoadGame = (info:Info, db:firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    eventMain(db,user);
    eventFooter();
    eventHeader(user,auth);
}