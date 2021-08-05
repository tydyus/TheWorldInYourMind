//firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
//local
import {Info} from "./Types/infoType";
import {getInfo, getNameOfUser} from "./tools/encoding"
import {Game, GameContent} from "./Components/game/Game";
import {loadGame, eventLoadGame} from "./Components/loadGame/loadGame";
import {newGame, eventNewGame} from "./Components/newGame/newGame";
import {Home, eventHome} from "./Components/home/Home";
import { eventLogIn, LogIn } from "./Components/logIn/LogIn";

const TwiymData = require("../../json/interface.json") as any;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = TwiymData["firebase"];
const firebaseConfig = {
    "apiKey": "AIzaSyBQxRY1533wvbWdbDY-xl2DoDuep3Uycs4",
    "authDomain": "theworldinyourmind.firebaseapp.com",
    "projectId": "theworldinyourmind",
    "storageBucket": "theworldinyourmind.appspot.com",
    "messagingSenderId": "195875495092",
    "appId": "1:195875495092:web:6e874c898958eee4b60be1",
    "measurementId": "G-NGEC702B4K"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var auth:firebase.auth.Auth = firebase.auth();



const initApp = () => {
    auth.onAuthStateChanged(user => {
        initPage(user,auth);
    }, function(error) {
      console.log(error);
    });
    
};

const initPage = (cUser:firebase.User|null,auth:firebase.auth.Auth) => {


    // init function root constuctor
    const App = (page:string) => {
        (document.getElementById("root") as HTMLElement).innerHTML = 
        `
            ${page}
        `
    }

    getInfo(getNameOfUser(),db,cUser).then(info => {
        //select page
        if (info != undefined){
            switch(info.page){
                case("game"):
                    //console.log("game");
                    App(Game());
                    GameContent(info,db,cUser,auth)
                    break;
                case("loadGame"):
                    //console.log("loadGame");
                    App(loadGame(info, db, cUser));
                    eventLoadGame(info, db,cUser,auth);
                    break;
                case("login"):
                    //console.log("loadGame");
                    App(LogIn(info,cUser));
                    eventLogIn(cUser, auth);
                    break;
                case("newGame"):
                    //console.log("newGame");
                    App(newGame(info,cUser));
                    eventNewGame(info,db,cUser,auth);
                    break;
                case("home"):
                    //console.log("home");
                    App(Home(info,cUser));
                    eventHome(cUser,auth);
                    break;
                default:break;
            }
        } else (console.error("info undefined !"))
    })
    
}




initApp()