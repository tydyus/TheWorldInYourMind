import {Info, Badge} from "../Types/infoType";

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

export const getInfoFromCookie = (nameSave:string) => {
    switch (nameSave){
        case("load"):   return parseData(cheminLoad);
        case("newGame"):return parseData(cheminNewGame);
        case("home"):   return parseData(cheminHome);
        default:        return parseData(decoding(`${document.cookie}`.split(`${nameSave}=`)[1].split(";")[0]));
    }
}

export const saveOnCookie = (nameSave:string, save:Info) => {
    document.cookie = `${nameSave}=${(encoding(stringifyData(save)))}; SameSite=Lax`;
}

export const deleteCookie = (nameSave:string) => {
    document.cookie = `${nameSave}=${(encoding(stringifyData(getInfoFromCookie(nameSave))))}; SameSite=Lax; expires=Thu, 01 Jan 1970 00:00:00 UTC'`;
}

export const getNameOfUser = () => {
    let data = window.location.search.split("?")
    for (let d of data){
        if(d.split("=")[0] == "user") return d.split("=")[1];
    }
    return "home";
}