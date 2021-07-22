/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./json/paths.json":
/*!*************************!*\
  !*** ./json/paths.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Qui êtes-vous? $close$span$curieux$close$p-narrator$ Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil. Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé. $close$p-narrator$Ou êtes-vous? $close","paths":[{"content":"p-talk-me$Je m\'appelle Tydyus, et toi jeune homme, quel est ton nom? $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Tu n\'as pas remarqué que je dormais le mioche ?! $close$span$énervé$close$p-narrator$Si il y a bien quelque chose que vous n\'appreciez pas c\'est que l\'on vous réveille, ce môme à interet à avoir une bonne excuse.. $close","pathID":1,"tag":"give=hate_1"},{"content":"p-talk-me$deuxieme fois texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=whitelist,marcheur_0"},{"content":"p-talk-me$premiere fois du faux texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=blacklist,marcheur_0"}],"tag":"/"},{"id":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Vous avez fait vos premiers pas, bravo! $close$span$heureux$close$","paths":[{"content":"p-talk-me$C\'est donc çela, marcher ? $close$p-narrator$ Come back. $close","pathID":0,"tag":"/"}],"tag":"give=marcheur_0"}]');

/***/ }),

/***/ "./ts/App/Components/game/Game.ts":
/*!****************************************!*\
  !*** ./ts/App/Components/game/Game.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventGame = exports.Game = void 0;
var profil_1 = __webpack_require__(/*! ./profil/profil */ "./ts/App/Components/game/profil/profil.ts");
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/game/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var Game = function (info) {
    console.log(info.game.user.badges);
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p>\u00EAtes-vous sur de choisir ce chemin?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        " + profil_1.Profil(info) + "\n    </header>\n    <main>\n        " + main_1.Main(info) + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.Game = Game;
var eventGame = function (info) {
    main_1.eventMain(info);
    profil_1.eventProfil();
    footer_1.eventFooter();
};
exports.eventGame = eventGame;


/***/ }),

/***/ "./ts/App/Components/game/main/main.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/game/main/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.majMain = exports.eventMain = exports.Main = void 0;
var node_1 = __webpack_require__(/*! ./node */ "./ts/App/Components/game/main/node.ts");
var paths_1 = __webpack_require__(/*! ./paths */ "./ts/App/Components/game/main/paths.ts");
var validationPath_1 = __webpack_require__(/*! ../rule/validationPath */ "./ts/App/Components/game/rule/validationPath.ts");
var Main = function (info) {
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n        " + node_1.NodeElement(data[info.game.node]) + "\n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        " + paths_1.PathsElement(data[info.game.node]["paths"]) + "\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function (info) {
    //other 
    function validPath(id) {
        var paths = document.getElementsByClassName('path');
        for (var i = 0; i < paths.length; i++) {
            if (paths[i].id == id) {
                if (paths[i].classList.contains("onFocus")) {
                    paths[i].classList.remove("onFocus");
                }
                else {
                    paths[i].classList.add("onFocus");
                    document.getElementById("popUpConfirmPath").classList.remove("hidden");
                }
            }
            else {
                paths[i].classList.remove("onFocus");
            }
        }
    }
    function cleanFocusOnPath() {
        var paths = document.getElementsByClassName('path');
        for (var i = 0; i < paths.length; i++) {
            paths[i].classList.remove("onFocus");
        }
    }
    var paths = document.getElementsByClassName("path");
    var _loop_1 = function (index) {
        paths[index].addEventListener("click", function () {
            validPath(paths[index].id);
            var popUpChoiceYes = document.getElementById('popUpChoiceYes');
            popUpChoiceYes.classList.forEach(function (c) { popUpChoiceYes.classList.remove(c); });
            popUpChoiceYes.classList.add(paths[index].classList[1]);
            popUpChoiceYes.classList.add(paths[index].id);
        });
    };
    for (var index = 0; index < paths.length; index++) {
        _loop_1(index);
    }
    //setup validation event
    var popUpClose = document.getElementById('popUpClose');
    var popUpChoiceNo = document.getElementById('popUpChoiceNo');
    var popUpChoiceYes = document.getElementById('popUpChoiceYes');
    //set function in event on click
    popUpClose.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceNo.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceYes.addEventListener("click", function () {
        validationPath_1.goToPath(+popUpChoiceYes.classList[0], +popUpChoiceYes.classList[1].split("path")[1]);
    });
};
exports.eventMain = eventMain;
var majMain = function (actuelNode) {
    if (actuelNode === void 0) { actuelNode = 0; }
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    document.getElementById("node").innerHTML = node_1.NodeElement(data[actuelNode]);
    document.getElementById("paths").innerHTML = paths_1.PathsElement(data[actuelNode]["paths"]);
};
exports.majMain = majMain;


/***/ }),

/***/ "./ts/App/Components/game/main/node.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/game/main/node.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeElement = void 0;
var parsingContent_1 = __webpack_require__(/*! ../../../tools/parsingContent */ "./ts/App/tools/parsingContent.ts");
var NodeElement = function (node) {
    return "\n    <div class=\"a deco\" id=\"nodeDeco\"></div>\n    <div class=\"b content\" id=\"nodeContent\">\n        " + parsingContent_1.parsingText(node.content) + "\n    </div>\n    ";
};
exports.NodeElement = NodeElement;
// <p class="talk npc">
//     Qui êtes-vous? 
//     <span class="annotation">curieux</span></p>
// <p class="narrator">
//     Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil.
//     Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé.
// </p><p class="narrator">
//     Ou êtes-vous? 
// </p>


/***/ }),

/***/ "./ts/App/Components/game/main/paths.ts":
/*!**********************************************!*\
  !*** ./ts/App/Components/game/main/paths.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PathsElement = void 0;
var parsingContent_1 = __webpack_require__(/*! ../../../tools/parsingContent */ "./ts/App/tools/parsingContent.ts");
var validationPath_1 = __webpack_require__(/*! ../rule/validationPath */ "./ts/App/Components/game/rule/validationPath.ts");
var PathsElement = function (paths) {
    var render = "";
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    for (var index = 0; index < paths.length; index++) {
        if (validationPath_1.pathIsValid(paths[index].pathID, index, data)) {
            render += "\n        <div class=\"path " + paths[index].pathID + "\" id=\"path" + index + "\">\n        <div class=\"a content\">\n            " + parsingContent_1.parsingText(paths[index].content) + "\n        </div>\n        <div class=\"mask\"></div>\n        <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n        </div><div class=\"b\"></div></div>\n    </div>\n        ";
        }
    }
    return render;
};
exports.PathsElement = PathsElement;


/***/ }),

/***/ "./ts/App/Components/game/profil/profil.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/game/profil/profil.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventProfil = exports.Profil = void 0;
var Profil = function (info) {
    return "\n    <div class=\"a\" id=\"profilPicture\">\n        <img src=\"./img/tof.png\" alt=\"\">\n    </div>\n    <div class=\"b\" id=\"profilInfo\">\n        <div>\n            <p>" + info.game.user.name + "</p>\n        </div>\n        <div class=\"profilNav\">\n            <div class=\"a\" >\n                <input type=\"checkbox\" name=\"checkboxViewBadgeProfil\" id=\"checkboxViewBadgeProfil\">\n                <div class=\"checkboxDeco\"></div>\n            </div>\n            <div class=\"b\" ></div>\n        </div>\n    </div>\n    <div class=\"c\"></div>\n    <div class=\"d\"></div>\n    ";
};
exports.Profil = Profil;
var eventProfil = function () {
};
exports.eventProfil = eventProfil;


/***/ }),

/***/ "./ts/App/Components/game/rule/giveANDtake.ts":
/*!****************************************************!*\
  !*** ./ts/App/Components/game/rule/giveANDtake.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.take = exports.give = void 0;
var tool_1 = __webpack_require__(/*! ./tools/tool */ "./ts/App/Components/game/rule/tools/tool.ts");
var give = function (tag, info) {
    var newInfo = info;
    var badgeUser = tool_1.setBadgeUsertoData(newInfo);
    for (var i = 1; i < tag.length; i++) {
        if (badgeUser["badges"].includes(tag[i].split("_")[0])) {
            var index = badgeUser["badges"].indexOf(tag[i].split("_")[0]);
            badgeUser["badgesNbr"][index] += +tag[i].split("_")[1];
        }
        else {
            badgeUser["badges"].push(tag[i].split("_")[0]);
            badgeUser["badgesNbr"].push(+tag[i].split("_")[1]);
        }
    }
    newInfo.game.user.badges = tool_1.setDatatoBadgeUser(badgeUser);
    return newInfo;
};
exports.give = give;
var take = function (tag, info) {
    var newInfo = info;
    var badgeUser = tool_1.setBadgeUsertoData(newInfo);
    console.log(tag);
    return newInfo;
};
exports.take = take;


