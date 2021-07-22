import {Info} from "../../../Types/infoType";
import {getInfoFromCookie, saveOnCookie, getNameOfUser, encoding, stringifyData} from "../../../tools/encoding";
import {NodeElement} from "./node";
import {PathsElement} from "./paths";
import {Node} from "../../../Types/nodeType";
import {goToPath} from "../rule/validationPath";

export const Main = (info:Info) => {
    const data = require("../../../../../json/paths.json") as Array<Node>;
    return `
    <div class="a"></div>
    <div class="b node" id="node">
        ${NodeElement(data[info.game.node])}
    </div>
    <div class="c paths" id="paths">
        ${PathsElement(data[info.game.node]["paths"])}
    </div>
    `
} 
export const eventMain = (info:Info) => {
    //other 

    function validPath(id:string){
        var paths = document.getElementsByClassName('path');
        for (let i = 0; i < paths.length; i++) {
            if (paths[i].id == id){
                if (paths[i].classList.contains("onFocus")){
                    paths[i].classList.remove("onFocus");
                } else {
                    paths[i].classList.add("onFocus");
                    (document.getElementById("popUpConfirmPath") as HTMLElement).classList.remove("hidden");
                }
            }
            else{paths[i].classList.remove("onFocus");}
        }
        
    }

    function cleanFocusOnPath(){
        var paths = document.getElementsByClassName('path');
        for (let i = 0; i < paths.length; i++) {
            paths[i].classList.remove("onFocus");
        }
    }

    const paths = document.getElementsByClassName("path");
    for (let index = 0; index < paths.length; index++) {
        paths[index].addEventListener("click", () => {
            
            validPath(paths[index].id);  
            const popUpChoiceYes = document.getElementById('popUpChoiceYes') as HTMLElement;
            popUpChoiceYes.classList.forEach(c => {popUpChoiceYes.classList.remove(c)} );
            popUpChoiceYes.classList.add(paths[index].classList[1]);
            popUpChoiceYes.classList.add(paths[index].id);
        });
    }

    //setup validation event
    const popUpClose = document.getElementById('popUpClose') as HTMLElement;
    const popUpChoiceNo = document.getElementById('popUpChoiceNo') as HTMLElement;
    const popUpChoiceYes = document.getElementById('popUpChoiceYes') as HTMLElement;

    //set function in event on click
    popUpClose.addEventListener(
        "click", ()=>{
            (document.getElementById('popUpConfirmPath') as HTMLElement).classList.add("hidden");
            cleanFocusOnPath()
        });
    popUpChoiceNo.addEventListener(
        "click", ()=>{
            (document.getElementById('popUpConfirmPath') as HTMLElement).classList.add("hidden");
            cleanFocusOnPath()
        });
    popUpChoiceYes.addEventListener(
        "click", () => {
            goToPath(+popUpChoiceYes.classList[0], +popUpChoiceYes.classList[1].split("path")[1]);
        }
            
        );
    

}
export const majMain = (actuelNode = 0) => {
    const data = require("../../../../../json/paths.json") as Array<Node>;
    (document.getElementById("node") as HTMLElement).innerHTML = NodeElement(data[actuelNode]);
    (document.getElementById("paths") as HTMLElement).innerHTML = PathsElement(data[actuelNode]["paths"]);
}