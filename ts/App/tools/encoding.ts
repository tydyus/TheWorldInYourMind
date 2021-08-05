//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info, Badge} from "../Types/infoType";
import {GameContent} from "./../Components/game/Game";
import {Save} from "../Types/saveType"

export const  encoding = (asciiString:string) => {
    let hex = '';
    let tempASCII, tempHex;
    const asciiArray = asciiString.split('');
    for (let i = 0; i < asciiArray.length; i++) {
        tempASCII = asciiArray[i].charCodeAt(0)
        tempHex = tempASCII.toString(16);
        hex = hex + tempHex;
    }
    hex = hex.trim();
    return hex;
}


export const decoding = (hexString:string) => {
    let stringOut = '';
    for (let i = 0; i < hexString.length; i++) {
        let data = hexString[i] + hexString[i+1];
        let tempAsciiCode = parseInt(data, 16);
        stringOut = stringOut + String.fromCharCode(tempAsciiCode);
        i++;
    }
    return stringOut;
}

export const parseData = (data:string) => {
    let render:Info = 
    {page: "game",
    game: {
        user:{
            name:"",
            badges:[]
        },
        node:0
    }}
    data.split("!").map(i => {
        const name= i.split("=")[0];
        const def = i.split("=")[1];
        switch(name){
            case("page"):
                render["page"] = def;
                break;
            case("gameUserName"):
                render["game"]["user"]["name"] = def;
                break;
            case("gameUserBadges"):
                let table:Array<Badge> = [];
                def.split(",").map(i => {
                    let ii = i.split("_")
                    table.push({name: ii[0], nbr: +ii[1]})
                });
                render["game"]["user"]["badges"] = table;
                break;
            case("gameNode"):
                render["game"]["node"] = +def;
                break;
            default:break;
        }
    })
    return render;
}

export const stringifyData = (info:Info) => {
    let badge="";
    
    info["game"]["user"]["badges"].map(m => {
        badge += `${m.name}_${m.nbr},`;
        
        })
    badge = badge.substring(0,badge.length-1) //on enleve la virgule excedentaire
    let render = 
    `page=${info["page"]}!`+
    `gameUserName=${info["game"]["user"]["name"]}!`+
    `gameUserBadges=${badge}!`+
    `gameNode=${info["game"]["node"]}!`
    ;
    return render;
}

const cheminLoad = "page=loadGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
const cheminLogin = "page=login!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
const cheminNewGame = "page=newGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
const cheminHome = "page=home!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";

export const getInfoFromUrl = () => {
    let info:Info;
    window.location.search != ""?
    info = parseData(decoding(window.location.search.split("=")[1]))
:
    info = parseData(cheminLoad);
    return info;
}


export const getInfo = async (nameSave:string,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    let info:Info = parseData(cheminHome);
    switch (nameSave){
        case("load"):   return parseData(cheminLoad);
        case("login"):   return parseData(cheminLogin);
        case("newGame"):return parseData(cheminNewGame);
        case("home"):   return info;
        default:
            
            await getSaves(db,user).then(saves => {
                if (saves != undefined) 
                    { 
                    saves.map(s =>{if (s.name == nameSave) info = parseData(decoding(s.data)) });
                    } 
            }).catch(error => {}) 
            return info; 
    }
}


export const saveOn = async (nameSave:string, save:Info,db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {

      if (user) {
        const docSave = db.collection('saves')
            .where('userId', '==', user.uid)
            .where('name', '==', nameSave);
        try 
        {
            docSave.get().then(saves => {
                saves.docs.map(doc =>{
                    db.collection('saves').doc(doc.id).set({ //mise a jour des datas
                        data:encoding(stringifyData(save)), //ne pas oublier l'encodage
                        date_last_save:Date()
                  }, { merge: true }) //on ne veux mettre a jour que les data sans supprimer le reste
                  .then(_ => {save.page=="game" && GameContent(save,db,user,auth)}) //on recharge les elements de jeu
                  .catch(error => console.error(error));
                })
            }).catch(error => console.error(error))
        } catch (error) {console.error(error);}
      }
}
export const CreateOn = async (nameSave:string, save:Info,db: firebase.firestore.Firestore,user:firebase.User|null,auth:firebase.auth.Auth) => {
    if (user) {
        await db.collection('saves').add({ //mise a jour des datas
            name:nameSave,
            userId:user.uid,
            data:encoding(stringifyData(save)), //ne pas oublier l'encodage
            date_creation:Date(),
            date_last_save:Date()
        })
        .then(_ => console.log(`new save: ${nameSave}`))
        .catch(error => console.error(error));  
    }
}

export const deleteSave = async (nameSave:string,db: firebase.firestore.Firestore,user:firebase.User|null) => {
    if (user) {
        const docSave = db.collection('saves')
            .where('userId', '==', user.uid)
            .where('name', '==', nameSave);
        try 
        {
            docSave.get().then(saves => {
                saves.docs.map(doc =>{
                    db.collection('saves').doc(doc.id).delete() //on ne veux mettre a jour que les data sans supprimer le reste
                  .then(_ => {document.location.href=`?user=load`;}) //on recharge la page
                  .catch(error => console.error(error));
                })
            }).catch(error => console.error(error))
        } catch (error) {console.error(error);}
      }
}

export const getNameOfUser = () => {
    let data = window.location.search.split("?")
    for (let d of data){
        if(d.split("=")[0] == "user") return d.split("=")[1];
    }
    return "home";
}

export const getSaves = async (db: firebase.firestore.Firestore,user:firebase.User|null) => {

      if (user) {
        const docSave = db.collection('saves').where('userId', '==', user.uid);
        try {
          const renderSaves: Array<Save> = [];
          const doc = await docSave.get();
          doc.docs.forEach(d =>
            renderSaves.push({
              name: d.data().name as string,
              data: d.data().data as string,
              date_creation: d.data().date_creation as Date,
              date_last_save: d.data().date_last_save as Date
            }),
          );
          return renderSaves.sort((a, b) => a.date_last_save.valueOf()-b.date_last_save.valueOf());
        } catch (error) {
          console.error(error);
        }
      }
  };