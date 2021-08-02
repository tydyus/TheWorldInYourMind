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
export const eventMain = () => {

}

const mainContentHtml = ()=>{
    return`
    <section>
        <div class="interfaceHomeLeft">
            <p>Bienvenue sur le projet d'exemple du template web TheWorldInYourMind, Twiym.</p>
            <p>Template Web pour gérer votre rpg textuel en ligne Twiym ce veut facilement utilisable et personnalisable</p>
            <p>Pour pouvoir commencer à utilisé Twiym je vous invite à aller sur la doc: link.</p>
            <p>Pour tester le projet test vous pouvez sinon vous connecter en haut a droite puis aller dans la page de gestion des sauvegardes (ici:link"load" , ou en cliquant sur la disquette en bas à gauche) et vous créer une partie.</p>
        </div>
        <div class="interfaceHomeRight">           
        </div>
    </section>
    `;
} 