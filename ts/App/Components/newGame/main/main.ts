//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {CreateOn, parseData, stringifyData} from "../../../tools/encoding";
import {Info} from "../../../Types/infoType";


export const Main = () => {
    return `
    <div class="a"></div>
    <div class="b node" id="newGameBgStory">
        <p class="talk npc">Bienvenue</p>
        <p class="narrator">contexte de l'histoire</p>
    </div>
    <div class="c paths" id="formNewGame">
        <div>
            <p>Nouvelle partie</p>
            <input type="text" id="FNGname" placeholder="nom du personnage">
            <span id="FNGerror"></span>
            <button id="FNGsubmit">Commencer l'aventure</button>
        </div>
    </div>
    `
} 
export const eventMain = (db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    (document.getElementById("FNGsubmit") as HTMLElement)
        .addEventListener("click", () => newGame(db,user,auth));
}

export const newGame = (db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    let error = "";
    const name = document.getElementById("FNGname") as HTMLInputElement;
    if(!/^[a-zA-Z]/.test(name.value) || name.value.length < 2)  {error = "nom invalide";}
    if (error == "") 
    {
        //save de base mis dans data
        let data = (require("../../../../../json/interface.json") as any).newPerso as Info;
        data.game.user.name = name.value;
        CreateOn(name.value, data, db,user,auth).then(_ =>
            document.location.href=`?user=${name.value}`)
    }
    else {
        (document.getElementById("FNGerror") as HTMLElement).innerHTML = `<p style="color:red">${error}</p>`;
    }

}