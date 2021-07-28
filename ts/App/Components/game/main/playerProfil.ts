import {Info} from "../../../Types/infoType";

export const eventPlayerProfil = (info:Info) => {
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
    let render = ""
    for (let i = 0; i < badges.length; i++) {
         render += `<p>${badges[i].name} ${badges[i].nbr > 0? `(${badges[i].nbr})`:""}</p>`
        
    }
    profilJoueur.innerHTML  = render;

}