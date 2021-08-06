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
    `<div id="profilJoueurInfo" class="inventaireTabMaster">
        <div id="profilJoueurInfoProfil" class="inventaireTab">
        </div>
        <div id="profilJoueurInfoMission" class="inventaireTab">
        </div>
        <div id="profilJoueurInfoSucess" class="inventaireTab">
        </div>
    </div>
    <div id="profilJoueurInventaire" class="inventaireTabMaster">
        <div id="profilJoueurInventaireItem" class="inventaireTab">
        </div>
        <div id="profilJoueurInventaireCompagon" class="inventaireTab">
        </div>
    </div>`;
    (document.querySelector("#checkboxViewBadgeProfil") as HTMLElement)
        .addEventListener("click", _ => {
            (document.getElementById("checkboxDecoViewBadgeProfil") as HTMLElement)
                .classList.remove("alertNewItem");
        })
    for (let i = 0; i < badges.length; i++) {
        badges[i].name == "alertInventaire" &&
            (document.getElementById("checkboxDecoViewBadgeProfil") as HTMLElement)
            .classList.add("alertNewItem");
        if (containId(badgesData,badges[i].name)){ //present en base de donné
            const badgeInfo:any = findWithId(badgesData,badges[i].name)
            switch(badgeInfo["type"]){
                case("item"):
                    (document.getElementById("profilJoueurInventaireItem") as HTMLElement).innerHTML +=
                    `<div class="badge badgeItem" id="badgesItem${i}">
                        <p class="badgeName">${badgeInfo["name"]}</p>
                        <p class="badgeNbr">${badges[i].nbr > 0? `${badges[i].nbr}`:""}</p>
                    </div>`
                    const b = (document.getElementById(`badgesItem${i}`) as HTMLElement);
                    b.style.background = `url("./img/badge/${badgeInfo["img"] == "" ? "none":badgeInfo["img"]}.png")`;
                    b.style.backgroundSize = `contain`;
                break;
                case("skill"):
                    (document.getElementById("profilJoueurInfoProfil") as HTMLElement).innerHTML +=
                    `<div class="badge badgeSkill" id="badgesSkill${i}">
                        <img src="./img/badge/${badgeInfo["img"] == "" ? "none":badgeInfo["img"]}.png" alt="${badgeInfo["name"]}Picture">
                        <p class="badgeName">${badgeInfo["name"]}</p>
                        <p class="badgeNbr">${badges[i].nbr > 0? `${badges[i].nbr}`:""}</p>
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
    //inventaire charge test
    // for (let i = 0; i < 100; i++){
    //     (document.getElementById("profilJoueurInventaireItem") as HTMLElement).innerHTML +=
    //                 `<div class="badge badgeItem" id="badgesItem${i}">
    //                     <p class="badgeName">BadgeTest${i}</p>
    //                     <p class="badgeNbr">${i}</p>
    //                 </div>`
    // }
}