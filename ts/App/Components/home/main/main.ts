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
    <section class="homeSection1 center">
            <p>Bienvenue sur le projet d'exemple du template web TheWorldInYourMind, Twiym.</p>
            <p>Template Web pour gérer un rpg textuel en ligne ce voulant facilement utilisable et modulable</p>
    </section>
    <div class="parralax" id="parralax1">
    </div>
    <section class="homeSection2">
        <h2 class="center">Système</h2>
        <div class="preface">
            <div class="content">
                <p>
                    Twiym est basé sur les "livres dont vous êtes le héros", sois un jeu d'aventure textuel ou le personnage voyage de scène en scène en fonction de ses choix.
                </p><p>
                    Le jeu comporte le "livre", qui vas représenter l'histoire que vas parcourir le joueur, la "fiche de personnage" qui vas contenir tout ce qui définis le joueur dans la description de son personnage, ses possessions, et ses achèvements. Et pour finir "l'encyclopédie" qui vas indexer les variables du jeux, cela peut tout aussi bien être des objets que des compétences, des états, des succés et j'en passe.
                </p><p>
                    Le livre vas contenir des nodes, noeuds, et des paths, chemins.
                </p><p>
                    L'encyclopédie vas définir les badges.
                </p><p>
                    La fiche de personnage vas être définis par un ensemble de badges.
                </p>
            </div><div class="prefaceImg1">
            </div>
        </div>
        <div class="grid3card">
            <div class="card">
                <h3>Nodes</h3>
                <div>
                    <p>Chaque scenes est définies par un noeud, un node, qui sera composé d'une image ou deux images d'ambience ainsi qu'un descriptif textuel.</p>
                </div>
                <a href="#SectionNodes">voir</a>
            </div>  
            <div class="card">
                <h3>Paths</h3>
                <div>
                    <p>Les Paths, chemins, sont lié à des nodes et permettent de naviguer entre les nodes.</p>
                </div>
                <a href="#SectionPaths">voir</a>
            </div>
            <div class="card">
                <h3>Badges</h3>
                <div>
                    <p>Chaque Path et Node vont être régis par des évents permettant de mettre en place des conditions, redirection, gain d'items, ... Tout ces events prennent en paramètres les badges.</p>
                </div>
                <a href="#SectionBadges">voir</a>
            </div>            
        </div>
    </section>
    <section>
        <div class="preface systeme">
            <div class="content">
                <h2 id="SectionNodes">Nodes</h2>
                <p>
                    Les scènes sont représenté par une image de lieux, donnant une indication visuelle de ou ce passe l'histoire, ainsi que optionnelement une image de "focus" indiquant sur quoi est centré la scène rendu par le node.
                    En plus de ces indicateur visuel le node est accompagné de une ou plusieur balise de texte pouvant être décoré en dialogue. Ces textes peuvent avoir leur présence conditionné par des conditions.
                </p>
            </div>
            <div>
                <img src="./img/home/4x/nodes@4x.png" alt="nodes img">
            </div>
        </div>
    </section>
    <section>
        <div class="preface systeme">
            <div class="content">
                <h2 id="SectionPaths">Paths</h2>
                <p>
                    La représentation des chemins, les paths, est semblable à celle des nodes à l'exception près que les chemins n'ont pas de rendu visuel ou de blocs de textes soumient à des conditions, à la place c'est chaque chemin qui peut contenir des tags indiquant sous qu'elle conditions ils sont visible, quelle items ils peuvent prendre ou donner.
                </p>
            </div>
            <div>
            <img src="./img/home/4x/paths@4x.png" alt="paths img">
            </div>
        </div>
    </section>
    <section>
        <div class="preface systeme">
            <div class="content">
                <h2 id="SectionBadges">Badges</h2>
                <p>Les badges servent de variable pour définir tout élément du jeu n'étant pas des scènes ou chemins, ils sont utilisé pour paramétrer les conditions et autres tag lié à ces deux entité. Les badges sont indexé dans un fichier indiquant à quoi ils correspondent, item, skill, ... . Il est bon de noté qu'un badge n'as pas obligation d'être indexé, ainsi si le joueur reçois le badge non-indexé "courageux" il pourra tout de même y avoir des interaction de tag de chemin lié a ce badge.</p>
            </div>
            <div>
            <img src="./img/home/4x/badge@4x.png" alt="paths img">
            </div>
        </div>
    </section>
    `;
} 