import {Info} from "../../../Types/infoType";

export const eventPlayerProfil = (info:Info) => {
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
    for (let i = 0; i < badges.length; i++) {
        profilJoueur.innerHTML +=
        `<p>${badges[i].name} ${badges[i].nbr > 0? `(${badges[i].nbr})`:""}</p>`
        
    }
        

}