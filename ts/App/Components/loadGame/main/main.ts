//firebase
import firebase from "firebase/app";
import "firebase/firestore";
//local
import {Save} from "./save";
import {deleteSave} from "../../../tools/encoding"


export const Main = (db:firebase.firestore.Firestore) => {
    return `
    <div class="a"></div>
    <div class="b node" id="node">
    
    </div>
    <div class="c paths" id="saveSlot">
    </div>
    `
} 
export const eventMain = async (db:firebase.firestore.Firestore,user:firebase.User|null) => {
    //other 
    
    const validPath = (id:string) => {
        var paths = document.getElementsByClassName('loadSave');
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

    const cleanFocusOnPath = () => {
        var loadSaves = document.getElementsByClassName('loadSave');
        for (let i = 0; i < loadSaves.length; i++) {
            loadSaves[i].classList.remove("onFocus");
        }
    }

    const loadSaves = document.getElementsByClassName("loadSave");

    await Save(db,user).then(_ => {
        for (let index = 0; index < loadSaves.length; index++) {
            loadSaves[index].addEventListener("click", () => {
                
                validPath(loadSaves[index].id);  
                const popUpChoiceYes = document.getElementById('popUpChoiceYes') as HTMLElement;
                popUpChoiceYes.classList.forEach(c => {popUpChoiceYes.classList.remove(c)} );
                popUpChoiceYes.classList.add(loadSaves[index].classList[2]);
                let text = (document.getElementById("textPopUp") as HTMLElement);
                if (loadSaves[index].classList[2] == "newGame")
                    (document.getElementById("textSaveLoadNameGlobal") as HTMLElement)
                    .innerHTML = "Commencer une nouvelle partie?";
                else {
                    (document.getElementById("textSaveLoadName") as HTMLElement)
                        .innerHTML = `"${loadSaves[index].classList[2]}"`;
                    (document.getElementById("textLoadDate") as HTMLElement)
                        .innerHTML = `<p>Date creation:${
                            (document.getElementById(`dataSave${index}dateCreation`) as HTMLElement).innerHTML
                        }</p>
                        <p>Date dernière sauvegarde:${
                            (document.getElementById(`dataSave${index}dateLastSave`) as HTMLElement).innerHTML
                        }</p>`;
            }
            });
        }
    
        //setup validation event
        const popUpClose = document.getElementById('popUpClose') as HTMLElement;
        const popUpChoiceNo = document.getElementById('popUpChoiceNo') as HTMLElement;
        const popUpChoiceYes = document.getElementById('popUpChoiceYes') as HTMLElement;
        const popUpChoiceDelete = document.getElementById('btnDeleteSave') as HTMLElement;
    
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
                document.location.href=`?user=${popUpChoiceYes.classList[0]}`;
            });
            popUpChoiceDelete.addEventListener(
            "click", () => {
                deleteSave(popUpChoiceYes.classList[0],db,user);
            });
    })
}
export const majMain = (actuelNode = 0) => {
    
}