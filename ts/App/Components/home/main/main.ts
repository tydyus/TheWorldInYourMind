export const Main = () => {
    const TwiymData = require("../../../../../json/interface.json") as any;
    return `
    <div class="a"></div>
    <div class="b node" id="mainHome">
        ${(TwiymData["home"]as Array<{"l":string}>).map(ligne => ligne["l"]).join("")}
    </div>
    <div class="c " >
        
    </div>
    `
} 
export const eventMain = () => {

}