import {Info} from "../../../Types/infoType";

export const Profil = (info:Info) => {
    return `
    <div class="a" id="profilPicture">
        <img src="./img/tof.png" alt="">
    </div>
    <div class="b" id="profilInfo">
        <div>
            <p>${info.game.user.name}</p>
        </div>
        <div class="profilNav">
            <div class="a" >
                <input type="checkbox" name="checkboxViewBadgeProfil" id="checkboxViewBadgeProfil">
                <div class="checkboxDeco"></div>
            </div>
            <div class="b" ></div>
        </div>
    </div>
    <div class="c"></div>
    <div class="d"></div>
    `}

export const eventProfil = () => {

}