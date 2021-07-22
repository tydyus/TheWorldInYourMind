import {getInfoFromCookie, getNameOfUser, saveOnCookie, stringifyData, encoding, decoding, parseData} from "../../../tools/encoding";
import {Info, Badge} from "../../../Types/infoType";
import {Node} from "../../../Types/nodeType";
import {needToSee} from "./needToSee";
import {give, take} from "./giveANDtake"

export const pathIsValid = (nodeToGoID:number, indexPath:number, data:Array<Node>):boolean => {
    let valid = true;
    const info = getInfoFromCookie(getNameOfUser());
    
    //parametre de préVérif
    let ok = false;
    //chemin existant dans le noeud actuel
    if (valid){
    data[info.game.node].paths[indexPath].pathID == nodeToGoID && (ok = true);
    !ok&& (valid = false);
    //!valid&& console.log("chemin non existant")
    } ok = false //reset pré-vérif

    //
    if (valid){
        parseTagBasic(data[info.game.node].paths[indexPath].tag).forEach(tag => {          
            ok=true;
            switch(tag[0]){
                case("needToSee"):
                    needToSee(tag,info) || (ok=false);
                    break;
                default:break;
            }
        })
        !ok&& (valid = false)
        //!valid&& console.log("chemin hors need")
    } ok = false //reset pré-vérif
    //
    return valid;
}

const eventOn = (info:Info,tags:string, type:"node"|"path") => {
    let newInfo = info;
    const allTag = parseTagBasic(tags);
    for (let i = 0; i < allTag.length; i++) {
        switch(allTag[i][0]){
            case("give"):
                newInfo = give(allTag[i],newInfo);
                break;
            case("take"):
                newInfo = take(allTag[i],newInfo);
                break;
            default:break;
        }
    }
    return newInfo;
}

export const goToPath = (nodeToGoID:number, indexPath:number) => {
    const data = require("../../../../../json/paths.json") as Array<Node>;
    if (pathIsValid(nodeToGoID,indexPath, data)) {
        let nameSave = getNameOfUser();
        if (nameSave!= "load"){

            //look info
            let info = getInfoFromCookie(nameSave);
            
            // effet de prise du chemin
            info = eventOn(info, data[info.game.node].paths[indexPath].tag,"path");

            //on informe que le chemin est pris
            info.game.node = nodeToGoID;

            // effet d'arrivé sur le nouveau noeud
            info = eventOn(info, data[info.game.node].tag,"node");
            
            //enregistre modification
            saveOnCookie(nameSave,info);
            document.location.href=`?user=${nameSave}`;
        }
        else {console.error("nom d'user inconnu");}
    } else {console.error("chemin non valide");}
}

const parseTagBasic = (tags:string) => {
    let allTags : Array<Array<string>> = [];
    let tag : Array<string> = [];
    tags.split("$").map(t => {
        tag = [];
        t.split("=").map(tl => tag.push(tl));
        allTags.push(tag);
    })
    return allTags
}
