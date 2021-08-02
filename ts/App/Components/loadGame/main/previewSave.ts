//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Save} from "../../../Types/saveType";
import {Path} from "../../../Types/nodeType";
import {parsingText} from "../../../tools/parsingContent";
import {getSaves} from "../../../tools/encoding";

export const previewSave = (saveName:string,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    const render = document.getElementById("previewSave") as HTMLElement;
    getSaves(db,user).then(saves => {if (saves != undefined){
        let save = saves.find(s => s.name == saveName);
        if (save != undefined){
            render.innerHTML = `
            <div id="previewSaveHeader">
                <img src="" alt="savePicture">
                <div>
                    <p>Name</p>
                    <p>info1</p>
                    <p>info2</p>
                </div>
            </div>
            <div id="previewSaveContent">
                <p>info0</p>
                <p>info1</p>
                <p>info2</p>
            </div>
        `}
    }})
    
    
}