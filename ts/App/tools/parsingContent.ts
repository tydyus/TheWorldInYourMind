export const parsingText = (textFUll:string) => {
    const parseText = textFUll.split("$");
    let render = ""
    let span = false;
    for (let i = 0; i< parseText.length; i++){
        switch(parseText[i].split("-")[0]){
            case("p"):
                let className = "";
                for (let c of parseText[i].split("-")){className+= c + " "}
                render += `<p class="${className}">`;
                break;
            case("span"):
                parseText[i].split("-")[1] == "title"?
                render+= `<span class="title">`:
                render+= `<span class="annotation">`;
                span = true;
                break;
            case("close"):
                span? 
                render += `</span>` :
                render += `</p>`;
                span = false;
                break;
            default:
                render += parseText[i];
                break;
        }
    }
    return render;
}