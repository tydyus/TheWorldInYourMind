import firebase from "firebase/app";
import "firebase/auth";
var firebaseui = require('firebaseui');


export const User = (user:firebase.User|null) => {
    let render = "";
    render += user?
    `<div id="linkToLogInOutUser">${user.email}(LogOut)</div>`
    :`<div id="linkToLogInOutUser">Login/Sign in</div>`;

    //popUpConnection/Deconnection
    document.body.innerHTML += `
    <!-- pop-up -->
    <div id="popUpLogInOutUser" class="hidden popUp">
        <div>
            <div class="head"><div id="popUpLogInOutUserClose" class="close"></div> </div>
            <div class="text">
                <div id="firebaseui-auth-container-option" class="LogInOutContainer">
                    
                </div>
                <div id="firebaseui-auth-container" class="LogInOutContainer"><div id="LogInUserloader">Loading...</div></div>
                
            </div>
            <div class="choice">
            </div>
            
        </div>
        
    </div>
    <!-- ------ -->
    `

    return render;
}

export const eventUser = (user:firebase.User|null,auth:firebase.auth.Auth) => {

        startUi(user,auth)
        
        //pop up hide/pop
        const switchHidden = ()=>{
            const pop = (document.getElementById("popUpLogInOutUser") as HTMLElement)
            pop.classList.contains("hidden")?
                pop.classList.remove("hidden"):
                pop.classList.add("hidden");}

        (document.getElementById("linkToLogInOutUser") as HTMLElement).
            addEventListener("click",switchHidden);
        (document.getElementById("popUpLogInOutUserClose") as HTMLElement).
            addEventListener("click",switchHidden);  
}

export const startUi = (user:firebase.User|null,auth:firebase.auth.Auth,idHTML='#firebaseui-auth-container') => {
    if (user == null){
        const ui = new firebaseui.auth.AuthUI(auth);
        // The start method will wait until the DOM is loaded.
        
        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
                },
                uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                (document.getElementById('LogInUserloader') as HTMLElement).style.display = 'none';
                }
            },
            signInFlow: 'popup',
            signInSuccessUrl: '?',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
                    requireDisplayName: true,  
                }
            ],
            // Terms of service url.
            tosUrl: '?',
            // Privacy policy url.
            privacyPolicyUrl: '?'
        });
    } else {
        (document.getElementById("firebaseui-auth-container") as HTMLElement).innerHTML
        = `
        <div>
            Ce déconnecter?
        </div>
        <button id = "logOutBtn">oui</button>
        `;
        (document.getElementById("logOutBtn") as HTMLElement).
            addEventListener("click",async () =>{
                await auth.signOut().then(_ => document.location.href= `?`)
            });
    }
}
