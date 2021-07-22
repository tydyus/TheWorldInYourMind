import {Info} from "../../Types/infoType";
import {Main, eventMain} from "./main/main"
import {Footer, eventFooter} from "../section/footer"

export const newGame = (info:Info) => {
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
    <header>
        
    </header>
    <main>
        ${Main()}
    </main>
    <footer>
        ${Footer()}
    </footer>
    `)
}

export const eventNewGame = (info:Info) => {
    eventMain();
    eventFooter();
}