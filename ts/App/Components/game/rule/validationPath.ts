//firebase
import firebase from "firebase/app";
import "firebase/firestore";
//local
import {getInfo, getNameOfUser, saveOn} from "../../../tools/encoding";
import {Info, Badge} from "../../../Types/infoType";
import {Node, findNode} from "../../../Types/nodeType";
import {needToSee} from "./needToSee";
import {give, take} from "./giveANDtake";
import {redirection} from "./redirection";

export const pathIsValid = async (nodeToGoID:number, indexPath:number, data:Array<Node>,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    let info = await getInfo(getNameOfUser(),db,user);
    if (info == undefined) return false;
    let valid = true;
    //parametre de préVérif
    let ok = false;
    //chemin existant dans le noeud actuel
    if (valid){    
    findNode(data, info.game.node).paths[indexPath].pathID == nodeToGoID && (ok = true);
    !ok&& (valid = false);
    //!valid&& console.log("chemin non existant")
    } ok = false //reset pré-vérif

    //
    if (valid){
        ok=true;
        parseTagBasic(findNode(data, info.game.node).paths[indexPath].tag).forEach(tag => {          
            switch(tag[0]){
                case("needToSee"):
                    needToSee(tag,info as Info) || (ok=false);
                    break;
                default:break;
            }
        })
        !ok&& (valid = false)
        //!valid&& console.log("chemin hors need")
    } ok = false //reset pré-vérif
    return valid;
    
}

export const eventOn = (info:Info,tags:string, type:"node"|"path") => {
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
            case("redirection"):
                newInfo = redirection(allTag[i],newInfo);
            default:break;
        }
    }
    return newInfo;
}

export const goToPath = async (nodeToGoID:number, indexPath:number, db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    //console.log("try to go to path"+ nodeToGoID);
    const data = require("../../../../../json/paths.json") as Array<Node>;
    await pathIsValid(nodeToGoID,indexPath, data, db,user).then(async valid => {
        if (valid){
            let nameSave = getNameOfUser();
            if (nameSave!= "load"){
    
                //look info
                await getInfo(nameSave,db,user).then(async info => {
                    if (info == undefined) return console.log("error");
                    const actualNode =findNode(data, info.game.node);
                    // effet de prise du chemin
                    info = eventOn(info, actualNode.paths[indexPath].tag,"path");
                    //on informe que le chemin est pris
                    info.game.node = nodeToGoID;      
                    // effet d'arrivé sur le nouveau noeud
                    info = eventOn(info, actualNode.tag,"node");
                    //enregistre modification
                    
                    await saveOn(nameSave,info, db,user,auth).then (_ => {
                        (document.getElementById("popUpConfirmPath") as HTMLElement).classList.add("hidden")
                    });
                });

                
            }
            else console.error("nom d'user inconnu");
        } else console.error("chemin non valide");
    });    
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
