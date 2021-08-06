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
    <div class="b" id="newGameBgStory">
        <div class="img"><img src="./img/newGame.png"></div>
        <p class="talk npc">C'était une bonne soirée, je n'étais pas sortit dans un bar depuis longtemps mais je dois avouer que revoir mes anciens collègues était sympa.</p>
        <p class="narrator">Vous rentrez chez vous, vos pas alourdis par l'alcool que vous avez bu. Heureusement vous n'habitez pas loins d'ici.</p>
        <p class="talk npc">Aarf, mais pourquoi il faut qu'ils aient choisis de faire ça un dimanche soir sérieusement, déjà je me retrouve à être le premier à partir, et demain je taf quoi.. </p>
        <p class="narrator">Baragouinant dans votre barbe vous voyez enfin votre appartement au loin, une nuit de sommeil réparatrice vous attends.</p>
    </div>
    <div class="c paths" id="formNewGame">
        <div class="formNewGameComp">
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