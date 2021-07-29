import {Info} from "../../../Types/infoType";
import {containId, findWithId} from "../../../Types/nodeType";

export const eventPlayerProfil = (info:Info) => {
    const badgesData = require("../../../../../json/badge.json") as Array<any>;
    document.body.innerHTML += `<div id="profilJoueur" class="hidden"></div>`;
    const profilJoueur = document.getElementById("profilJoueur") as HTMLElement;
    
    // switch
    (document.getElementById("checkboxViewBadgeProfil") as HTMLElement)
        .addEventListener("click", () => {
            profilJoueur.classList.contains("hidden")?
                profilJoueur.classList.remove("hidden")
                :profilJoueur.classList.add("hidden");
        })
    
    // content
    const badges = info.game.user.badges;
    profilJoueur.innerHTML =
    `<div id="profilJoueurInfo">
        <div id="profilJoueurInfoProfil">
        </div>
        <div id="profilJoueurInfoMission">
        </div>
        <div id="profilJoueurInfoSucess">
        </div>
    </div>
    <div id="profilJoueurInventaire">
        <div id="profilJoueurInventaireItem">
        </div>
        <div id="profilJoueurInventaireCompagon">
        </div>
    </div>`;
    for (let i = 0; i < badges.length; i++) {
        if (containId(badgesData,badges[i].name)){ //present en base de donné
            switch(findWithId(badgesData,badges[i].name)["type"]){
                case("item"):
                (document.getElementById("profilJoueurInventaireItem") as HTMLElement).innerHTML +=
                `<div class="badge">
                    <p class="badgeName">${badges[i].name}</p>
                    <p class="badgeNbr">${badges[i].nbr > 0? `(${badges[i].nbr})`:""}</p>
                </div>`
                break;
                case("sucess"):
                break;
                case("feeling"):
                break;
                default:break;
            }
        } else{ //badge non indexé

        }
        
    }

}