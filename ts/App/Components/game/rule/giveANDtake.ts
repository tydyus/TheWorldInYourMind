import {Info, Badge} from "../../../Types/infoType";
import {saveOnCookie, getInfoFromCookie} from "../../../tools/encoding"
import {setBadgeUsertoData, setDatatoBadgeUser} from "./tools/tool";


export const give = (tag:Array<string>, info:Info) => {
    let newInfo = info;
    let badgeUser= setBadgeUsertoData(newInfo);
    for (let i= 1; i < tag.length; i++) {
        if(badgeUser["badges"].includes(tag[i].split("_")[0]))
        {
            const index = badgeUser["badges"].indexOf(tag[i].split("_")[0])
            badgeUser["badgesNbr"][index] += +tag[i].split("_")[1];
        }
        else 
        {
            badgeUser["badges"].push(tag[i].split("_")[0]);
            badgeUser["badgesNbr"].push(+tag[i].split("_")[1]);
        }
    }
    newInfo.game.user.badges = setDatatoBadgeUser(badgeUser);
    return newInfo;
}

export const take = (tag:Array<string>, info:Info) => {
    let newInfo = info;
    let badgeUser= setBadgeUsertoData(newInfo);  
    console.log(tag);
    return newInfo;
}