/***/ }),

/***/ "./ts/App/Components/game/rule/needToSee.ts":
/*!**************************************************!*\
  !*** ./ts/App/Components/game/rule/needToSee.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.needToSee = void 0;
var tool_1 = __webpack_require__(/*! ./tools/tool */ "./ts/App/Components/game/rule/tools/tool.ts");
var needToSee = function (needBrute, info) {
    var valid = true;
    //data
    var rules = [];
    var badgeUser = tool_1.setBadgeUsertoData(info);
    //set rule
    for (var ruleIndex = 1; ruleIndex < needBrute.length; ruleIndex++) {
        var b = [];
        var bNbr = [];
        for (var i = 1; i < needBrute[ruleIndex].split(",").length; i++) {
            b.push(needBrute[ruleIndex].split(",")[i].split("_")[0]);
            bNbr.push(+needBrute[ruleIndex].split(",")[i].split("_")[1]);
        }
        rules.push({ type: needBrute[ruleIndex].split(",")[0], badges: b, badgesNbr: bNbr });
    }
    //confronte rule with badgeUser
    for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
        switch (rules[ruleIndex].type) {
            case ("whitelist"):
                for (var i = 0; i < rules[ruleIndex].badges.length; i++) {
                    badgeUser.badges.includes(rules[ruleIndex].badges[i])
                        ?
                            rules[ruleIndex].badgesNbr[i] > badgeUser.badgesNbr[badgeUser.badges.indexOf(rules[ruleIndex].badges[i])]
                                &&
                                    (valid = false)
                        :
                            (valid = false);
                }
                break;
            case ("blacklist"):
                for (var i = 0; i < rules[ruleIndex].badges.length; i++) {
                    badgeUser.badges.includes(rules[ruleIndex].badges[i])
                        &&
                            rules[ruleIndex].badgesNbr[i] <= badgeUser.badgesNbr[badgeUser.badges.indexOf(rules[ruleIndex].badges[i])]
                        &&
                            (valid = false);
                }
                break;
        }
    }
    return valid;
};
exports.needToSee = needToSee;


/***/ }),

/***/ "./ts/App/Components/game/rule/tools/tool.ts":
/*!***************************************************!*\
  !*** ./ts/App/Components/game/rule/tools/tool.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setDatatoBadgeUser = exports.setBadgeUsertoData = void 0;
//tool user badge
var setBadgeUsertoData = function (info) {
    var badgeUser = { badges: [], badgesNbr: [] };
    //set badge user
    info.game.user.badges.map(function (b) {
        badgeUser.badges.push(b.name);
        badgeUser.badgesNbr.push(b.nbr);
    });
    return badgeUser;
};
exports.setBadgeUsertoData = setBadgeUsertoData;
var setDatatoBadgeUser = function (DataUser) {
    var badgeUser = [];
    for (var i = 0; i < DataUser.badges.length; i++) {
        badgeUser.push({ name: DataUser.badges[i], nbr: DataUser.badgesNbr[i] });
    }
    return badgeUser;
};
exports.setDatatoBadgeUser = setDatatoBadgeUser;


/***/ }),

/***/ "./ts/App/Components/game/rule/validationPath.ts":
/*!*******************************************************!*\
  !*** ./ts/App/Components/game/rule/validationPath.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.goToPath = exports.pathIsValid = void 0;
var encoding_1 = __webpack_require__(/*! ../../../tools/encoding */ "./ts/App/tools/encoding.ts");
var needToSee_1 = __webpack_require__(/*! ./needToSee */ "./ts/App/Components/game/rule/needToSee.ts");
var giveANDtake_1 = __webpack_require__(/*! ./giveANDtake */ "./ts/App/Components/game/rule/giveANDtake.ts");
var pathIsValid = function (nodeToGoID, indexPath, data) {
    var valid = true;
    var info = encoding_1.getInfoFromCookie(encoding_1.getNameOfUser());
    //parametre de préVérif
    var ok = false;
    //chemin existant dans le noeud actuel
    if (valid) {
        data[info.game.node].paths[indexPath].pathID == nodeToGoID && (ok = true);
        !ok && (valid = false);
        //!valid&& console.log("chemin non existant")
    }
    ok = false; //reset pré-vérif
    //
    if (valid) {
        parseTagBasic(data[info.game.node].paths[indexPath].tag).forEach(function (tag) {
            ok = true;
            switch (tag[0]) {
                case ("needToSee"):
                    needToSee_1.needToSee(tag, info) || (ok = false);
                    break;
                default: break;
            }
        });
        !ok && (valid = false);
        //!valid&& console.log("chemin hors need")
    }
    ok = false; //reset pré-vérif
    //
    return valid;
};
exports.pathIsValid = pathIsValid;
var eventOn = function (info, tags, type) {
    var newInfo = info;
    var allTag = parseTagBasic(tags);
    for (var i = 0; i < allTag.length; i++) {
        switch (allTag[i][0]) {
            case ("give"):
                newInfo = giveANDtake_1.give(allTag[i], newInfo);
                break;
            case ("take"):
                newInfo = giveANDtake_1.take(allTag[i], newInfo);
                break;
            default: break;
        }
    }
    return newInfo;
};
var goToPath = function (nodeToGoID, indexPath) {
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    if (exports.pathIsValid(nodeToGoID, indexPath, data)) {
        var nameSave = encoding_1.getNameOfUser();
        if (nameSave != "load") {
            //look info
            var info = encoding_1.getInfoFromCookie(nameSave);
            // effet de prise du chemin
            info = eventOn(info, data[info.game.node].paths[indexPath].tag, "path");
            //on informe que le chemin est pris
            info.game.node = nodeToGoID;
            // effet d'arrivé sur le nouveau noeud
            info = eventOn(info, data[info.game.node].tag, "node");
            //enregistre modification
            encoding_1.saveOnCookie(nameSave, info);
            document.location.href = "?user=" + nameSave;
        }
        else {
            console.error("nom d'user inconnu");
        }
    }
    else {
        console.error("chemin non valide");
    }
};
exports.goToPath = goToPath;
var parseTagBasic = function (tags) {
    var allTags = [];
    var tag = [];
    tags.split("$").map(function (t) {
        tag = [];
        t.split("=").map(function (tl) { return tag.push(tl); });
        allTags.push(tag);
    });
    return allTags;
};


/***/ }),

/***/ "./ts/App/Components/home/Home.ts":
/*!****************************************!*\
  !*** ./ts/App/Components/home/Home.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventHome = exports.Home = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/home/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var Home = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.Home = Home;
var eventHome = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventHome = eventHome;


/***/ }),

/***/ "./ts/App/Components/home/main/main.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/home/main/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventMain = exports.Main = void 0;
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n        home\n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        \n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
};
exports.eventMain = eventMain;


/***/ }),

/***/ "./ts/App/Components/loadGame/loadGame.ts":
/*!************************************************!*\
  !*** ./ts/App/Components/loadGame/loadGame.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventLoadGame = exports.loadGame = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/loadGame/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var loadGame = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.loadGame = loadGame;
var eventLoadGame = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventLoadGame = eventLoadGame;


/***/ }),

/***/ "./ts/App/Components/loadGame/main/main.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/loadGame/main/main.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.majMain = exports.eventMain = exports.Main = void 0;
var save_1 = __webpack_require__(/*! ./save */ "./ts/App/Components/loadGame/main/save.ts");
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n    \n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        " + save_1.Save() + "\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
    //other 
    function validPath(id) {
        var paths = document.getElementsByClassName('loadSave');
        for (var i = 0; i < paths.length; i++) {
            if (paths[i].id == id) {
                if (paths[i].classList.contains("onFocus")) {
                    paths[i].classList.remove("onFocus");
                }
                else {
                    paths[i].classList.add("onFocus");
                    document.getElementById("popUpConfirmPath").classList.remove("hidden");
                }
            }
            else {
                paths[i].classList.remove("onFocus");
            }
        }
    }
    function cleanFocusOnPath() {
        var loadSaves = document.getElementsByClassName('loadSave');
        for (var i = 0; i < loadSaves.length; i++) {
            loadSaves[i].classList.remove("onFocus");
        }
    }
    var loadSaves = document.getElementsByClassName("loadSave");
    var _loop_1 = function (index) {
        loadSaves[index].addEventListener("click", function () {
            validPath(loadSaves[index].id);
            var popUpChoiceYes = document.getElementById('popUpChoiceYes');
            popUpChoiceYes.classList.forEach(function (c) { popUpChoiceYes.classList.remove(c); });
            popUpChoiceYes.classList.add(loadSaves[index].classList[2]);
            var text = document.getElementById("textPopUp");
            if (loadSaves[index].classList[2] == "newGame")
                text.innerHTML = "Commencer une nouvelle partie?";
            else
                text.innerHTML = "Charger la partie \"" + loadSaves[index].classList[2] + "\" ?";
        });
    };
    for (var index = 0; index < loadSaves.length; index++) {
        _loop_1(index);
    }
    //setup validation event
    var popUpClose = document.getElementById('popUpClose');
    var popUpChoiceNo = document.getElementById('popUpChoiceNo');
    var popUpChoiceYes = document.getElementById('popUpChoiceYes');
    //set function in event on click
    popUpClose.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceNo.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceYes.addEventListener("click", function () {
        document.location.href = "?user=" + popUpChoiceYes.classList[0];
    });
};
exports.eventMain = eventMain;
var majMain = function (actuelNode) {
    if (actuelNode === void 0) { actuelNode = 0; }
};
exports.majMain = majMain;


