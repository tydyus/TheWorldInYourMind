//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../../Types/infoType";
import {Node, findNode} from "../../../Types/nodeType";
import {Path} from "../../../Types/nodeType";
import {parsingText} from "../../../tools/parsingContent";
import {pathIsValid} from "../rule/validationPath";
import {needToSee} from "../rule/needToSee";

export const PathsElement = async (paths:Array<Path>,info:Info,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    let render = "";
    const data = require("../../../../../json/paths.json") as Array<Node>;
    for (let index = 0; index < paths.length; index++) {
        const decoratorpath = paths[index].tag.split("=")[0] == "decorator"? true:false;
        if (await pathIsValid(paths[index].pathID, index, data, db,user)){
            render += `
            <div class="path ${paths[index].pathID}" id="path${index}" ${decoratorpath?`style="display:none"`:""}>
            ${!decoratorpath?`
                <div class="a content">
                    ${parsingText(paths[index].content)}
                </div>
                <div class="mask"></div>
                <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
                </div><div class="b
                ${info.game.node == paths[index].pathID?` action`:` move`}">
                </div></div>`
            :""}
            </div>
            `  ;
            decoratorpath && needToSee(paths[index].tag.split("$")[0].split("="),info) &&
                ((document.getElementById("nodeContent") as HTMLElement).innerHTML 
                    += parsingText(paths[index].content));
        }
    }
    paths.length == 0 ? (document.getElementById("mainGame") as HTMLElement)
        .classList.add("noPaths")
        :(document.getElementById("mainGame") as HTMLElement)
        .classList.remove("noPaths");
    
    return render;
}
