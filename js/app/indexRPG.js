/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./json/paths.json":
/*!*************************!*\
  !*** ./json/paths.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"parentID":-1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Qui êtes-vous? $close$span$curieux$close$p-narrator$ Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil. Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé. $close$p-narrator$Ou êtes-vous? $close","paths":[{"content":"p-talk-me$Je m\'appelle Tydyus, et toi jeune homme, quel est ton nom? $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Tu n\'as pas remarqué que je dormais le mioche ?! $close$span$énervé$close$p-narrator$Si il y a bien quelque chose que vous n\'appreciez pas c\'est que l\'on vous réveille, ce môme à interet à avoir une bonne excuse.. $close","pathID":1,"tag":"give=hate_1"},{"content":"p-talk-me$deuxieme fois texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=whitelist,marcheur_0"},{"content":"p-talk-me$premiere fois du faux texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=blacklist,marcheur_0"}],"tag":"/"},{"id":1,"parentID":0,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Vous avez fait vos premiers pas, bravo! $close$span$heureux$close$","paths":[{"content":"p-talk-me$C\'est donc çela, marcher ? $close$p-narrator$ Come back. $close","pathID":0,"tag":"/"},{"content":"p-talk-me$node 2 => redirection$close","pathID":2,"tag":"/"}],"tag":"give=marcheur_0"},{"id":2,"parentID":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ redirirection$close$","paths":[{"content":"p-talk-me$node0$close","pathID":0,"tag":"/"},{"content":"p-talk-me$node1$close","pathID":1,"tag":"/"}],"tag":"redirection=whiteList,marcheur_0=3"},{"id":3,"parentID":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ redirigé depuis node 2$close$","paths":[{"content":"p-talk-me$node0$close","pathID":0,"tag":"/"},{"content":"p-talk-me$node1$close","pathID":1,"tag":"/"}],"tag":"redirection=whiteList,marcheur_0=0"}]');

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

/***/ "./ts/App/Components/game/rule/redirection.ts":
/*!****************************************************!*\
  !*** ./ts/App/Components/game/rule/redirection.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.redirection = void 0;
var validationPath_1 = __webpack_require__(/*! ./validationPath */ "./ts/App/Components/game/rule/validationPath.ts");
var needToSee_1 = __webpack_require__(/*! ./needToSee */ "./ts/App/Components/game/rule/needToSee.ts");
var redirection = function (tag, info) {
    var newInfo = info;
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    //regarde si redirection
    if (needToSee_1.needToSee(tag, newInfo)) {
        //regarde vers quel chemin on redirige
        var nodeToGoID = tag[tag.length - 1];
        //informe info
        newInfo.game.node = +nodeToGoID;
        //regarde si event lors de la redirection
        newInfo = validationPath_1.eventOn(newInfo, data[newInfo.game.node].tag, "node");
    }
    return newInfo;
};
exports.redirection = redirection;


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
exports.goToPath = exports.eventOn = exports.pathIsValid = void 0;
var encoding_1 = __webpack_require__(/*! ../../../tools/encoding */ "./ts/App/tools/encoding.ts");
var needToSee_1 = __webpack_require__(/*! ./needToSee */ "./ts/App/Components/game/rule/needToSee.ts");
var giveANDtake_1 = __webpack_require__(/*! ./giveANDtake */ "./ts/App/Components/game/rule/giveANDtake.ts");
var redirection_1 = __webpack_require__(/*! ./redirection */ "./ts/App/Components/game/rule/redirection.ts");
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
            case ("redirection"):
                newInfo = redirection_1.redirection(allTag[i], newInfo);
            default: break;
        }
    }
    return newInfo;
};
exports.eventOn = eventOn;
var goToPath = function (nodeToGoID, indexPath) {
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    if (exports.pathIsValid(nodeToGoID, indexPath, data)) {
        var nameSave = encoding_1.getNameOfUser();
        if (nameSave != "load") {
            //look info
            var info = encoding_1.getInfoFromCookie(nameSave);
            // effet de prise du chemin
            info = exports.eventOn(info, data[info.game.node].paths[indexPath].tag, "path");
            //on informe que le chemin est pris
            info.game.node = nodeToGoID;
            // effet d'arrivé sur le nouveau noeud
            info = exports.eventOn(info, data[info.game.node].tag, "node");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcHJvZmlsL3Byb2ZpbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvZ2l2ZUFORHRha2UudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9ydWxlL25lZWRUb1NlZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvcmVkaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9ydWxlL3Rvb2xzL3Rvb2wudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9ydWxlL3ZhbGlkYXRpb25QYXRoLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2hvbWUvSG9tZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9ob21lL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9sb2FkR2FtZS9sb2FkR2FtZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9sb2FkR2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbG9hZEdhbWUvbWFpbi9zYXZlLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL25ld0dhbWUvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL25ld0dhbWUvbmV3R2FtZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9zZWN0aW9uL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvdG9vbHMvZW5jb2RpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL3Rvb2xzL3BhcnNpbmdDb250ZW50LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi90cy9BcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1R0FBb0Q7QUFDcEQsNkZBQTRDO0FBQzVDLHFHQUFxRDtBQUU5QyxJQUFNLElBQUksR0FBRyxVQUFDLElBQVM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFDdkIseWhCQWlCQztJQUNELE9BQU8sQ0FBQyw2QkFFRixlQUFNLENBQUMsSUFBSSxDQUFDLDZDQUdaLFdBQUksQ0FBQyxJQUFJLENBQUMsNkNBR1YsZUFBTSxFQUFFLDBCQUViLENBQUM7QUFDTixDQUFDO0FBaENZLFlBQUksUUFnQ2hCO0FBRU0sSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFTO0lBQy9CLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsb0JBQVcsRUFBRSxDQUFDO0lBQ2Qsb0JBQVcsRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFKWSxpQkFBUyxhQUlyQjs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Qsd0ZBQW1DO0FBQ25DLDJGQUFxQztBQUVyQyw0SEFBZ0Q7QUFFekMsSUFBTSxJQUFJLEdBQUcsVUFBQyxJQUFTO0lBQzFCLElBQU0sSUFBSSxHQUFHLG1CQUFPLENBQUMseURBQWdDLENBQWdCLENBQUM7SUFDdEUsT0FBTyxvRkFHRCxrQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENB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ZXhSUEcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge1Byb2ZpbCwgZXZlbnRQcm9maWx9IGZyb20gXCIuL3Byb2ZpbC9wcm9maWxcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiO1xyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZm8uZ2FtZS51c2VyLmJhZGdlcyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+w6p0ZXMtdm91cyBzdXIgZGUgY2hvaXNpciBjZSBjaGVtaW4/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgICR7UHJvZmlsKGluZm8pfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oaW5mbyl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oaW5mbyk7XHJcbiAgICBldmVudFByb2ZpbCgpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHNhdmVPbkNvb2tpZSwgZ2V0TmFtZU9mVXNlciwgZW5jb2RpbmcsIHN0cmluZ2lmeURhdGF9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge05vZGVFbGVtZW50fSBmcm9tIFwiLi9ub2RlXCI7XHJcbmltcG9ydCB7UGF0aHNFbGVtZW50fSBmcm9tIFwiLi9wYXRoc1wiO1xyXG5pbXBvcnQge05vZGV9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9ub2RlVHlwZVwiO1xyXG5pbXBvcnQge2dvVG9QYXRofSBmcm9tIFwiLi4vcnVsZS92YWxpZGF0aW9uUGF0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgICAgICR7Tm9kZUVsZW1lbnQoZGF0YVtpbmZvLmdhbWUubm9kZV0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICAke1BhdGhzRWxlbWVudChkYXRhW2luZm8uZ2FtZS5ub2RlXVtcInBhdGhzXCJdKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgLy9vdGhlciBcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFBhdGgoaWQ6c3RyaW5nKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXRoJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGF0aHNbaV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9uRm9jdXNcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QuYWRkKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcENvbmZpcm1QYXRoXCIpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7cGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhbkZvY3VzT25QYXRoKCl7XHJcbiAgICAgICAgdmFyIHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF0aCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdGhcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcGF0aHNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWxpZFBhdGgocGF0aHNbaW5kZXhdLmlkKTsgIFxyXG4gICAgICAgICAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuZm9yRWFjaChjID0+IHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3QucmVtb3ZlKGMpfSApO1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuYWRkKHBhdGhzW2luZGV4XS5jbGFzc0xpc3RbMV0pO1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuYWRkKHBhdGhzW2luZGV4XS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR1cCB2YWxpZGF0aW9uIGV2ZW50XHJcbiAgICBjb25zdCBwb3BVcENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2xvc2UnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBvcFVwQ2hvaWNlTm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VObycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvL3NldCBmdW5jdGlvbiBpbiBldmVudCBvbiBjbGlja1xyXG4gICAgcG9wVXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VOby5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VZZXMuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZ29Ub1BhdGgoK3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdFswXSwgK3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdFsxXS5zcGxpdChcInBhdGhcIilbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbWFqTWFpbiA9IChhY3R1ZWxOb2RlID0gMCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9qc29uL3BhdGhzLmpzb25cIikgYXMgQXJyYXk8Tm9kZT47XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub2RlXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBOb2RlRWxlbWVudChkYXRhW2FjdHVlbE5vZGVdKTtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGhzXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBQYXRoc0VsZW1lbnQoZGF0YVthY3R1ZWxOb2RlXVtcInBhdGhzXCJdKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7cGFyc2luZ1RleHR9IGZyb20gXCIuLi8uLi8uLi90b29scy9wYXJzaW5nQ29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vZGVFbGVtZW50ID0gKG5vZGU6Tm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuYFxyXG4gICAgPGRpdiBjbGFzcz1cImEgZGVjb1wiIGlkPVwibm9kZURlY29cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIGNvbnRlbnRcIiBpZD1cIm5vZGVDb250ZW50XCI+XHJcbiAgICAgICAgJHtwYXJzaW5nVGV4dChub2RlLmNvbnRlbnQpfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbi8vIDxwIGNsYXNzPVwidGFsayBucGNcIj5cclxuLy8gICAgIFF1aSDDqnRlcy12b3VzPyBcclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYW5ub3RhdGlvblwiPmN1cmlldXg8L3NwYW4+PC9wPlxyXG4vLyA8cCBjbGFzcz1cIm5hcnJhdG9yXCI+XHJcbi8vICAgICBVbiBqZXVuZSBob21tZSB2b3VzIHJlZ2FyZGUgZGUgaGF1dCB0YW50IGRpcyB2b3VzIHNvcnRleiBkZSBjZSBxdWkgdm91cyBzZW1ibGUgw6p0cmUgdW4gbG9uZyBzb21tZWlsLlxyXG4vLyAgICAgVm9zIGFydGljdWxhdGlvbiBzb250IHRvdXRlIGVuZG9sb3JpcyBldCB1biBtYWwgZGUgY3JhbmUgcGFzc8OpIGNlIHJlc3NlbnQgYXUgZm9uZCBkZSB2b3RyZSBlc3ByaXQgZW1icnVtw6kuXHJcbi8vIDwvcD48cCBjbGFzcz1cIm5hcnJhdG9yXCI+XHJcbi8vICAgICBPdSDDqnRlcy12b3VzPyBcclxuLy8gPC9wPiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7UGF0aH0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7cGFyc2luZ1RleHR9IGZyb20gXCIuLi8uLi8uLi90b29scy9wYXJzaW5nQ29udGVudFwiO1xyXG5pbXBvcnQge3BhdGhJc1ZhbGlkfSBmcm9tIFwiLi4vcnVsZS92YWxpZGF0aW9uUGF0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhzRWxlbWVudCA9IChwYXRoczpBcnJheTxQYXRoPikgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCI7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAocGF0aElzVmFsaWQocGF0aHNbaW5kZXhdLnBhdGhJRCwgaW5kZXgsIGRhdGEpKXtcclxuICAgICAgICByZW5kZXIgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXRoICR7cGF0aHNbaW5kZXhdLnBhdGhJRH1cIiBpZD1cInBhdGgke2luZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgJHtwYXJzaW5nVGV4dChwYXRoc1tpbmRleF0uY29udGVudCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYiBjb25maXJtYXRpb25cIj48ZGl2IGNsYXNzPVwiYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIGAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbCA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiIGlkPVwicHJvZmlsUGljdHVyZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvdG9mLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYlwiIGlkPVwicHJvZmlsSW5mb1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPiR7aW5mby5nYW1lLnVzZXIubmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbE5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYVwiID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hWaWV3QmFkZ2VQcm9maWxcIiBpZD1cImNoZWNrYm94Vmlld0JhZGdlUHJvZmlsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hEZWNvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYlwiID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkXCI+PC9kaXY+XHJcbiAgICBgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50UHJvZmlsID0gKCkgPT4ge1xyXG5cclxufSIsImltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge3NldEJhZGdlVXNlcnRvRGF0YSwgc2V0RGF0YXRvQmFkZ2VVc2VyfSBmcm9tIFwiLi90b29scy90b29sXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdpdmUgPSAodGFnOkFycmF5PHN0cmluZz4sIGluZm86SW5mbykgPT4ge1xyXG4gICAgbGV0IG5ld0luZm8gPSBpbmZvO1xyXG4gICAgbGV0IGJhZGdlVXNlcj0gc2V0QmFkZ2VVc2VydG9EYXRhKG5ld0luZm8pO1xyXG4gICAgZm9yIChsZXQgaT0gMTsgaSA8IHRhZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGJhZGdlVXNlcltcImJhZGdlc1wiXS5pbmNsdWRlcyh0YWdbaV0uc3BsaXQoXCJfXCIpWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYmFkZ2VVc2VyW1wiYmFkZ2VzXCJdLmluZGV4T2YodGFnW2ldLnNwbGl0KFwiX1wiKVswXSlcclxuICAgICAgICAgICAgYmFkZ2VVc2VyW1wiYmFkZ2VzTmJyXCJdW2luZGV4XSArPSArdGFnW2ldLnNwbGl0KFwiX1wiKVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhZGdlVXNlcltcImJhZGdlc1wiXS5wdXNoKHRhZ1tpXS5zcGxpdChcIl9cIilbMF0pO1xyXG4gICAgICAgICAgICBiYWRnZVVzZXJbXCJiYWRnZXNOYnJcIl0ucHVzaCgrdGFnW2ldLnNwbGl0KFwiX1wiKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV3SW5mby5nYW1lLnVzZXIuYmFkZ2VzID0gc2V0RGF0YXRvQmFkZ2VVc2VyKGJhZGdlVXNlcik7XHJcbiAgICByZXR1cm4gbmV3SW5mbztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRha2UgPSAodGFnOkFycmF5PHN0cmluZz4sIGluZm86SW5mbykgPT4ge1xyXG4gICAgbGV0IG5ld0luZm8gPSBpbmZvO1xyXG4gICAgbGV0IGJhZGdlVXNlcj0gc2V0QmFkZ2VVc2VydG9EYXRhKG5ld0luZm8pOyAgXHJcbiAgICBjb25zb2xlLmxvZyh0YWcpO1xyXG4gICAgcmV0dXJuIG5ld0luZm87XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQge0luZm8sIEJhZGdlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtzZXRCYWRnZVVzZXJ0b0RhdGF9IGZyb20gXCIuL3Rvb2xzL3Rvb2xcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBuZWVkVG9TZWUgPSAobmVlZEJydXRlOkFycmF5PHN0cmluZz4saW5mbzpJbmZvKTpib29sZWFuID0+IHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAvL2RhdGFcclxuICAgIGxldCBydWxlczogQXJyYXk8e3R5cGU6c3RyaW5nLGJhZGdlczpBcnJheTxzdHJpbmc+LCBiYWRnZXNOYnI6QXJyYXk8bnVtYmVyPn0+ID0gW11cclxuICAgIGxldCBiYWRnZVVzZXIgPSBzZXRCYWRnZVVzZXJ0b0RhdGEoaW5mbyk7XHJcbiAgICBcclxuICAgIC8vc2V0IHJ1bGVcclxuICAgIGZvciAobGV0IHJ1bGVJbmRleCA9IDE7IHJ1bGVJbmRleCA8IG5lZWRCcnV0ZS5sZW5ndGg7IHJ1bGVJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGI6QXJyYXk8c3RyaW5nPiA9IFtdXHJcbiAgICAgICAgbGV0IGJOYnI6QXJyYXk8bnVtYmVyPiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuZWVkQnJ1dGVbcnVsZUluZGV4XS5zcGxpdChcIixcIikubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYi5wdXNoKG5lZWRCcnV0ZVtydWxlSW5kZXhdLnNwbGl0KFwiLFwiKVtpXS5zcGxpdChcIl9cIilbMF0pO1xyXG4gICAgICAgICAgICBiTmJyLnB1c2goK25lZWRCcnV0ZVtydWxlSW5kZXhdLnNwbGl0KFwiLFwiKVtpXS5zcGxpdChcIl9cIilbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBydWxlcy5wdXNoKHt0eXBlOm5lZWRCcnV0ZVtydWxlSW5kZXhdLnNwbGl0KFwiLFwiKVswXSxiYWRnZXM6YixiYWRnZXNOYnI6Yk5icn0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25mcm9udGUgcnVsZSB3aXRoIGJhZGdlVXNlclxyXG4gICAgZm9yIChsZXQgcnVsZUluZGV4ID0gMDsgcnVsZUluZGV4IDwgcnVsZXMubGVuZ3RoOyBydWxlSW5kZXgrKykge1xyXG4gICAgICAgIHN3aXRjaChydWxlc1tydWxlSW5kZXhdLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlKFwid2hpdGVsaXN0XCIpOlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlc1tydWxlSW5kZXhdLmJhZGdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVXNlci5iYWRnZXMuaW5jbHVkZXMocnVsZXNbcnVsZUluZGV4XS5iYWRnZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc1tydWxlSW5kZXhdLmJhZGdlc05icltpXSA+IGJhZGdlVXNlci5iYWRnZXNOYnJbYmFkZ2VVc2VyLmJhZGdlcy5pbmRleE9mKHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzW2ldKV0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsaWQgPSBmYWxzZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbGlkID0gZmFsc2UpIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJibGFja2xpc3RcIik6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VVc2VyLmJhZGdlcy5pbmNsdWRlcyhydWxlc1tydWxlSW5kZXhdLmJhZGdlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc1tydWxlSW5kZXhdLmJhZGdlc05icltpXSA8PSBiYWRnZVVzZXIuYmFkZ2VzTmJyW2JhZGdlVXNlci5iYWRnZXMuaW5kZXhPZihydWxlc1tydWxlSW5kZXhdLmJhZGdlc1tpXSldIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbGlkID0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtldmVudE9ufSBmcm9tIFwiLi92YWxpZGF0aW9uUGF0aFwiO1xyXG5pbXBvcnQge25lZWRUb1NlZX0gZnJvbSBcIi4vbmVlZFRvU2VlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0aW9uID0gKHRhZzpBcnJheTxzdHJpbmc+LCBpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBuZXdJbmZvID0gaW5mbztcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG5cclxuICAgIC8vcmVnYXJkZSBzaSByZWRpcmVjdGlvblxyXG4gICAgaWYgKG5lZWRUb1NlZSh0YWcsIG5ld0luZm8pKXtcclxuICAgICAgICAvL3JlZ2FyZGUgdmVycyBxdWVsIGNoZW1pbiBvbiByZWRpcmlnZVxyXG4gICAgICAgIGxldCBub2RlVG9Hb0lEID0gdGFnW3RhZy5sZW5ndGgtMV07XHJcbiAgICAgICAgLy9pbmZvcm1lIGluZm9cclxuICAgICAgICBuZXdJbmZvLmdhbWUubm9kZSA9ICtub2RlVG9Hb0lEO1xyXG4gICAgICAgIC8vcmVnYXJkZSBzaSBldmVudCBsb3JzIGRlIGxhIHJlZGlyZWN0aW9uXHJcbiAgICAgICAgbmV3SW5mbyA9IGV2ZW50T24obmV3SW5mbywgZGF0YVtuZXdJbmZvLmdhbWUubm9kZV0udGFnLFwibm9kZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3SW5mbztcclxufSIsImltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi8uLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuLy90b29sIHVzZXIgYmFkZ2VcclxuZXhwb3J0IGNvbnN0IHNldEJhZGdlVXNlcnRvRGF0YSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBiYWRnZVVzZXI6e2JhZGdlczpBcnJheTxzdHJpbmc+LCBiYWRnZXNOYnI6QXJyYXk8bnVtYmVyPn0gPSB7YmFkZ2VzOltdLGJhZGdlc05icjpbXX1cclxuICAgIC8vc2V0IGJhZGdlIHVzZXJcclxuICAgIGluZm8uZ2FtZS51c2VyLmJhZGdlcy5tYXAoYiA9PiB7XHJcbiAgICAgICAgYmFkZ2VVc2VyLmJhZGdlcy5wdXNoKGIubmFtZSk7XHJcbiAgICAgICAgYmFkZ2VVc2VyLmJhZGdlc05ici5wdXNoKGIubmJyKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYmFkZ2VVc2VyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBzZXREYXRhdG9CYWRnZVVzZXIgPSAoRGF0YVVzZXI6e2JhZGdlczpBcnJheTxzdHJpbmc+LCBiYWRnZXNOYnI6QXJyYXk8bnVtYmVyPn0pID0+IHtcclxuICAgIGxldCBiYWRnZVVzZXI6IEFycmF5PEJhZGdlPiA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IERhdGFVc2VyLmJhZGdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICBiYWRnZVVzZXIucHVzaCh7bmFtZTpEYXRhVXNlci5iYWRnZXNbaV0sIG5icjpEYXRhVXNlci5iYWRnZXNOYnJbaV19KTtcclxuICAgIH0gcmV0dXJuIGJhZGdlVXNlcjtcclxufSIsImltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIGdldE5hbWVPZlVzZXIsIHNhdmVPbkNvb2tpZSwgc3RyaW5naWZ5RGF0YSwgZW5jb2RpbmcsIGRlY29kaW5nLCBwYXJzZURhdGF9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge0luZm8sIEJhZGdlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtuZWVkVG9TZWV9IGZyb20gXCIuL25lZWRUb1NlZVwiO1xyXG5pbXBvcnQge2dpdmUsIHRha2V9IGZyb20gXCIuL2dpdmVBTkR0YWtlXCI7XHJcbmltcG9ydCB7cmVkaXJlY3Rpb259IGZyb20gXCIuL3JlZGlyZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGF0aElzVmFsaWQgPSAobm9kZVRvR29JRDpudW1iZXIsIGluZGV4UGF0aDpudW1iZXIsIGRhdGE6QXJyYXk8Tm9kZT4pOmJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShnZXROYW1lT2ZVc2VyKCkpO1xyXG4gICAgXHJcbiAgICAvL3BhcmFtZXRyZSBkZSBwcsOpVsOpcmlmXHJcbiAgICBsZXQgb2sgPSBmYWxzZTtcclxuICAgIC8vY2hlbWluIGV4aXN0YW50IGRhbnMgbGUgbm9ldWQgYWN0dWVsXHJcbiAgICBpZiAodmFsaWQpe1xyXG4gICAgZGF0YVtpbmZvLmdhbWUubm9kZV0ucGF0aHNbaW5kZXhQYXRoXS5wYXRoSUQgPT0gbm9kZVRvR29JRCAmJiAob2sgPSB0cnVlKTtcclxuICAgICFvayYmICh2YWxpZCA9IGZhbHNlKTtcclxuICAgIC8vIXZhbGlkJiYgY29uc29sZS5sb2coXCJjaGVtaW4gbm9uIGV4aXN0YW50XCIpXHJcbiAgICB9IG9rID0gZmFsc2UgLy9yZXNldCBwcsOpLXbDqXJpZlxyXG5cclxuICAgIC8vXHJcbiAgICBpZiAodmFsaWQpe1xyXG4gICAgICAgIHBhcnNlVGFnQmFzaWMoZGF0YVtpbmZvLmdhbWUubm9kZV0ucGF0aHNbaW5kZXhQYXRoXS50YWcpLmZvckVhY2godGFnID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9rPXRydWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCh0YWdbMF0pe1xyXG4gICAgICAgICAgICAgICAgY2FzZShcIm5lZWRUb1NlZVwiKTpcclxuICAgICAgICAgICAgICAgICAgICBuZWVkVG9TZWUodGFnLGluZm8pIHx8IChvaz1mYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OmJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAhb2smJiAodmFsaWQgPSBmYWxzZSlcclxuICAgICAgICAvLyF2YWxpZCYmIGNvbnNvbGUubG9nKFwiY2hlbWluIGhvcnMgbmVlZFwiKVxyXG4gICAgfSBvayA9IGZhbHNlIC8vcmVzZXQgcHLDqS12w6lyaWZcclxuICAgIC8vXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudE9uID0gKGluZm86SW5mbyx0YWdzOnN0cmluZywgdHlwZTpcIm5vZGVcInxcInBhdGhcIikgPT4ge1xyXG4gICAgbGV0IG5ld0luZm8gPSBpbmZvO1xyXG4gICAgY29uc3QgYWxsVGFnID0gcGFyc2VUYWdCYXNpYyh0YWdzKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3dpdGNoKGFsbFRhZ1tpXVswXSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnaXZlXCIpOlxyXG4gICAgICAgICAgICAgICAgbmV3SW5mbyA9IGdpdmUoYWxsVGFnW2ldLG5ld0luZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJ0YWtlXCIpOlxyXG4gICAgICAgICAgICAgICAgbmV3SW5mbyA9IHRha2UoYWxsVGFnW2ldLG5ld0luZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJyZWRpcmVjdGlvblwiKTpcclxuICAgICAgICAgICAgICAgIG5ld0luZm8gPSByZWRpcmVjdGlvbihhbGxUYWdbaV0sbmV3SW5mbyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0luZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnb1RvUGF0aCA9IChub2RlVG9Hb0lEOm51bWJlciwgaW5kZXhQYXRoOm51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9qc29uL3BhdGhzLmpzb25cIikgYXMgQXJyYXk8Tm9kZT47XHJcbiAgICBpZiAocGF0aElzVmFsaWQobm9kZVRvR29JRCxpbmRleFBhdGgsIGRhdGEpKSB7XHJcbiAgICAgICAgbGV0IG5hbWVTYXZlID0gZ2V0TmFtZU9mVXNlcigpO1xyXG4gICAgICAgIGlmIChuYW1lU2F2ZSE9IFwibG9hZFwiKXtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vayBpbmZvXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gZ2V0SW5mb0Zyb21Db29raWUobmFtZVNhdmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gZWZmZXQgZGUgcHJpc2UgZHUgY2hlbWluXHJcbiAgICAgICAgICAgIGluZm8gPSBldmVudE9uKGluZm8sIGRhdGFbaW5mby5nYW1lLm5vZGVdLnBhdGhzW2luZGV4UGF0aF0udGFnLFwicGF0aFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vb24gaW5mb3JtZSBxdWUgbGUgY2hlbWluIGVzdCBwcmlzXHJcbiAgICAgICAgICAgIGluZm8uZ2FtZS5ub2RlID0gbm9kZVRvR29JRDtcclxuXHJcbiAgICAgICAgICAgIC8vIGVmZmV0IGQnYXJyaXbDqSBzdXIgbGUgbm91dmVhdSBub2V1ZFxyXG4gICAgICAgICAgICBpbmZvID0gZXZlbnRPbihpbmZvLCBkYXRhW2luZm8uZ2FtZS5ub2RlXS50YWcsXCJub2RlXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9lbnJlZ2lzdHJlIG1vZGlmaWNhdGlvblxyXG4gICAgICAgICAgICBzYXZlT25Db29raWUobmFtZVNhdmUsaW5mbyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YD91c2VyPSR7bmFtZVNhdmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7Y29uc29sZS5lcnJvcihcIm5vbSBkJ3VzZXIgaW5jb25udVwiKTt9XHJcbiAgICB9IGVsc2Uge2NvbnNvbGUuZXJyb3IoXCJjaGVtaW4gbm9uIHZhbGlkZVwiKTt9XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlVGFnQmFzaWMgPSAodGFnczpzdHJpbmcpID0+IHtcclxuICAgIGxldCBhbGxUYWdzIDogQXJyYXk8QXJyYXk8c3RyaW5nPj4gPSBbXTtcclxuICAgIGxldCB0YWcgOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICB0YWdzLnNwbGl0KFwiJFwiKS5tYXAodCA9PiB7XHJcbiAgICAgICAgdGFnID0gW107XHJcbiAgICAgICAgdC5zcGxpdChcIj1cIikubWFwKHRsID0+IHRhZy5wdXNoKHRsKSk7XHJcbiAgICAgICAgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFsbFRhZ3NcclxufVxyXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCJcclxuaW1wb3J0IHtGb290ZXIsIGV2ZW50Rm9vdGVyfSBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZXh0UG9wVXBcIj5DaGFyZ2VyIGxhIHBhcnRpZT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbigpfVxyXG4gICAgPC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICAke0Zvb3RlcigpfVxyXG4gICAgPC9mb290ZXI+XHJcbiAgICBgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRIb21lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZXZlbnRNYWluKCk7XHJcbiAgICBldmVudEZvb3RlcigpO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgcGFyc2VEYXRhLCBkZWNvZGluZ30gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5vZGVcIj5cclxuICAgICAgICBob21lXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJwYXRoc1wiPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoKSA9PiB7XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiXHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkR2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInRleHRQb3BVcFwiPkNoYXJnZXIgbGEgcGFydGllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKCl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudExvYWRHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZXZlbnRNYWluKCk7XHJcbiAgICBldmVudEZvb3RlcigpO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgcGFyc2VEYXRhLCBkZWNvZGluZ30gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcbmltcG9ydCB7U2F2ZX0gZnJvbSBcIi4vc2F2ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJub2RlXCI+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cInBhdGhzXCI+XHJcbiAgICAgICAgJHtTYXZlKCl9XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSBcclxuZXhwb3J0IGNvbnN0IGV2ZW50TWFpbiA9ICgpID0+IHtcclxuICAgIC8vb3RoZXIgXHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRQYXRoKGlkOnN0cmluZyl7XHJcbiAgICAgICAgdmFyIHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZFNhdmUnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoc1tpXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25Gb2N1c1wiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5hZGQoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwQ29uZmlybVBhdGhcIikgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuRm9jdXNPblBhdGgoKXtcclxuICAgICAgICB2YXIgbG9hZFNhdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZFNhdmUnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvYWRTYXZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsb2FkU2F2ZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvYWRTYXZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb2FkU2F2ZVwiKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2FkU2F2ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbG9hZFNhdmVzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsaWRQYXRoKGxvYWRTYXZlc1tpbmRleF0uaWQpOyAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcFVwQ2hvaWNlWWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlWWVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5mb3JFYWNoKGMgPT4ge3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5yZW1vdmUoYyl9ICk7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5hZGQobG9hZFNhdmVzW2luZGV4XS5jbGFzc0xpc3RbMl0pO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFBvcFVwXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAobG9hZFNhdmVzW2luZGV4XS5jbGFzc0xpc3RbMl0gPT0gXCJuZXdHYW1lXCIpXHJcbiAgICAgICAgICAgICAgICB0ZXh0LmlubmVySFRNTCA9IFwiQ29tbWVuY2VyIHVuZSBub3V2ZWxsZSBwYXJ0aWU/XCI7XHJcbiAgICAgICAgICAgIGVsc2UgdGV4dC5pbm5lckhUTUwgPSBgQ2hhcmdlciBsYSBwYXJ0aWUgXCIke2xvYWRTYXZlc1tpbmRleF0uY2xhc3NMaXN0WzJdfVwiID9gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dXAgdmFsaWRhdGlvbiBldmVudFxyXG4gICAgY29uc3QgcG9wVXBDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENsb3NlJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZU5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlTm8nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBvcFVwQ2hvaWNlWWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlWWVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy9zZXQgZnVuY3Rpb24gaW4gZXZlbnQgb24gY2xpY2tcclxuICAgIHBvcFVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDb25maXJtUGF0aCcpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjbGVhbkZvY3VzT25QYXRoKClcclxuICAgICAgICB9KTtcclxuICAgIHBvcFVwQ2hvaWNlTm8uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDb25maXJtUGF0aCcpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjbGVhbkZvY3VzT25QYXRoKClcclxuICAgICAgICB9KTtcclxuICAgIHBvcFVwQ2hvaWNlWWVzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YD91c2VyPSR7cG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzBdfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBtYWpNYWluID0gKGFjdHVlbE5vZGUgPSAwKSA9PiB7XHJcbiAgICBcclxufSIsImV4cG9ydCBjb25zdCBTYXZlID0gKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCI7XHJcbiAgICBsZXQgc2F2ZUJydXQ6IEFycmF5PHN0cmluZz47XHJcbiAgICBpZiAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCI7XCIpICE9PSAtMSlcclxuICAgICAgICB7c2F2ZUJydXQgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO31cclxuICAgIGVsc2Uge3NhdmVCcnV0ID0gW2RvY3VtZW50LmNvb2tpZV07fVxyXG4gICAgbGV0IHNhdmU6IEFycmF5PHtuYW1lOnN0cmluZyxkYXRhOnN0cmluZ30+ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVCcnV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2F2ZS5wdXNoKHsgbmFtZTpzYXZlQnJ1dFtpXS5zcGxpdChcIj1cIilbMF0gLCBkYXRhOnNhdmVCcnV0W2ldLnNwbGl0KFwiPVwiKVsxXSB9KTtcclxuICAgICAgICBpZiAoc2F2ZVtpXS5uYW1lICE9IFwibG9hZFwiKXtcclxuICAgICAgICByZW5kZXIgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXRoIGxvYWRTYXZlICR7c2F2ZVtpXS5uYW1lfVwiIGlkPVwicGF0aCR7aX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgJHtzYXZlW2ldLm5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYiBjb25maXJtYXRpb25cIj48ZGl2IGNsYXNzPVwiYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYH1cclxuICAgIH1cclxuICAgIHJlbmRlciArPSBcclxuICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF0aCBsb2FkU2F2ZSBuZXdHYW1lXCIgaWQ9XCJuZXdwYXRoXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIE5PVVZFTExFIFBBUlRJRVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImIgY29uZmlybWF0aW9uXCI+PGRpdiBjbGFzcz1cImFcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge3NhdmVPbkNvb2tpZSwgcGFyc2VEYXRhLCBnZXROYW1lT2ZVc2VyfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibmV3R2FtZUJnU3RvcnlcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInRhbGsgbnBjXCI+QmllbnZlbnVlPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibmFycmF0b3JcIj5jb250ZXh0ZSBkZSBsJ2hpc3RvaXJlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwiZm9ybU5ld0dhbWVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5Ob3V2ZWxsZSBwYXJ0aWU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiRk5HbmFtZVwiIHBsYWNlaG9sZGVyPVwibm9tIGR1IHBlcnNvbm5hZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJGTkdlcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIkZOR3N1Ym1pdFwiPkNvbW1lbmNlciBsJ2F2ZW50dXJlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSBcclxuZXhwb3J0IGNvbnN0IGV2ZW50TWFpbiA9ICgpID0+IHtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZOR3N1Ym1pdFwiKSBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG5ld0dhbWUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdHYW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IGVycm9yID0gXCJcIjtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZOR25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmKCEvXlthLXpBLVpdLy50ZXN0KG5hbWUudmFsdWUpIHx8IG5hbWUudmFsdWUubGVuZ3RoIDwgMikgIHtlcnJvciA9IFwibm9tIGludmFsaWRlXCI7fVxyXG4gICAgaWYgKGVycm9yID09IFwiXCIpIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBgcGFnZT1nYW1lIWdhbWVVc2VyTmFtZT0ke25hbWUudmFsdWV9IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MGA7XHJcbiAgICAgICAgc2F2ZU9uQ29va2llKG5hbWUudmFsdWUsIHBhcnNlRGF0YShkYXRhKSk7XHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gP3VzZXI9JHtuYW1lLnZhbHVlfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGTkdlcnJvclwiKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiY29sb3I6cmVkXCI+JHtlcnJvcn08L3A+YDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCJcclxuaW1wb3J0IHtGb290ZXIsIGV2ZW50Rm9vdGVyfSBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZXh0UG9wVXBcIj5DaGFyZ2VyIGxhIHBhcnRpZT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbigpfVxyXG4gICAgPC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICAke0Zvb3RlcigpfVxyXG4gICAgPC9mb290ZXI+XHJcbiAgICBgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnROZXdHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZXZlbnRNYWluKCk7XHJcbiAgICBldmVudEZvb3RlcigpO1xyXG59IiwiaW1wb3J0IHtnZXROYW1lT2ZVc2VyfSBmcm9tIFwiLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuXHJcbiAgICBsZXQgdXNlciA9IGdldE5hbWVPZlVzZXIoKTtcclxuXHJcbiAgICByZW5kZXIgKz0gXHJcbiAgICBgPGRpdiBjbGFzcz1cImFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYVwiIGlkPVwiaG9tZU9uRm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCI/XCI+PGkgY2xhc3M9XCJmYXMgZmEtaG9tZVwiPjwvaT48L2E+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJcIiBpZD1cImxvYWRPbkZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiP3VzZXI9bG9hZFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+PC9hPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNcIj48L2Rpdj5gO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50Rm9vdGVyID0gKCkgPT4ge1xyXG4gICAgLy9ldmVudFxyXG59IiwiaW1wb3J0IHtJbmZvLCBCYWRnZX0gZnJvbSBcIi4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgIGVuY29kaW5nID0gKGFzY2lpU3RyaW5nOnN0cmluZykgPT4ge1xyXG4gICAgbGV0IGhleCA9ICcnO1xyXG4gICAgbGV0IHRlbXBBU0NJSSwgdGVtcEhleDtcclxuICAgIGNvbnN0IGFzY2lpQXJyYXkgPSBhc2NpaVN0cmluZy5zcGxpdCgnJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzY2lpQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wQVNDSUkgPSBhc2NpaUFycmF5W2ldLmNoYXJDb2RlQXQoMClcclxuICAgICAgICB0ZW1wSGV4ID0gdGVtcEFTQ0lJLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBoZXggPSBoZXggKyB0ZW1wSGV4O1xyXG4gICAgfVxyXG4gICAgaGV4ID0gaGV4LnRyaW0oKTtcclxuICAgIHJldHVybiBoZXg7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVjb2RpbmcgPSAoaGV4U3RyaW5nOnN0cmluZykgPT4ge1xyXG4gICAgbGV0IHN0cmluZ091dCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZXhTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGhleFN0cmluZ1tpXSArIGhleFN0cmluZ1tpKzFdO1xyXG4gICAgICAgIGxldCB0ZW1wQXNjaWlDb2RlID0gcGFyc2VJbnQoZGF0YSwgMTYpO1xyXG4gICAgICAgIHN0cmluZ091dCA9IHN0cmluZ091dCArIFN0cmluZy5mcm9tQ2hhckNvZGUodGVtcEFzY2lpQ29kZSk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZ091dDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlRGF0YSA9IChkYXRhOnN0cmluZykgPT4ge1xyXG4gICAgbGV0IHJlbmRlcjpJbmZvID0gXHJcbiAgICB7cGFnZTogXCJnYW1lXCIsXHJcbiAgICBnYW1lOiB7XHJcbiAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICAgICAgYmFkZ2VzOltdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub2RlOjBcclxuICAgIH19XHJcbiAgICBkYXRhLnNwbGl0KFwiIVwiKS5tYXAoaSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZT0gaS5zcGxpdChcIj1cIilbMF07XHJcbiAgICAgICAgY29uc3QgZGVmID0gaS5zcGxpdChcIj1cIilbMV07XHJcbiAgICAgICAgc3dpdGNoKG5hbWUpe1xyXG4gICAgICAgICAgICBjYXNlKFwicGFnZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlcltcInBhZ2VcIl0gPSBkZWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImdhbWVVc2VyTmFtZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlcltcImdhbWVcIl1bXCJ1c2VyXCJdW1wibmFtZVwiXSA9IGRlZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2FtZVVzZXJCYWRnZXNcIik6XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFibGU6QXJyYXk8QmFkZ2U+ID0gW107XHJcbiAgICAgICAgICAgICAgICBkZWYuc3BsaXQoXCIsXCIpLm1hcChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWkgPSBpLnNwbGl0KFwiX1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnB1c2goe25hbWU6IGlpWzBdLCBuYnI6ICtpaVsxXX0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcltcImdhbWVcIl1bXCJ1c2VyXCJdW1wiYmFkZ2VzXCJdID0gdGFibGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImdhbWVOb2RlXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wiZ2FtZVwiXVtcIm5vZGVcIl0gPSArZGVmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6YnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdpZnlEYXRhID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgbGV0IGJhZGdlPVwiXCI7XHJcbiAgICBcclxuICAgIGluZm9bXCJnYW1lXCJdW1widXNlclwiXVtcImJhZGdlc1wiXS5tYXAobSA9PiB7XHJcbiAgICAgICAgYmFkZ2UgKz0gYCR7bS5uYW1lfV8ke20ubmJyfSxgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICBiYWRnZSA9IGJhZGdlLnN1YnN0cmluZygwLGJhZGdlLmxlbmd0aC0xKSAvL29uIGVubGV2ZSBsYSB2aXJndWxlIGV4Y2VkZW50YWlyZVxyXG4gICAgbGV0IHJlbmRlciA9IFxyXG4gICAgYHBhZ2U9JHtpbmZvW1wicGFnZVwiXX0hYCtcclxuICAgIGBnYW1lVXNlck5hbWU9JHtpbmZvW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJuYW1lXCJdfSFgK1xyXG4gICAgYGdhbWVVc2VyQmFkZ2VzPSR7YmFkZ2V9IWArXHJcbiAgICBgZ2FtZU5vZGU9JHtpbmZvW1wiZ2FtZVwiXVtcIm5vZGVcIl19IWBcclxuICAgIDtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbmNvbnN0IGNoZW1pbkxvYWQgPSBcInBhZ2U9bG9hZEdhbWUhZ2FtZVVzZXJOYW1lPU5vYm9keSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBcIjtcclxuY29uc3QgY2hlbWluTmV3R2FtZSA9IFwicGFnZT1uZXdHYW1lIWdhbWVVc2VyTmFtZT1Ob2JvZHkhZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wXCI7XHJcbmNvbnN0IGNoZW1pbkhvbWUgPSBcInBhZ2U9aG9tZSFnYW1lVXNlck5hbWU9Tm9ib2R5IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluZm9Gcm9tVXJsID0gKCkgPT4ge1xyXG4gICAgbGV0IGluZm86SW5mbztcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT0gXCJcIj9cclxuICAgIGluZm8gPSBwYXJzZURhdGEoZGVjb2Rpbmcod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj1cIilbMV0pKVxyXG46XHJcbiAgICBpbmZvID0gcGFyc2VEYXRhKGNoZW1pbkxvYWQpO1xyXG4gICAgcmV0dXJuIGluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbmZvRnJvbUNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAobmFtZVNhdmUpe1xyXG4gICAgICAgIGNhc2UoXCJsb2FkXCIpOiAgIHJldHVybiBwYXJzZURhdGEoY2hlbWluTG9hZCk7XHJcbiAgICAgICAgY2FzZShcIm5ld0dhbWVcIik6cmV0dXJuIHBhcnNlRGF0YShjaGVtaW5OZXdHYW1lKTtcclxuICAgICAgICBjYXNlKFwiaG9tZVwiKTogICByZXR1cm4gcGFyc2VEYXRhKGNoZW1pbkhvbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICByZXR1cm4gcGFyc2VEYXRhKGRlY29kaW5nKGAke2RvY3VtZW50LmNvb2tpZX1gLnNwbGl0KGAke25hbWVTYXZlfT1gKVsxXS5zcGxpdChcIjtcIilbMF0pKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVPbkNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcsIHNhdmU6SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZVNhdmV9PSR7KGVuY29kaW5nKHN0cmluZ2lmeURhdGEoc2F2ZSkpKX07IFNhbWVTaXRlPUxheGA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb29raWUgPSAobmFtZVNhdmU6c3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lU2F2ZX09JHsoZW5jb2Rpbmcoc3RyaW5naWZ5RGF0YShnZXRJbmZvRnJvbUNvb2tpZShuYW1lU2F2ZSkpKSl9OyBTYW1lU2l0ZT1MYXg7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEMnYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5hbWVPZlVzZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI/XCIpXHJcbiAgICBmb3IgKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgIGlmKGQuc3BsaXQoXCI9XCIpWzBdID09IFwidXNlclwiKSByZXR1cm4gZC5zcGxpdChcIj1cIilbMV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJob21lXCI7XHJcbn0iLCJleHBvcnQgY29uc3QgcGFyc2luZ1RleHQgPSAodGV4dEZVbGw6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZVRleHQgPSB0ZXh0RlVsbC5zcGxpdChcIiRcIik7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIlxyXG4gICAgZm9yIChsZXQgdGV4dCBvZiBwYXJzZVRleHQpe1xyXG4gICAgICAgIGxldCBtb2R1bGUgPSBcIlwiO1xyXG4gICAgICAgIHN3aXRjaCh0ZXh0LnNwbGl0KFwiLVwiKVswXSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJwXCIpOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjIG9mIHRleHQuc3BsaXQoXCItXCIpKXtjbGFzc05hbWUrPSBjICsgXCIgXCJ9XHJcbiAgICAgICAgICAgICAgICByZW5kZXIgKz0gYDxwIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAke2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIFwiPmA7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGUgPSBcInBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwic3BhblwiKTpcclxuICAgICAgICAgICAgcmVuZGVyKz0gYDxzcGFuIGNsYXNzPVwiYW5ub3RhdGlvblwiPmBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiY2xvc2VcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXIgKz0gYDwvJHttb2R1bGV9PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIGdldE5hbWVPZlVzZXIsIGRlbGV0ZUNvb2tpZSwgc2F2ZU9uQ29va2llLCBwYXJzZURhdGF9IGZyb20gXCIuL3Rvb2xzL2VuY29kaW5nXCJcclxuaW1wb3J0IHtHYW1lLCBldmVudEdhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvZ2FtZS9HYW1lXCI7XHJcbmltcG9ydCB7bG9hZEdhbWUsIGV2ZW50TG9hZEdhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvbG9hZEdhbWUvbG9hZEdhbWVcIjtcclxuaW1wb3J0IHtuZXdHYW1lLCBldmVudE5ld0dhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvbmV3R2FtZS9uZXdHYW1lXCI7XHJcbmltcG9ydCB7SG9tZSwgZXZlbnRIb21lfSBmcm9tIFwiLi9Db21wb25lbnRzL2hvbWUvSG9tZVwiO1xyXG5cclxuLy9nZXQgaW5mb1xyXG5sZXQgaW5mbzpJbmZvO1xyXG5zd2l0Y2goZ2V0TmFtZU9mVXNlcigpKXtcclxuICAgIGNhc2UoXCJsb2FkXCIpOmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShcImxvYWRcIik7YnJlYWs7XHJcbiAgICBjYXNlKFwibmV3R2FtZVwiKTppbmZvID0gZ2V0SW5mb0Zyb21Db29raWUoXCJuZXdHYW1lXCIpO2JyZWFrO1xyXG4gICAgZGVmYXVsdDppbmZvID0gZ2V0SW5mb0Zyb21Db29raWUoZ2V0TmFtZU9mVXNlcigpKTticmVhaztcclxufVxyXG5cclxuLy8gaW5pdCBmdW5jdGlvbiByb290IGNvbnN0dWN0b3JcclxuY29uc3QgQXBwID0gKHBhZ2U6c3RyaW5nKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcclxuICAgIGBcclxuICAgICAgICAke3BhZ2V9XHJcbiAgICBgXHJcbn1cclxuXHJcbi8vd3JpdGUgcGFnZVxyXG5zd2l0Y2goaW5mby5wYWdlKXtcclxuXHJcbiAgICBjYXNlKFwiZ2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2FtZVwiKTtcclxuICAgICAgICBBcHAoR2FtZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnRHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcImxvYWRHYW1lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkR2FtZVwiKTtcclxuICAgICAgICBBcHAobG9hZEdhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50TG9hZEdhbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlKFwibmV3R2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibmV3R2FtZVwiKTtcclxuICAgICAgICBBcHAobmV3R2FtZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnROZXdHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcImhvbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImhvbWVcIik7XHJcbiAgICAgICAgQXBwKEhvbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50SG9tZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OmJyZWFrO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9