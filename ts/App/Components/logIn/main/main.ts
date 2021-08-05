import firebase from "firebase/app";
import "firebase/auth";
import {startUi as renderLogin, startUi} from "../../section/header/user";

export const Main = () => {
    return `
    <div class="a"></div>
    <div class="b node" id="mainHome">
        ${mainContentHtml()}
    </div>
    <div class="c " >
        
    </div>
    `
} 
export const eventMain = (user:firebase.User|null,auth:firebase.auth.Auth) => {
    startUi(user,auth,"LOGIN");
}

const mainContentHtml = ()=>{
    return`
    <div>
            <div class="head"><div id="popUpLogInOutUserClose" class="close"></div> </div>
            <div class="text">
                <h2>Connection ou Création de compte</h2>
                <div id="firebaseui-auth-container" class="LogInOutContainer logInPage"><div id="LogInUserloader">Loading...</div></div>
                
            </div>
            <div class="choice">
            </div>
            
        </div>
    `;
} 