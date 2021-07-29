import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import {getSaves} from "../../../tools/encoding";

export const Save = async (db:firebase.firestore.Firestore,user:firebase.User|null) => {

    
    await getSaves(db,user).then(saves => {
        const target = document.getElementById("saveSlot") as HTMLElement;
        let render = "";
        if (saves){
            for (let i = 0; i < saves.length; i++) {

                    render += `
                <div class="path loadSave ${saves[i].name}" id="path${i}">
                    <div class="a content">
                        ${saves[i].name}
                    </div>
                    <div style="display:none">
                    <span id="dataSave${i}dateCreation">${saves[i].date_creation.toLocaleString()}</span>
                    <span id="dataSave${i}dateLastSave">${saves[i].date_last_save.toLocaleString()}</span>
                    </div>
                    <div class="mask"></div>
                    <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
                    </div><div class="b"></div></div>
                </div>
                `;
            }
            render += 
            `
                <div class="path loadSave newGame" id="newpath">
                    <div class="a content">
                        NOUVELLE PARTIE
                    </div>
                    <div class="mask"></div>
                    <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
                    </div><div class="b"></div></div>
                </div>
            `;
            target.innerHTML = render;
        } else {document.location.href=`?user=home`;}
        
    })

}