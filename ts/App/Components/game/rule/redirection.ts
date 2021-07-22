import {Info} from "../../../Types/infoType";
import {Node} from "../../../Types/nodeType";
import {eventOn} from "./validationPath";
import {needToSee} from "./needToSee";


export const redirection = (tag:Array<string>, info:Info) => {
    let newInfo = info;
    const data = require("../../../../../json/paths.json") as Array<Node>;

    //regarde si redirection
    if (needToSee(tag, newInfo)){
        //regarde vers quel chemin on redirige
        let nodeToGoID = tag[tag.length-1];
        //informe info
        newInfo.game.node = +nodeToGoID;
        //regarde si event lors de la redirection
        newInfo = eventOn(newInfo, data[newInfo.game.node].tag,"node");
    }

    return newInfo;
}