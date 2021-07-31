import {Info} from "../../../Types/infoType";
import {containId, findWithId} from "../../../Types/nodeType";
import {addNotification} from "../../../tools/notification";
import {setBadgeUsertoData, setDatatoBadgeUser} from "./tools/tool";


export const give = (tag:Array<string>, info:Info) => {
    let newInfo = info;
    let badgeUser= setBadgeUsertoData(newInfo);
    const dataBadge = require("../../../../../json/badge.json");
    for (let i= 1; i < tag.length; i++) {
        const name = tag[i].split("_")[0];
        const nbr = tag[i].split("_")[1]
        if(badgeUser["badges"].includes(name))
        {
            const index = badgeUser["badges"].indexOf(name)
            badgeUser["badgesNbr"][index] += +nbr;
            //Add notif si l'item est incremental
            +nbr > 0 && containId(dataBadge, name) 
                && addNotification(`Vous avez récuperez${+nbr > 0?` ${+nbr}`:""} ${name}.`,findWithId(dataBadge,name)["img"]);
        }
        else 
        {
            badgeUser["badges"].push(name);
            badgeUser["badgesNbr"].push(+nbr);
            //add notif
            containId(dataBadge, name) && addNotification(`Vous avez récuperez${+nbr > 0?` ${+nbr}`:""} ${name}.`,findWithId(dataBadge,name)["img"]);
        }
    }
    newInfo.game.user.badges = setDatatoBadgeUser(badgeUser);
    return newInfo;
}

export const take = (tag:Array<string>, info:Info) => {
    let newInfo = info;
    let badgeUser= setBadgeUsertoData(newInfo);
    const dataBadge = require("../../../../../json/badge.json");
    for (let i= 1; i < tag.length; i++) {
        const name = tag[i].split("_")[0];
        const nbr = tag[i].split("_")[1]
        if(badgeUser["badges"].includes(name))
        {
            const index = badgeUser["badges"].indexOf(name)
            let PlayerNbr = badgeUser["badgesNbr"][index]
            badgeUser["badgesNbr"][index] -= +nbr;
            if (PlayerNbr <= +nbr){
                badgeUser["badgesNbr"] = badgeUser["badgesNbr"].filter((_, i) => i !== index);
                badgeUser["badges"] = badgeUser["badges"].filter((_, i) => i !== index);
            }
            
        }
        else 
        {

        }
    }
    newInfo.game.user.badges = setDatatoBadgeUser(badgeUser);
    return newInfo;
}

