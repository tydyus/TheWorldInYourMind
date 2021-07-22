export const Save = () => {
    let render = "";
    let saveBrut: Array<string>;
    if (document.cookie.indexOf(";") !== -1)
        {saveBrut = document.cookie.split(";");}
    else {saveBrut = [document.cookie];}
    let save: Array<{name:string,data:string}> = [];
    for (let i = 0; i < saveBrut.length; i++) {
        
        save.push({ name:saveBrut[i].split("=")[0] , data:saveBrut[i].split("=")[1] });
        if (save[i].name != "load"){
        render += `
        <div class="path loadSave ${save[i].name}" id="path${i}">
            <div class="a content">
                ${save[i].name}
            </div>
            <div class="mask"></div>
            <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
            </div><div class="b"></div></div>
        </div>
        `}
    }
    render += 
    `
        <div class="path loadSave newGame" id="newpath">
            <div class="a content">
                NOUVELLE PARTIE
            </div>
            <div class="mask"></div>
            <div class="b confirmation"><div class="a"><i class="fas fa-chevron-right"></i>
            </div><div class="b"></div></div>
        </div>
        `
    return render;
}