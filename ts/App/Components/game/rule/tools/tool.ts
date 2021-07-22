import {Info, Badge} from "../../../../Types/infoType";

//tool user badge
export const setBadgeUsertoData = (info:Info) => {
    let badgeUser:{badges:Array<string>, badgesNbr:Array<number>} = {badges:[],badgesNbr:[]}
    //set badge user
    info.game.user.badges.map(b => {
        badgeUser.badges.push(b.name);
        badgeUser.badgesNbr.push(b.nbr);
    })
    return badgeUser;
}
export const setDatatoBadgeUser = (DataUser:{badges:Array<string>, badgesNbr:Array<number>}) => {
    let badgeUser: Array<Badge> = []
    for (let i = 0; i < DataUser.badges.length; i++) {
               badgeUser.push({name:DataUser.badges[i], nbr:DataUser.badgesNbr[i]});
    } return badgeUser;
}