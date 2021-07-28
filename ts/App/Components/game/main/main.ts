//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "../../../Types/infoType";
import {NodeElement} from "./node";
import {PathsElement} from "./paths";
import {Node, findNode} from "../../../Types/nodeType";
import {goToPath} from "../rule/validationPath";
import {eventPlayerProfil} from "./playerProfil"
import {eventGame} from "./../Game";

export const Main = () => {
    return `
    <div class="a"></div>
    <div class="b node" id="node">
    <div id="nodeOnLoad" class="spinnerOnLoad"><i class="far fa-compass"></i></div>
    </div>
    <div class="c paths" id="paths">
    <div id="pathOnLoad" class="spinnerOnLoad"><i class="far fa-compass"></i></div>
    </div>
    `
} 
export const MainContent = async(info:Info,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    const data = require("../../../../../json/paths.json") as Array<Node>;
    const actualNode = findNode(data,info.game.node);
    (document.getElementById("node") as HTMLElement).innerHTML
        = NodeElement(actualNode);
    //deco fond node
    (document.querySelector(".node .deco") as HTMLElement).style.background = 
    `url("./img/node/focal/${actualNode.focal}.png") top left no-repeat, url("./img/node/location/${actualNode.location}.png") top right no-repeat`;
    (document.querySelector(".node .deco") as HTMLElement).style.backgroundSize ="contain";
    //
    (document.getElementById("paths") as HTMLElement).innerHTML
        = await PathsElement(actualNode["paths"],db,user);
}
export const eventMain = (info:Info, db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    //profilPlayer
    eventPlayerProfil(info);

    

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
            // popUpChoiceYes.classList.forEach(c => {popUpChoiceYes.classList.remove(c)} );
            // popUpChoiceYes.classList.add(paths[index].classList[1]);
            // popUpChoiceYes.classList.add(paths[index].id);
            popUpChoiceYes.setAttribute("class", `${paths[index].classList[1]} ${paths[index].id}`)
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
            goToPath(+popUpChoiceYes.classList[0], +popUpChoiceYes.classList[1].split("path")[1],db,user,auth);
        }
            
        );
    

}
export const majMain = async (idNode = 0, db: firebase.firestore.Firestore,user:firebase.User|null) => {
    const data = require("../../../../../json/paths.json") as Array<Node>;
    const actualNode = findNode(data,idNode);
    (document.getElementById("node") as HTMLElement).innerHTML = NodeElement(actualNode);
    (document.getElementById("paths") as HTMLElement).innerHTML = await PathsElement(actualNode["paths"],db,user);
}