/***/ }),

/***/ "./ts/App/Components/loadGame/main/save.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/loadGame/main/save.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Save = void 0;
var Save = function () {
    var render = "";
    var saveBrut;
    if (document.cookie.indexOf(";") !== -1) {
        saveBrut = document.cookie.split(";");
    }
    else {
        saveBrut = [document.cookie];
    }
    var save = [];
    for (var i = 0; i < saveBrut.length; i++) {
        save.push({ name: saveBrut[i].split("=")[0], data: saveBrut[i].split("=")[1] });
        if (save[i].name != "load") {
            render += "\n        <div class=\"path loadSave " + save[i].name + "\" id=\"path" + i + "\">\n            <div class=\"a content\">\n                " + save[i].name + "\n            </div>\n            <div class=\"mask\"></div>\n            <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n            </div><div class=\"b\"></div></div>\n        </div>\n        ";
        }
    }
    render +=
        "\n        <div class=\"path loadSave newGame\" id=\"newpath\">\n            <div class=\"a content\">\n                NOUVELLE PARTIE\n            </div>\n            <div class=\"mask\"></div>\n            <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n            </div><div class=\"b\"></div></div>\n        </div>\n        ";
    return render;
};
exports.Save = Save;


/***/ }),

/***/ "./ts/App/Components/newGame/main/main.ts":
/*!************************************************!*\
  !*** ./ts/App/Components/newGame/main/main.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newGame = exports.eventMain = exports.Main = void 0;
var encoding_1 = __webpack_require__(/*! ../../../tools/encoding */ "./ts/App/tools/encoding.ts");
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"newGameBgStory\">\n        <p class=\"talk npc\">Bienvenue</p>\n        <p class=\"narrator\">contexte de l'histoire</p>\n    </div>\n    <div class=\"c paths\" id=\"formNewGame\">\n        <div>\n            <p>Nouvelle partie</p>\n            <input type=\"text\" id=\"FNGname\" placeholder=\"nom du personnage\">\n            <span id=\"FNGerror\"></span>\n            <button id=\"FNGsubmit\">Commencer l'aventure</button>\n        </div>\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
    document.getElementById("FNGsubmit")
        .addEventListener("click", function () { return exports.newGame(); });
};
exports.eventMain = eventMain;
var newGame = function () {
    var error = "";
    var name = document.getElementById("FNGname");
    if (!/^[a-zA-Z]/.test(name.value) || name.value.length < 2) {
        error = "nom invalide";
    }
    if (error == "") {
        var data = "page=game!gameUserName=" + name.value + "!gameUserBadges=joueur_0!node=0";
        encoding_1.saveOnCookie(name.value, encoding_1.parseData(data));
        document.location.href = "?user=" + name.value;
    }
    else {
        document.getElementById("FNGerror").innerHTML = "<p style=\"color:red\">" + error + "</p>";
    }
};
exports.newGame = newGame;


/***/ }),

/***/ "./ts/App/Components/newGame/newGame.ts":
/*!**********************************************!*\
  !*** ./ts/App/Components/newGame/newGame.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventNewGame = exports.newGame = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/newGame/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var newGame = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.newGame = newGame;
var eventNewGame = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventNewGame = eventNewGame;


/***/ }),

/***/ "./ts/App/Components/section/footer.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/section/footer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventFooter = exports.Footer = void 0;
var encoding_1 = __webpack_require__(/*! ../../tools/encoding */ "./ts/App/tools/encoding.ts");
var Footer = function () {
    var render = "";
    var user = encoding_1.getNameOfUser();
    render +=
        "<div class=\"a\">\n        <div class=\"a\" id=\"homeOnFooter\">\n            <a href=\"?\"><i class=\"fas fa-home\"></i></a></div>\n        <div class=\"b\" id=\"loadOnFooter\">\n            <a href=\"?user=load\"><i class=\"fas fa-save\"></i></a></div>\n    </div>\n    <div class=\"b\"></div>\n    <div class=\"c\"></div>";
    return render;
};
exports.Footer = Footer;
var eventFooter = function () {
    //event
};
exports.eventFooter = eventFooter;


/***/ }),

/***/ "./ts/App/tools/encoding.ts":
/*!**********************************!*\
  !*** ./ts/App/tools/encoding.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNameOfUser = exports.deleteCookie = exports.saveOnCookie = exports.getInfoFromCookie = exports.getInfoFromUrl = exports.stringifyData = exports.parseData = exports.decoding = exports.encoding = void 0;
var encoding = function (asciiString) {
    var hex = '';
    var tempASCII, tempHex;
    var asciiArray = asciiString.split('');
    for (var i = 0; i < asciiArray.length; i++) {
        tempASCII = asciiArray[i].charCodeAt(0);
        tempHex = tempASCII.toString(16);
        hex = hex + tempHex;
    }
    hex = hex.trim();
    return hex;
};
exports.encoding = encoding;
var decoding = function (hexString) {
    var stringOut = '';
    for (var i = 0; i < hexString.length; i++) {
        var data = hexString[i] + hexString[i + 1];
        var tempAsciiCode = parseInt(data, 16);
        stringOut = stringOut + String.fromCharCode(tempAsciiCode);
        i++;
    }
    return stringOut;
};
exports.decoding = decoding;
var parseData = function (data) {
    var render = { page: "game",
        game: {
            user: {
                name: "",
                badges: []
            },
            node: 0
        } };
    data.split("!").map(function (i) {
        var name = i.split("=")[0];
        var def = i.split("=")[1];
        switch (name) {
            case ("page"):
                render["page"] = def;
                break;
            case ("gameUserName"):
                render["game"]["user"]["name"] = def;
                break;
            case ("gameUserBadges"):
                var table_1 = [];
                def.split(",").map(function (i) {
                    var ii = i.split("_");
                    table_1.push({ name: ii[0], nbr: +ii[1] });
                });
                render["game"]["user"]["badges"] = table_1;
                break;
            case ("gameNode"):
                render["game"]["node"] = +def;
                break;
            default: break;
        }
    });
    return render;
};
exports.parseData = parseData;
var stringifyData = function (info) {
    var badge = "";
    info["game"]["user"]["badges"].map(function (m) {
        badge += m.name + "_" + m.nbr + ",";
    });
    badge = badge.substring(0, badge.length - 1); //on enleve la virgule excedentaire
    var render = "page=" + info["page"] + "!" +
        ("gameUserName=" + info["game"]["user"]["name"] + "!") +
        ("gameUserBadges=" + badge + "!") +
        ("gameNode=" + info["game"]["node"] + "!");
    return render;
};
exports.stringifyData = stringifyData;
var cheminLoad = "page=loadGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var cheminNewGame = "page=newGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var cheminHome = "page=home!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var getInfoFromUrl = function () {
    var info;
    window.location.search != "" ?
        info = exports.parseData(exports.decoding(window.location.search.split("=")[1]))
        :
            info = exports.parseData(cheminLoad);
    return info;
};
exports.getInfoFromUrl = getInfoFromUrl;
var getInfoFromCookie = function (nameSave) {
    switch (nameSave) {
        case ("load"): return exports.parseData(cheminLoad);
        case ("newGame"): return exports.parseData(cheminNewGame);
        case ("home"): return exports.parseData(cheminHome);
        default: return exports.parseData(exports.decoding(("" + document.cookie).split(nameSave + "=")[1].split(";")[0]));
    }
};
exports.getInfoFromCookie = getInfoFromCookie;
var saveOnCookie = function (nameSave, save) {
    document.cookie = nameSave + "=" + (exports.encoding(exports.stringifyData(save))) + "; SameSite=Lax";
};
exports.saveOnCookie = saveOnCookie;
var deleteCookie = function (nameSave) {
    document.cookie = nameSave + "=" + (exports.encoding(exports.stringifyData(exports.getInfoFromCookie(nameSave)))) + "; SameSite=Lax; expires=Thu, 01 Jan 1970 00:00:00 UTC'";
};
exports.deleteCookie = deleteCookie;
var getNameOfUser = function () {
    var data = window.location.search.split("?");
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (d.split("=")[0] == "user")
            return d.split("=")[1];
    }
    return "home";
};
exports.getNameOfUser = getNameOfUser;


/***/ }),

