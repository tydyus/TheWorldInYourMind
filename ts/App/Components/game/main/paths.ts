import {Info} from "../../../Types/infoType";
import {Node} from "../../../Types/nodeType";
import {Path} from "../../../Types/nodeType";
import {parsingText} from "../../../tools/parsingContent";
import {pathIsValid} from "../rule/validationPath";

export const PathsElement = (paths:Array<Path>) => {
    let render = "";
    const data = require("../../../../../json/paths.json") as Array<Node>;
    for (let index = 0; index < paths.length; index++) {
        if (pathIsValid(paths[index].pathID, index, data)){
        render += `
        <div class="path ${paths[index].pathID}" id="path${index}">
        <div class="a content">
            ${parsingText(paths[index].content)}
        </div>
        <div class="mask"></div>
        <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
        </div><div class="b"></div></div>
    </div>
        `  }
    }
    
    return render;
}
