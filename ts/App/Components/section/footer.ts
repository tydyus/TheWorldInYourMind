import {getNameOfUser} from "../../tools/encoding";

export const Footer = () => {
    let render = "";

    let user = getNameOfUser();

    render += 
    `<div class="a">
        <div class="a" id="homeOnFooter">
            <a href="?"><i class="fas fa-home"></i></a></div>
        <div class="b" id="loadOnFooter">
            <a href="?user=load"><i class="fas fa-save"></i></a></div>
    </div>
    <div class="b"></div>
    <div class="c"></div>`;
    return render;
}

export const eventFooter = () => {
    //event
}