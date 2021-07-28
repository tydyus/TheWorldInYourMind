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
