import {Info} from "../../../Types/infoType";
import {saveOnCookie, parseData, getNameOfUser} from "../../../tools/encoding";


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
export const eventMain = () => {
    (document.getElementById("FNGsubmit") as HTMLElement)
        .addEventListener("click", () => newGame());
}

export const newGame = () => {
    let error = "";
    const name = document.getElementById("FNGname") as HTMLInputElement;
    if(!/^[a-zA-Z]/.test(name.value) || name.value.length < 2)  {error = "nom invalide";}
    if (error == "") 
    {
        const data = `page=game!gameUserName=${name.value}!gameUserBadges=joueur_0!node=0`;
        saveOnCookie(name.value, parseData(data));
        document.location.href=`?user=${name.value}`;
    }
    else {
        (document.getElementById("FNGerror") as HTMLElement).innerHTML = `<p style="color:red">${error}</p>`;
    }

}