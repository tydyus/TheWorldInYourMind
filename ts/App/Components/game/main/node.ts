import {Info} from "../../../Types/infoType";
import {Node} from "../../../Types/nodeType";
import {parsingText} from "../../../tools/parsingContent";

export const NodeElement = (node:Node) => {
    return`
    <div class="a deco" id="nodeDeco"></div>
    <div class="b content" id="nodeContent">
        ${parsingText(node.content)}
    </div>
    `
}

// <p class="talk npc">
//     Qui êtes-vous? 
//     <span class="annotation">curieux</span></p>
// <p class="narrator">
//     Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil.
//     Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé.
// </p><p class="narrator">
//     Ou êtes-vous? 
// </p>