/***/ "./ts/App/tools/parsingContent.ts":
/*!****************************************!*\
  !*** ./ts/App/tools/parsingContent.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsingText = void 0;
var parsingText = function (textFUll) {
    var parseText = textFUll.split("$");
    var render = "";
    for (var _i = 0, parseText_1 = parseText; _i < parseText_1.length; _i++) {
        var text = parseText_1[_i];
        var module_1 = "";
        switch (text.split("-")[0]) {
            case ("p"):
                var className = "";
                for (var _a = 0, _b = text.split("-"); _a < _b.length; _a++) {
                    var c = _b[_a];
                    className += c + " ";
                }
                render += "<p class=\"\n                " + className + "\n                \">";
                module_1 = "p";
                break;
            case ("span"):
                render += "<span class=\"annotation\">";
                break;
            case ("close"):
                render += "</" + module_1 + ">";
                break;
            default:
                render += text;
                break;
        }
    }
    return render;
};
exports.parsingText = parsingText;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./ts/App/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var encoding_1 = __webpack_require__(/*! ./tools/encoding */ "./ts/App/tools/encoding.ts");
var Game_1 = __webpack_require__(/*! ./Components/game/Game */ "./ts/App/Components/game/Game.ts");
var loadGame_1 = __webpack_require__(/*! ./Components/loadGame/loadGame */ "./ts/App/Components/loadGame/loadGame.ts");
var newGame_1 = __webpack_require__(/*! ./Components/newGame/newGame */ "./ts/App/Components/newGame/newGame.ts");
var Home_1 = __webpack_require__(/*! ./Components/home/Home */ "./ts/App/Components/home/Home.ts");
//get info
var info;
switch (encoding_1.getNameOfUser()) {
    case ("load"):
        info = encoding_1.getInfoFromCookie("load");
        break;
    case ("newGame"):
        info = encoding_1.getInfoFromCookie("newGame");
        break;
    default:
        info = encoding_1.getInfoFromCookie(encoding_1.getNameOfUser());
        break;
}
// init function root constuctor
var App = function (page) {
    document.getElementById("root").innerHTML =
        "\n        " + page + "\n    ";
};
//write page
switch (info.page) {
    case ("game"):
        //console.log("game");
        App(Game_1.Game(info));
        Game_1.eventGame(info);
        break;
    case ("loadGame"):
        //console.log("loadGame");
        App(loadGame_1.loadGame(info));
        loadGame_1.eventLoadGame(info);
        break;
    case ("newGame"):
        //console.log("newGame");
        App(newGame_1.newGame(info));
        newGame_1.eventNewGame(info);
        break;
    case ("home"):
        //console.log("home");
        App(Home_1.Home(info));
        Home_1.eventHome(info);
        break;
    default: break;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcHJvZmlsL3Byb2ZpbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvZ2l2ZUFORHRha2UudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9ydWxlL25lZWRUb1NlZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvdG9vbHMvdG9vbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvdmFsaWRhdGlvblBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvaG9tZS9Ib21lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2hvbWUvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL2xvYWRHYW1lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9sb2FkR2FtZS9tYWluL3NhdmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbmV3R2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbmV3R2FtZS9uZXdHYW1lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL3NlY3Rpb24vZm9vdGVyLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC90b29scy9lbmNvZGluZy50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvdG9vbHMvcGFyc2luZ0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3RzL0FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVHQUFvRDtBQUNwRCw2RkFBNEM7QUFDNUMscUdBQXFEO0FBRTlDLElBQU0sSUFBSSxHQUFHLFVBQUMsSUFBUztJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUztRQUN2Qix5aEJBaUJDO0lBQ0QsT0FBTyxDQUFDLDZCQUVGLGVBQU0sQ0FBQyxJQUFJLENBQUMsNkNBR1osV0FBSSxDQUFDLElBQUksQ0FBQyw2Q0FHVixlQUFNLEVBQUUsMEJBRWIsQ0FBQztBQUNOLENBQUM7QUFoQ1ksWUFBSSxRQWdDaEI7QUFFTSxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQVM7SUFDL0IsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixvQkFBVyxFQUFFLENBQUM7SUFDZCxvQkFBVyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUpZLGlCQUFTLGFBSXJCOzs7Ozs7Ozs7Ozs7OztBQ3pDRCx3RkFBbUM7QUFDbkMsMkZBQXFDO0FBRXJDLDRIQUFnRDtBQUV6QyxJQUFNLElBQUksR0FBRyxVQUFDLElBQVM7SUFDMUIsSUFBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyx5REFBZ0MsQ0FBZ0IsQ0FBQztJQUN0RSxPQUFPLG9GQUdELGtCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0VBR2pDLG9CQUFZLENBQUMsSUFBSSxDQUFDLElB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QyxDQUFDO1FBQ25CLE1BQU07SUFDVixLQUFJLENBQUMsTUFBTSxDQUFDO1FBQ1Isc0JBQXNCO1FBQ3RCLEdBQUcsQ0FBQyxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixnQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLE1BQU07SUFFVixPQUFPLENBQUMsT0FBTTtDQUNqQiIsImZpbGUiOiJpbmRleFJQRy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7UHJvZmlsLCBldmVudFByb2ZpbH0gZnJvbSBcIi4vcHJvZmlsL3Byb2ZpbFwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCI7XHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5mby5nYW1lLnVzZXIuYmFkZ2VzKTtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD7DqnRlcy12b3VzIHN1ciBkZSBjaG9pc2lyIGNlIGNoZW1pbj88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgJHtQcm9maWwoaW5mbyl9XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbihpbmZvKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbihpbmZvKTtcclxuICAgIGV2ZW50UHJvZmlsKCk7XHJcbiAgICBldmVudEZvb3RlcigpO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgc2F2ZU9uQ29va2llLCBnZXROYW1lT2ZVc2VyLCBlbmNvZGluZywgc3RyaW5naWZ5RGF0YX0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcbmltcG9ydCB7Tm9kZUVsZW1lbnR9IGZyb20gXCIuL25vZGVcIjtcclxuaW1wb3J0IHtQYXRoc0VsZW1lbnR9IGZyb20gXCIuL3BhdGhzXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7Z29Ub1BhdGh9IGZyb20gXCIuLi9ydWxlL3ZhbGlkYXRpb25QYXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJub2RlXCI+XHJcbiAgICAgICAgJHtOb2RlRWxlbWVudChkYXRhW2luZm8uZ2FtZS5ub2RlXSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJwYXRoc1wiPlxyXG4gICAgICAgICR7UGF0aHNFbGVtZW50KGRhdGFbaW5mby5nYW1lLm5vZGVdW1wicGF0aHNcIl0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICAvL290aGVyIFxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkUGF0aChpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhdGgnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoc1tpXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25Gb2N1c1wiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5hZGQoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwQ29uZmlybVBhdGhcIikgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuRm9jdXNPblBhdGgoKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXRoJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGF0aFwiKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBwYXRoc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbGlkUGF0aChwYXRoc1tpbmRleF0uaWQpOyAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcFVwQ2hvaWNlWWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlWWVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5mb3JFYWNoKGMgPT4ge3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5yZW1vdmUoYyl9ICk7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5hZGQocGF0aHNbaW5kZXhdLmNsYXNzTGlzdFsxXSk7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5hZGQocGF0aHNbaW5kZXhdLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb24gZXZlbnRcclxuICAgIGNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDbG9zZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VObyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZU5vJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vc2V0IGZ1bmN0aW9uIGluIGV2ZW50IG9uIGNsaWNrXHJcbiAgICBwb3BVcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZU5vLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZVllcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBnb1RvUGF0aCgrcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzBdLCArcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzFdLnNwbGl0KFwicGF0aFwiKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBtYWpNYWluID0gKGFjdHVlbE5vZGUgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZGVcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IE5vZGVFbGVtZW50KGRhdGFbYWN0dWVsTm9kZV0pO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aHNcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFBhdGhzRWxlbWVudChkYXRhW2FjdHVlbE5vZGVdW1wicGF0aHNcIl0pO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9kZUVsZW1lbnQgPSAobm9kZTpOb2RlKSA9PiB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8ZGl2IGNsYXNzPVwiYSBkZWNvXCIgaWQ9XCJub2RlRGVjb1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgY29udGVudFwiIGlkPVwibm9kZUNvbnRlbnRcIj5cclxuICAgICAgICAke3BhcnNpbmdUZXh0KG5vZGUuY29udGVudCl9XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuLy8gPHAgY2xhc3M9XCJ0YWxrIG5wY1wiPlxyXG4vLyAgICAgUXVpIMOqdGVzLXZvdXM/IFxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJhbm5vdGF0aW9uXCI+Y3VyaWV1eDwvc3Bhbj48L3A+XHJcbi8vIDxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIFVuIGpldW5lIGhvbW1lIHZvdXMgcmVnYXJkZSBkZSBoYXV0IHRhbnQgZGlzIHZvdXMgc29ydGV6IGRlIGNlIHF1aSB2b3VzIHNlbWJsZSDDqnRyZSB1biBsb25nIHNvbW1laWwuXHJcbi8vICAgICBWb3MgYXJ0aWN1bGF0aW9uIHNvbnQgdG91dGUgZW5kb2xvcmlzIGV0IHVuIG1hbCBkZSBjcmFuZSBwYXNzw6kgY2UgcmVzc2VudCBhdSBmb25kIGRlIHZvdHJlIGVzcHJpdCBlbWJydW3DqS5cclxuLy8gPC9wPjxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIE91IMOqdGVzLXZvdXM/IFxyXG4vLyA8L3A+IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcbmltcG9ydCB7cGF0aElzVmFsaWR9IGZyb20gXCIuLi9ydWxlL3ZhbGlkYXRpb25QYXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF0aHNFbGVtZW50ID0gKHBhdGhzOkFycmF5PFBhdGg+KSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChwYXRoSXNWYWxpZChwYXRoc1tpbmRleF0ucGF0aElELCBpbmRleCwgZGF0YSkpe1xyXG4gICAgICAgIHJlbmRlciArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggJHtwYXRoc1tpbmRleF0ucGF0aElEfVwiIGlkPVwicGF0aCR7aW5kZXh9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImEgY29udGVudFwiPlxyXG4gICAgICAgICAgICAke3BhcnNpbmdUZXh0KHBhdGhzW2luZGV4XS5jb250ZW50KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgYCAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCIgaWQ9XCJwcm9maWxQaWN0dXJlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy90b2YucG5nXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiXCIgaWQ9XCJwcm9maWxJbmZvXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+JHtpbmZvLmdhbWUudXNlci5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsTmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhXCIgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFZpZXdCYWRnZVByb2ZpbFwiIGlkPVwiY2hlY2tib3hWaWV3QmFkZ2VQcm9maWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveERlY29cIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRcIj48L2Rpdj5cclxuICAgIGB9XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRQcm9maWwgPSAoKSA9PiB7XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvLCBCYWRnZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7c2F2ZU9uQ29va2llLCBnZXRJbmZvRnJvbUNvb2tpZX0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCJcclxuaW1wb3J0IHtzZXRCYWRnZVVzZXJ0b0RhdGEsIHNldERhdGF0b0JhZGdlVXNlcn0gZnJvbSBcIi4vdG9vbHMvdG9vbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnaXZlID0gKHRhZzpBcnJheTxzdHJpbmc+LCBpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBuZXdJbmZvID0gaW5mbztcclxuICAgIGxldCBiYWRnZVVzZXI9IHNldEJhZGdlVXNlcnRvRGF0YShuZXdJbmZvKTtcclxuICAgIGZvciAobGV0IGk9IDE7IGkgPCB0YWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihiYWRnZVVzZXJbXCJiYWRnZXNcIl0uaW5jbHVkZXModGFnW2ldLnNwbGl0KFwiX1wiKVswXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGJhZGdlVXNlcltcImJhZGdlc1wiXS5pbmRleE9mKHRhZ1tpXS5zcGxpdChcIl9cIilbMF0pXHJcbiAgICAgICAgICAgIGJhZGdlVXNlcltcImJhZGdlc05iclwiXVtpbmRleF0gKz0gK3RhZ1tpXS5zcGxpdChcIl9cIilbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWRnZVVzZXJbXCJiYWRnZXNcIl0ucHVzaCh0YWdbaV0uc3BsaXQoXCJfXCIpWzBdKTtcclxuICAgICAgICAgICAgYmFkZ2VVc2VyW1wiYmFkZ2VzTmJyXCJdLnB1c2goK3RhZ1tpXS5zcGxpdChcIl9cIilbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5ld0luZm8uZ2FtZS51c2VyLmJhZGdlcyA9IHNldERhdGF0b0JhZGdlVXNlcihiYWRnZVVzZXIpO1xyXG4gICAgcmV0dXJuIG5ld0luZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0YWtlID0gKHRhZzpBcnJheTxzdHJpbmc+LCBpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBuZXdJbmZvID0gaW5mbztcclxuICAgIGxldCBiYWRnZVVzZXI9IHNldEJhZGdlVXNlcnRvRGF0YShuZXdJbmZvKTsgIFxyXG4gICAgY29uc29sZS5sb2codGFnKTtcclxuICAgIHJldHVybiBuZXdJbmZvO1xyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHtJbmZvLCBCYWRnZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7c2V0QmFkZ2VVc2VydG9EYXRhfSBmcm9tIFwiLi90b29scy90b29sXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbmVlZFRvU2VlID0gKG5lZWRCcnV0ZTpBcnJheTxzdHJpbmc+LGluZm86SW5mbyk6Ym9vbGVhbiA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgLy9kYXRhXHJcbiAgICBsZXQgcnVsZXM6IEFycmF5PHt0eXBlOnN0cmluZyxiYWRnZXM6QXJyYXk8c3RyaW5nPiwgYmFkZ2VzTmJyOkFycmF5PG51bWJlcj59PiA9IFtdXHJcbiAgICBsZXQgYmFkZ2VVc2VyID0gc2V0QmFkZ2VVc2VydG9EYXRhKGluZm8pO1xyXG4gICAgXHJcbiAgICAvL3NldCBydWxlXHJcbiAgICBmb3IgKGxldCBydWxlSW5kZXggPSAxOyBydWxlSW5kZXggPCBuZWVkQnJ1dGUubGVuZ3RoOyBydWxlSW5kZXgrKykge1xyXG4gICAgICAgIGxldCBiOkFycmF5PHN0cmluZz4gPSBbXVxyXG4gICAgICAgIGxldCBiTmJyOkFycmF5PG51bWJlcj4gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbmVlZEJydXRlW3J1bGVJbmRleF0uc3BsaXQoXCIsXCIpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGIucHVzaChuZWVkQnJ1dGVbcnVsZUluZGV4XS5zcGxpdChcIixcIilbaV0uc3BsaXQoXCJfXCIpWzBdKTtcclxuICAgICAgICAgICAgYk5ici5wdXNoKCtuZWVkQnJ1dGVbcnVsZUluZGV4XS5zcGxpdChcIixcIilbaV0uc3BsaXQoXCJfXCIpWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcnVsZXMucHVzaCh7dHlwZTpuZWVkQnJ1dGVbcnVsZUluZGV4XS5zcGxpdChcIixcIilbMF0sYmFkZ2VzOmIsYmFkZ2VzTmJyOmJOYnJ9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vY29uZnJvbnRlIHJ1bGUgd2l0aCBiYWRnZVVzZXJcclxuICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDA7IHJ1bGVJbmRleCA8IHJ1bGVzLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcclxuICAgICAgICBzd2l0Y2gocnVsZXNbcnVsZUluZGV4XS50eXBlKXtcclxuICAgICAgICAgICAgY2FzZShcIndoaXRlbGlzdFwiKTpcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXNbcnVsZUluZGV4XS5iYWRnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWRnZVVzZXIuYmFkZ2VzLmluY2x1ZGVzKHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNbcnVsZUluZGV4XS5iYWRnZXNOYnJbaV0gPiBiYWRnZVVzZXIuYmFkZ2VzTmJyW2JhZGdlVXNlci5iYWRnZXMuaW5kZXhPZihydWxlc1tydWxlSW5kZXhdLmJhZGdlc1tpXSldIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbGlkID0gZmFsc2UpIFxyXG4gICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZCA9IGZhbHNlKSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiYmxhY2tsaXN0XCIpOlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlc1tydWxlSW5kZXhdLmJhZGdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVXNlci5iYWRnZXMuaW5jbHVkZXMocnVsZXNbcnVsZUluZGV4XS5iYWRnZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNbcnVsZUluZGV4XS5iYWRnZXNOYnJbaV0gPD0gYmFkZ2VVc2VyLmJhZGdlc05icltiYWRnZVVzZXIuYmFkZ2VzLmluZGV4T2YocnVsZXNbcnVsZUluZGV4XS5iYWRnZXNbaV0pXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZCA9IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG59XHJcbiIsImltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi8uLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuLy90b29sIHVzZXIgYmFkZ2VcclxuZXhwb3J0IGNvbnN0IHNldEJhZGdlVXNlcnRvRGF0YSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBiYWRnZVVzZXI6e2JhZGdlczpBcnJheTxzdHJpbmc+LCBiYWRnZXNOYnI6QXJyYXk8bnVtYmVyPn0gPSB7YmFkZ2VzOltdLGJhZGdlc05icjpbXX1cclxuICAgIC8vc2V0IGJhZGdlIHVzZXJcclxuICAgIGluZm8uZ2FtZS51c2VyLmJhZGdlcy5tYXAoYiA9PiB7XHJcbiAgICAgICAgYmFkZ2VVc2VyLmJhZGdlcy5wdXNoKGIubmFtZSk7XHJcbiAgICAgICAgYmFkZ2VVc2VyLmJhZGdlc05ici5wdXNoKGIubmJyKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYmFkZ2VVc2VyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBzZXREYXRhdG9CYWRnZVVzZXIgPSAoRGF0YVVzZXI6e2JhZGdlczpBcnJheTxzdHJpbmc+LCBiYWRnZXNOYnI6QXJyYXk8bnVtYmVyPn0pID0+IHtcclxuICAgIGxldCBiYWRnZVVzZXI6IEFycmF5PEJhZGdlPiA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IERhdGFVc2VyLmJhZGdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICBiYWRnZVVzZXIucHVzaCh7bmFtZTpEYXRhVXNlci5iYWRnZXNbaV0sIG5icjpEYXRhVXNlci5iYWRnZXNOYnJbaV19KTtcclxuICAgIH0gcmV0dXJuIGJhZGdlVXNlcjtcclxufSIsImltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIGdldE5hbWVPZlVzZXIsIHNhdmVPbkNvb2tpZSwgc3RyaW5naWZ5RGF0YSwgZW5jb2RpbmcsIGRlY29kaW5nLCBwYXJzZURhdGF9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge0luZm8sIEJhZGdlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtuZWVkVG9TZWV9IGZyb20gXCIuL25lZWRUb1NlZVwiO1xyXG5pbXBvcnQge2dpdmUsIHRha2V9IGZyb20gXCIuL2dpdmVBTkR0YWtlXCJcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRoSXNWYWxpZCA9IChub2RlVG9Hb0lEOm51bWJlciwgaW5kZXhQYXRoOm51bWJlciwgZGF0YTpBcnJheTxOb2RlPik6Ym9vbGVhbiA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgY29uc3QgaW5mbyA9IGdldEluZm9Gcm9tQ29va2llKGdldE5hbWVPZlVzZXIoKSk7XHJcbiAgICBcclxuICAgIC8vcGFyYW1ldHJlIGRlIHByw6lWw6lyaWZcclxuICAgIGxldCBvayA9IGZhbHNlO1xyXG4gICAgLy9jaGVtaW4gZXhpc3RhbnQgZGFucyBsZSBub2V1ZCBhY3R1ZWxcclxuICAgIGlmICh2YWxpZCl7XHJcbiAgICBkYXRhW2luZm8uZ2FtZS5ub2RlXS5wYXRoc1tpbmRleFBhdGhdLnBhdGhJRCA9PSBub2RlVG9Hb0lEICYmIChvayA9IHRydWUpO1xyXG4gICAgIW9rJiYgKHZhbGlkID0gZmFsc2UpO1xyXG4gICAgLy8hdmFsaWQmJiBjb25zb2xlLmxvZyhcImNoZW1pbiBub24gZXhpc3RhbnRcIilcclxuICAgIH0gb2sgPSBmYWxzZSAvL3Jlc2V0IHByw6ktdsOpcmlmXHJcblxyXG4gICAgLy9cclxuICAgIGlmICh2YWxpZCl7XHJcbiAgICAgICAgcGFyc2VUYWdCYXNpYyhkYXRhW2luZm8uZ2FtZS5ub2RlXS5wYXRoc1tpbmRleFBhdGhdLnRhZykuZm9yRWFjaCh0YWcgPT4geyAgICAgICAgICBcclxuICAgICAgICAgICAgb2s9dHJ1ZTtcclxuICAgICAgICAgICAgc3dpdGNoKHRhZ1swXSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlKFwibmVlZFRvU2VlXCIpOlxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRUb1NlZSh0YWcsaW5mbykgfHwgKG9rPWZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICFvayYmICh2YWxpZCA9IGZhbHNlKVxyXG4gICAgICAgIC8vIXZhbGlkJiYgY29uc29sZS5sb2coXCJjaGVtaW4gaG9ycyBuZWVkXCIpXHJcbiAgICB9IG9rID0gZmFsc2UgLy9yZXNldCBwcsOpLXbDqXJpZlxyXG4gICAgLy9cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuY29uc3QgZXZlbnRPbiA9IChpbmZvOkluZm8sdGFnczpzdHJpbmcsIHR5cGU6XCJub2RlXCJ8XCJwYXRoXCIpID0+IHtcclxuICAgIGxldCBuZXdJbmZvID0gaW5mbztcclxuICAgIGNvbnN0IGFsbFRhZyA9IHBhcnNlVGFnQmFzaWModGFncyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN3aXRjaChhbGxUYWdbaV1bMF0pe1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2l2ZVwiKTpcclxuICAgICAgICAgICAgICAgIG5ld0luZm8gPSBnaXZlKGFsbFRhZ1tpXSxuZXdJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwidGFrZVwiKTpcclxuICAgICAgICAgICAgICAgIG5ld0luZm8gPSB0YWtlKGFsbFRhZ1tpXSxuZXdJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OmJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXdJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ29Ub1BhdGggPSAobm9kZVRvR29JRDpudW1iZXIsIGluZGV4UGF0aDpudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG4gICAgaWYgKHBhdGhJc1ZhbGlkKG5vZGVUb0dvSUQsaW5kZXhQYXRoLCBkYXRhKSkge1xyXG4gICAgICAgIGxldCBuYW1lU2F2ZSA9IGdldE5hbWVPZlVzZXIoKTtcclxuICAgICAgICBpZiAobmFtZVNhdmUhPSBcImxvYWRcIil7XHJcblxyXG4gICAgICAgICAgICAvL2xvb2sgaW5mb1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGdldEluZm9Gcm9tQ29va2llKG5hbWVTYXZlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGVmZmV0IGRlIHByaXNlIGR1IGNoZW1pblxyXG4gICAgICAgICAgICBpbmZvID0gZXZlbnRPbihpbmZvLCBkYXRhW2luZm8uZ2FtZS5ub2RlXS5wYXRoc1tpbmRleFBhdGhdLnRhZyxcInBhdGhcIik7XHJcblxyXG4gICAgICAgICAgICAvL29uIGluZm9ybWUgcXVlIGxlIGNoZW1pbiBlc3QgcHJpc1xyXG4gICAgICAgICAgICBpbmZvLmdhbWUubm9kZSA9IG5vZGVUb0dvSUQ7XHJcblxyXG4gICAgICAgICAgICAvLyBlZmZldCBkJ2Fycml2w6kgc3VyIGxlIG5vdXZlYXUgbm9ldWRcclxuICAgICAgICAgICAgaW5mbyA9IGV2ZW50T24oaW5mbywgZGF0YVtpbmZvLmdhbWUubm9kZV0udGFnLFwibm9kZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vZW5yZWdpc3RyZSBtb2RpZmljYXRpb25cclxuICAgICAgICAgICAgc2F2ZU9uQ29va2llKG5hbWVTYXZlLGluZm8pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke25hbWVTYXZlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge2NvbnNvbGUuZXJyb3IoXCJub20gZCd1c2VyIGluY29ubnVcIik7fVxyXG4gICAgfSBlbHNlIHtjb25zb2xlLmVycm9yKFwiY2hlbWluIG5vbiB2YWxpZGVcIik7fVxyXG59XHJcblxyXG5jb25zdCBwYXJzZVRhZ0Jhc2ljID0gKHRhZ3M6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgYWxsVGFncyA6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW107XHJcbiAgICBsZXQgdGFnIDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgdGFncy5zcGxpdChcIiRcIikubWFwKHQgPT4ge1xyXG4gICAgICAgIHRhZyA9IFtdO1xyXG4gICAgICAgIHQuc3BsaXQoXCI9XCIpLm1hcCh0bCA9PiB0YWcucHVzaCh0bCkpO1xyXG4gICAgICAgIGFsbFRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBhbGxUYWdzXHJcbn1cclxuIiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiXHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50SG9tZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHBhcnNlRGF0YSwgZGVjb2Rpbmd9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJub2RlXCI+XHJcbiAgICAgICAgaG9tZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZXh0UG9wVXBcIj5DaGFyZ2VyIGxhIHBhcnRpZT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbigpfVxyXG4gICAgPC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICAke0Zvb3RlcigpfVxyXG4gICAgPC9mb290ZXI+XHJcbiAgICBgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRMb2FkR2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHBhcnNlRGF0YSwgZGVjb2Rpbmd9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge1NhdmV9IGZyb20gXCIuL3NhdmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJwYXRoc1wiPlxyXG4gICAgICAgICR7U2F2ZSgpfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoKSA9PiB7XHJcbiAgICAvL290aGVyIFxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkUGF0aChpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRTYXZlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGF0aHNbaV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9uRm9jdXNcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QuYWRkKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcENvbmZpcm1QYXRoXCIpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7cGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhbkZvY3VzT25QYXRoKCl7XHJcbiAgICAgICAgdmFyIGxvYWRTYXZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRTYXZlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2FkU2F2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkU2F2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9hZFNhdmVcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9hZFNhdmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxvYWRTYXZlc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbGlkUGF0aChsb2FkU2F2ZXNbaW5kZXhdLmlkKTsgIFxyXG4gICAgICAgICAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuZm9yRWFjaChjID0+IHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3QucmVtb3ZlKGMpfSApO1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuYWRkKGxvYWRTYXZlc1tpbmRleF0uY2xhc3NMaXN0WzJdKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRQb3BVcFwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGxvYWRTYXZlc1tpbmRleF0uY2xhc3NMaXN0WzJdID09IFwibmV3R2FtZVwiKVxyXG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBcIkNvbW1lbmNlciB1bmUgbm91dmVsbGUgcGFydGllP1wiO1xyXG4gICAgICAgICAgICBlbHNlIHRleHQuaW5uZXJIVE1MID0gYENoYXJnZXIgbGEgcGFydGllIFwiJHtsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXX1cIiA/YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb24gZXZlbnRcclxuICAgIGNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDbG9zZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VObyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZU5vJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vc2V0IGZ1bmN0aW9uIGluIGV2ZW50IG9uIGNsaWNrXHJcbiAgICBwb3BVcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZU5vLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZVllcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdFswXX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbWFqTWFpbiA9IChhY3R1ZWxOb2RlID0gMCkgPT4ge1xyXG4gICAgXHJcbn0iLCJleHBvcnQgY29uc3QgU2F2ZSA9ICgpID0+IHtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiO1xyXG4gICAgbGV0IHNhdmVCcnV0OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiO1wiKSAhPT0gLTEpXHJcbiAgICAgICAge3NhdmVCcnV0ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTt9XHJcbiAgICBlbHNlIHtzYXZlQnJ1dCA9IFtkb2N1bWVudC5jb29raWVdO31cclxuICAgIGxldCBzYXZlOiBBcnJheTx7bmFtZTpzdHJpbmcsZGF0YTpzdHJpbmd9PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlQnJ1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmUucHVzaCh7IG5hbWU6c2F2ZUJydXRbaV0uc3BsaXQoXCI9XCIpWzBdICwgZGF0YTpzYXZlQnJ1dFtpXS5zcGxpdChcIj1cIilbMV0gfSk7XHJcbiAgICAgICAgaWYgKHNhdmVbaV0ubmFtZSAhPSBcImxvYWRcIil7XHJcbiAgICAgICAgcmVuZGVyICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF0aCBsb2FkU2F2ZSAke3NhdmVbaV0ubmFtZX1cIiBpZD1cInBhdGgke2l9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7c2F2ZVtpXS5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImIgY29uZmlybWF0aW9uXCI+PGRpdiBjbGFzcz1cImFcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKz0gXHJcbiAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggbG9hZFNhdmUgbmV3R2FtZVwiIGlkPVwibmV3cGF0aFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYSBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBOT1VWRUxMRSBQQVJUSUVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtzYXZlT25Db29raWUsIHBhcnNlRGF0YSwgZ2V0TmFtZU9mVXNlcn0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5ld0dhbWVCZ1N0b3J5XCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YWxrIG5wY1wiPkJpZW52ZW51ZTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm5hcnJhdG9yXCI+Y29udGV4dGUgZGUgbCdoaXN0b2lyZTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cImZvcm1OZXdHYW1lXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+Tm91dmVsbGUgcGFydGllPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkZOR25hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbSBkdSBwZXJzb25uYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiRk5HZXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJGTkdzdWJtaXRcIj5Db21tZW5jZXIgbCdhdmVudHVyZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGTkdzdWJtaXRcIikgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcclxuICAgIGxldCBlcnJvciA9IFwiXCI7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGTkduYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZighL15bYS16QS1aXS8udGVzdChuYW1lLnZhbHVlKSB8fCBuYW1lLnZhbHVlLmxlbmd0aCA8IDIpICB7ZXJyb3IgPSBcIm5vbSBpbnZhbGlkZVwiO31cclxuICAgIGlmIChlcnJvciA9PSBcIlwiKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYHBhZ2U9Z2FtZSFnYW1lVXNlck5hbWU9JHtuYW1lLnZhbHVlfSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBgO1xyXG4gICAgICAgIHNhdmVPbkNvb2tpZShuYW1lLnZhbHVlLCBwYXJzZURhdGEoZGF0YSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YD91c2VyPSR7bmFtZS52YWx1ZX1gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5HZXJyb3JcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImNvbG9yOnJlZFwiPiR7ZXJyb3J9PC9wPmA7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiXHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TmV3R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7Z2V0TmFtZU9mVXNlcn0gZnJvbSBcIi4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHVzZXIgPSBnZXROYW1lT2ZVc2VyKCk7XHJcblxyXG4gICAgcmVuZGVyICs9IFxyXG4gICAgYDxkaXYgY2xhc3M9XCJhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFcIiBpZD1cImhvbWVPbkZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiP1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgaWQ9XCJsb2FkT25Gb290ZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIj91c2VyPWxvYWRcIj48aSBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjXCI+PC9kaXY+YDtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEZvb3RlciA9ICgpID0+IHtcclxuICAgIC8vZXZlbnRcclxufSIsImltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBlbmNvZGluZyA9IChhc2NpaVN0cmluZzpzdHJpbmcpID0+IHtcclxuICAgIGxldCBoZXggPSAnJztcclxuICAgIGxldCB0ZW1wQVNDSUksIHRlbXBIZXg7XHJcbiAgICBjb25zdCBhc2NpaUFycmF5ID0gYXNjaWlTdHJpbmcuc3BsaXQoJycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc2NpaUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcEFTQ0lJID0gYXNjaWlBcnJheVtpXS5jaGFyQ29kZUF0KDApXHJcbiAgICAgICAgdGVtcEhleCA9IHRlbXBBU0NJSS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaGV4ID0gaGV4ICsgdGVtcEhleDtcclxuICAgIH1cclxuICAgIGhleCA9IGhleC50cmltKCk7XHJcbiAgICByZXR1cm4gaGV4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlY29kaW5nID0gKGhleFN0cmluZzpzdHJpbmcpID0+IHtcclxuICAgIGxldCBzdHJpbmdPdXQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4U3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBoZXhTdHJpbmdbaV0gKyBoZXhTdHJpbmdbaSsxXTtcclxuICAgICAgICBsZXQgdGVtcEFzY2lpQ29kZSA9IHBhcnNlSW50KGRhdGEsIDE2KTtcclxuICAgICAgICBzdHJpbmdPdXQgPSBzdHJpbmdPdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRlbXBBc2NpaUNvZGUpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdPdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZURhdGEgPSAoZGF0YTpzdHJpbmcpID0+IHtcclxuICAgIGxldCByZW5kZXI6SW5mbyA9IFxyXG4gICAge3BhZ2U6IFwiZ2FtZVwiLFxyXG4gICAgZ2FtZToge1xyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICBuYW1lOlwiXCIsXHJcbiAgICAgICAgICAgIGJhZGdlczpbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZTowXHJcbiAgICB9fVxyXG4gICAgZGF0YS5zcGxpdChcIiFcIikubWFwKGkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWU9IGkuc3BsaXQoXCI9XCIpWzBdO1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGkuc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKXtcclxuICAgICAgICAgICAgY2FzZShcInBhZ2VcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJwYWdlXCJdID0gZGVmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lVXNlck5hbWVcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1widXNlclwiXVtcIm5hbWVcIl0gPSBkZWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImdhbWVVc2VyQmFkZ2VzXCIpOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlOkFycmF5PEJhZGdlPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGVmLnNwbGl0KFwiLFwiKS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlpID0gaS5zcGxpdChcIl9cIilcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5wdXNoKHtuYW1lOiBpaVswXSwgbmJyOiAraWlbMV19KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1widXNlclwiXVtcImJhZGdlc1wiXSA9IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lTm9kZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlcltcImdhbWVcIl1bXCJub2RlXCJdID0gK2RlZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OmJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5RGF0YSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBiYWRnZT1cIlwiO1xyXG4gICAgXHJcbiAgICBpbmZvW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJiYWRnZXNcIl0ubWFwKG0gPT4ge1xyXG4gICAgICAgIGJhZGdlICs9IGAke20ubmFtZX1fJHttLm5icn0sYDtcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgYmFkZ2UgPSBiYWRnZS5zdWJzdHJpbmcoMCxiYWRnZS5sZW5ndGgtMSkgLy9vbiBlbmxldmUgbGEgdmlyZ3VsZSBleGNlZGVudGFpcmVcclxuICAgIGxldCByZW5kZXIgPSBcclxuICAgIGBwYWdlPSR7aW5mb1tcInBhZ2VcIl19IWArXHJcbiAgICBgZ2FtZVVzZXJOYW1lPSR7aW5mb1tcImdhbWVcIl1bXCJ1c2VyXCJdW1wibmFtZVwiXX0hYCtcclxuICAgIGBnYW1lVXNlckJhZGdlcz0ke2JhZGdlfSFgK1xyXG4gICAgYGdhbWVOb2RlPSR7aW5mb1tcImdhbWVcIl1bXCJub2RlXCJdfSFgXHJcbiAgICA7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5jb25zdCBjaGVtaW5Mb2FkID0gXCJwYWdlPWxvYWRHYW1lIWdhbWVVc2VyTmFtZT1Ob2JvZHkhZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wXCI7XHJcbmNvbnN0IGNoZW1pbk5ld0dhbWUgPSBcInBhZ2U9bmV3R2FtZSFnYW1lVXNlck5hbWU9Tm9ib2R5IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MFwiO1xyXG5jb25zdCBjaGVtaW5Ib21lID0gXCJwYWdlPWhvbWUhZ2FtZVVzZXJOYW1lPU5vYm9keSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbmZvRnJvbVVybCA9ICgpID0+IHtcclxuICAgIGxldCBpbmZvOkluZm87XHJcbiAgICB3aW5kb3cubG9jYXRpb24uc2VhcmNoICE9IFwiXCI/XHJcbiAgICBpbmZvID0gcGFyc2VEYXRhKGRlY29kaW5nKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI9XCIpWzFdKSlcclxuOlxyXG4gICAgaW5mbyA9IHBhcnNlRGF0YShjaGVtaW5Mb2FkKTtcclxuICAgIHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5mb0Zyb21Db29raWUgPSAobmFtZVNhdmU6c3RyaW5nKSA9PiB7XHJcbiAgICBzd2l0Y2ggKG5hbWVTYXZlKXtcclxuICAgICAgICBjYXNlKFwibG9hZFwiKTogICByZXR1cm4gcGFyc2VEYXRhKGNoZW1pbkxvYWQpO1xyXG4gICAgICAgIGNhc2UoXCJuZXdHYW1lXCIpOnJldHVybiBwYXJzZURhdGEoY2hlbWluTmV3R2FtZSk7XHJcbiAgICAgICAgY2FzZShcImhvbWVcIik6ICAgcmV0dXJuIHBhcnNlRGF0YShjaGVtaW5Ib21lKTtcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgcmV0dXJuIHBhcnNlRGF0YShkZWNvZGluZyhgJHtkb2N1bWVudC5jb29raWV9YC5zcGxpdChgJHtuYW1lU2F2ZX09YClbMV0uc3BsaXQoXCI7XCIpWzBdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlT25Db29raWUgPSAobmFtZVNhdmU6c3RyaW5nLCBzYXZlOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWVTYXZlfT0keyhlbmNvZGluZyhzdHJpbmdpZnlEYXRhKHNhdmUpKSl9OyBTYW1lU2l0ZT1MYXhgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ29va2llID0gKG5hbWVTYXZlOnN0cmluZykgPT4ge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZVNhdmV9PSR7KGVuY29kaW5nKHN0cmluZ2lmeURhdGEoZ2V0SW5mb0Zyb21Db29raWUobmFtZVNhdmUpKSkpfTsgU2FtZVNpdGU9TGF4OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDJ2A7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXROYW1lT2ZVc2VyID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiP1wiKVxyXG4gICAgZm9yIChsZXQgZCBvZiBkYXRhKXtcclxuICAgICAgICBpZihkLnNwbGl0KFwiPVwiKVswXSA9PSBcInVzZXJcIikgcmV0dXJuIGQuc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiaG9tZVwiO1xyXG59IiwiZXhwb3J0IGNvbnN0IHBhcnNpbmdUZXh0ID0gKHRleHRGVWxsOnN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VUZXh0ID0gdGV4dEZVbGwuc3BsaXQoXCIkXCIpO1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCJcclxuICAgIGZvciAobGV0IHRleHQgb2YgcGFyc2VUZXh0KXtcclxuICAgICAgICBsZXQgbW9kdWxlID0gXCJcIjtcclxuICAgICAgICBzd2l0Y2godGV4dC5zcGxpdChcIi1cIilbMF0pe1xyXG4gICAgICAgICAgICBjYXNlKFwicFwiKTpcclxuICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyBvZiB0ZXh0LnNwbGl0KFwiLVwiKSl7Y2xhc3NOYW1lKz0gYyArIFwiIFwifVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyICs9IGA8cCBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgJHtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICBcIj5gO1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlID0gXCJwXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcInNwYW5cIik6XHJcbiAgICAgICAgICAgIHJlbmRlcis9IGA8c3BhbiBjbGFzcz1cImFubm90YXRpb25cIj5gXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImNsb3NlXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyICs9IGA8LyR7bW9kdWxlfT5gO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZW5kZXIgKz0gdGV4dDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBnZXROYW1lT2ZVc2VyLCBkZWxldGVDb29raWUsIHNhdmVPbkNvb2tpZSwgcGFyc2VEYXRhfSBmcm9tIFwiLi90b29scy9lbmNvZGluZ1wiXHJcbmltcG9ydCB7R2FtZSwgZXZlbnRHYW1lfSBmcm9tIFwiLi9Db21wb25lbnRzL2dhbWUvR2FtZVwiO1xyXG5pbXBvcnQge2xvYWRHYW1lLCBldmVudExvYWRHYW1lfSBmcm9tIFwiLi9Db21wb25lbnRzL2xvYWRHYW1lL2xvYWRHYW1lXCI7XHJcbmltcG9ydCB7bmV3R2FtZSwgZXZlbnROZXdHYW1lfSBmcm9tIFwiLi9Db21wb25lbnRzL25ld0dhbWUvbmV3R2FtZVwiO1xyXG5pbXBvcnQge0hvbWUsIGV2ZW50SG9tZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9ob21lL0hvbWVcIjtcclxuXHJcbi8vZ2V0IGluZm9cclxubGV0IGluZm86SW5mbztcclxuc3dpdGNoKGdldE5hbWVPZlVzZXIoKSl7XHJcbiAgICBjYXNlKFwibG9hZFwiKTppbmZvID0gZ2V0SW5mb0Zyb21Db29raWUoXCJsb2FkXCIpO2JyZWFrO1xyXG4gICAgY2FzZShcIm5ld0dhbWVcIik6aW5mbyA9IGdldEluZm9Gcm9tQ29va2llKFwibmV3R2FtZVwiKTticmVhaztcclxuICAgIGRlZmF1bHQ6aW5mbyA9IGdldEluZm9Gcm9tQ29va2llKGdldE5hbWVPZlVzZXIoKSk7YnJlYWs7XHJcbn1cclxuXHJcbi8vIGluaXQgZnVuY3Rpb24gcm9vdCBjb25zdHVjdG9yXHJcbmNvbnN0IEFwcCA9IChwYWdlOnN0cmluZykgPT4ge1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXHJcbiAgICBgXHJcbiAgICAgICAgJHtwYWdlfVxyXG4gICAgYFxyXG59XHJcblxyXG4vL3dyaXRlIHBhZ2Vcclxuc3dpdGNoKGluZm8ucGFnZSl7XHJcblxyXG4gICAgY2FzZShcImdhbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdhbWVcIik7XHJcbiAgICAgICAgQXBwKEdhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50R2FtZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UoXCJsb2FkR2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZEdhbWVcIik7XHJcbiAgICAgICAgQXBwKGxvYWRHYW1lKGluZm8pKTtcclxuICAgICAgICBldmVudExvYWRHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcIm5ld0dhbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5ld0dhbWVcIik7XHJcbiAgICAgICAgQXBwKG5ld0dhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50TmV3R2FtZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UoXCJob21lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJob21lXCIpO1xyXG4gICAgICAgIEFwcChIb21lKGluZm8pKTtcclxuICAgICAgICBldmVudEhvbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpicmVhaztcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==