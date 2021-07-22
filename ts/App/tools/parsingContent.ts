export const parsingText = (textFUll:string) => {
    const parseText = textFUll.split("$");
    let render = ""
    for (let text of parseText){
        let module = "";
        switch(text.split("-")[0]){
            case("p"):
                let className = "";
                for (let c of text.split("-")){className+= c + " "}
                render += `<p class="
                ${className}
                ">`;
                module = "p";
                break;
            case("span"):
            render+= `<span class="annotation">`
                break;
            case("close"):
                render += `</${module}>`;
                break;
            default:
                render += text;
                break;
        }
    }
    return render;
}