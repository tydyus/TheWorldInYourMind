import {Info} from "./Types/infoType";
import {getInfoFromCookie, getNameOfUser, deleteCookie, saveOnCookie, parseData} from "./tools/encoding"
import {Game, eventGame} from "./Components/game/Game";
import {loadGame, eventLoadGame} from "./Components/loadGame/loadGame";
import {newGame, eventNewGame} from "./Components/newGame/newGame";
import {Home, eventHome} from "./Components/home/Home";

//get info
let info:Info;
switch(getNameOfUser()){
    case("load"):info = getInfoFromCookie("load");break;
    case("newGame"):info = getInfoFromCookie("newGame");break;
    default:info = getInfoFromCookie(getNameOfUser());break;
}

// init function root constuctor
const App = (page:string) => {
    (document.getElementById("root") as HTMLElement).innerHTML = 
    `
        ${page}
    `
}

//write page
switch(info.page){

    case("game"):
        //console.log("game");
        App(Game(info));
        eventGame(info);
        break;
    case("loadGame"):
        //console.log("loadGame");
        App(loadGame(info));
        eventLoadGame(info);
        break;
    case("newGame"):
        //console.log("newGame");
        App(newGame(info));
        eventNewGame(info);
        break;
    case("home"):
        //console.log("home");
        App(Home(info));
        eventHome(info);
        break;

    default:break;
}

