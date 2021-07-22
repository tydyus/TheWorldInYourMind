import {Info} from "../../../Types/infoType";
import {getInfoFromCookie, parseData, decoding} from "../../../tools/encoding";
import {Save} from "./save";


export const Main = () => {
    return `
    <div class="a"></div>
    <div class="b node" id="node">
    
    </div>
    <div class="c paths" id="paths">
        ${Save()}
    </div>
    `
} 
export const eventMain = () => {
    //other 

    function validPath(id:string){
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

    function cleanFocusOnPath(){
        var loadSaves = document.getElementsByClassName('loadSave');
        for (let i = 0; i < loadSaves.length; i++) {
            loadSaves[i].classList.remove("onFocus");
        }
    }

    const loadSaves = document.getElementsByClassName("loadSave");
    for (let index = 0; index < loadSaves.length; index++) {
        loadSaves[index].addEventListener("click", () => {
            
            validPath(loadSaves[index].id);  
            const popUpChoiceYes = document.getElementById('popUpChoiceYes') as HTMLElement;
            popUpChoiceYes.classList.forEach(c => {popUpChoiceYes.classList.remove(c)} );
            popUpChoiceYes.classList.add(loadSaves[index].classList[2]);
            let text = document.getElementById("textPopUp") as HTMLElement;
            if (loadSaves[index].classList[2] == "newGame")
                text.innerHTML = "Commencer une nouvelle partie?";
            else text.innerHTML = `Charger la partie "${loadSaves[index].classList[2]}" ?`;
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
            document.location.href=`?user=${popUpChoiceYes.classList[0]}`;
        }
            
        );
    

}
export const majMain = (actuelNode = 0) => {
    
}