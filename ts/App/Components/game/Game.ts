import {Info} from "../../Types/infoType";
import {Profil, eventProfil} from "./profil/profil";
import {Main, eventMain} from "./main/main";
import {Footer, eventFooter} from "../section/footer"

export const Game = (info:Info) => {
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
    <header>
        ${Profil(info)}
    </header>
    <main>
        ${Main(info)}
    </main>
    <footer>
        ${Footer()}
    </footer>
    `)
}

export const eventGame = (info:Info) => {
    eventMain(info);
    eventProfil();
    eventFooter();
}