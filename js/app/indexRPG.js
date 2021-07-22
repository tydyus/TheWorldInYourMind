/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./json/paths.json":
/*!*************************!*\
  !*** ./json/paths.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"parentID":-1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Qui êtes-vous? $close$span$curieux$close$p-narrator$ Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil. Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé. $close$p-narrator$Ou êtes-vous? $close","paths":[{"content":"p-talk-me$Je m\'appelle Tydyus, et toi jeune homme, quel est ton nom? $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Tu n\'as pas remarqué que je dormais le mioche ?! $close$span$énervé$close$p-narrator$Si il y a bien quelque chose que vous n\'appreciez pas c\'est que l\'on vous réveille, ce môme à interet à avoir une bonne excuse.. $close","pathID":1,"tag":"give=hate_1"},{"content":"p-talk-me$deuxieme fois texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=whitelist,marcheur_0"},{"content":"p-talk-me$premiere fois du faux texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"needToSee=blacklist,marcheur_0"}],"tag":"/"},{"id":1,"parentID":0,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Vous avez fait vos premiers pas, bravo! $close$span$heureux$close$","paths":[{"content":"p-talk-me$C\'est donc çela, marcher ? $close$p-narrator$ Come back. $close","pathID":0,"tag":"/"},{"content":"p-talk-me$node 2 => redirection$close","pathID":2,"tag":"/"}],"tag":"give=marcheur_0"},{"id":2,"parentID":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ redirirection$close$","paths":[{"content":"p-talk-me$node0$close","pathID":0,"tag":"/"},{"content":"p-talk-me$node1$close","pathID":1,"tag":"/"}],"tag":"redirection=whiteList,marcheur_0=3"},{"id":3,"parentID":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ redirigé depuis node 2$close$","paths":[{"content":"p-talk-me$node0$close","pathID":0,"tag":"/"},{"content":"p-talk-me$node1$close","pathID":1,"tag":"/"}],"tag":"/"}]');

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
var playerProfil_1 = __webpack_require__(/*! ./playerProfil */ "./ts/App/Components/game/main/playerProfil.ts");
var Main = function (info) {
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n        " + node_1.NodeElement(data[info.game.node]) + "\n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        " + paths_1.PathsElement(data[info.game.node]["paths"]) + "\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function (info) {
    //profilPlayer
    playerProfil_1.eventPlayerProfil(info);
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

/***/ "./ts/App/Components/game/main/playerProfil.ts":
/*!*****************************************************!*\
  !*** ./ts/App/Components/game/main/playerProfil.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventPlayerProfil = void 0;
var eventPlayerProfil = function (info) {
    document.body.innerHTML += "<div id=\"profilJoueur\" class=\"hidden\"></div>";
    var profilJoueur = document.getElementById("profilJoueur");
    // switch
    document.getElementById("checkboxViewBadgeProfil")
        .addEventListener("click", function () {
        profilJoueur.classList.contains("hidden") ?
            profilJoueur.classList.remove("hidden")
            : profilJoueur.classList.add("hidden");
    });
    // content
    var badges = info.game.user.badges;
    for (var i = 0; i < badges.length; i++) {
        profilJoueur.innerHTML +=
            "<p>" + badges[i].name + " " + (badges[i].nbr > 0 ? "(" + badges[i].nbr + ")" : "") + "</p>";
    }
};
exports.eventPlayerProfil = eventPlayerProfil;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvbWFpbi9wbGF5ZXJQcm9maWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9wcm9maWwvcHJvZmlsLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcnVsZS9naXZlQU5EdGFrZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvbmVlZFRvU2VlLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcnVsZS9yZWRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvdG9vbHMvdG9vbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL3J1bGUvdmFsaWRhdGlvblBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvaG9tZS9Ib21lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2hvbWUvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL2xvYWRHYW1lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9sb2FkR2FtZS9tYWluL3NhdmUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbmV3R2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbmV3R2FtZS9uZXdHYW1lLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL3NlY3Rpb24vZm9vdGVyLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC90b29scy9lbmNvZGluZy50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvdG9vbHMvcGFyc2luZ0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3RzL0FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVHQUFvRDtBQUNwRCw2RkFBNEM7QUFDNUMscUdBQXFEO0FBRTlDLElBQU0sSUFBSSxHQUFHLFVBQUMsSUFBUztJQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFDdkIseWhCQWlCQztJQUNELE9BQU8sQ0FBQyw2QkFFRixlQUFNLENBQUMsSUFBSSxDQUFDLDZDQUdaLFdBQUksQ0FBQyxJQUFJLENBQUMsNkNBR1YsZUFBTSxFQUFFLDBCQUViLENBQUM7QUFDTixDQUFDO0FBL0JZLFlBQUksUUErQmhCO0FBRU0sSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFTO0lBQy9CLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsb0JBQVcsRUFBRSxDQUFDO0lBQ2Qsb0JBQVcsRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFKWSxpQkFBUyxhQUlyQjs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Qsd0ZBQW1DO0FBQ25DLDJGQUFxQztBQUVyQyw0SEFBZ0Q7QUFDaEQsZ0hBQWdEO0FBRXpDLElBQU0sSUFBSSxHQUFHLFVBQUMsSUFBUztJQUMxQixJQUFNLElBQUksR0FBRyxtQkFBTyxDQUFDLHlEQUFnQyxDQUFnQixDQUFDO0lBQ3RFLE9BQU8sb0ZBR0Qsa0JBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxD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LFNBQVMsQ0FBQyxDQUFDO1FBQUEsTUFBTTtJQUMxRDtRQUFRLElBQUksR0FBRyw0QkFBaUIsQ0FBQyx3QkFBYSxFQUFFLENBQUMsQ0FBQztRQUFBLE1BQU07Q0FDM0Q7QUFFRCxnQ0FBZ0M7QUFDaEMsSUFBTSxHQUFHLEdBQUcsVUFBQyxJQUFXO0lBQ25CLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFpQixDQUFDLFNBQVM7UUFDMUQsZUFDTSxJQUFJLFdBQ1Q7QUFDTCxDQUFDO0FBRUQsWUFBWTtBQUNaLFFBQU8sSUFBSSxDQUFDLElBQUksRUFBQztJQUViLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDUixzQkFBc0I7UUFDdEIsR0FBRyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsTUFBTTtJQUNWLEtBQUksQ0FBQyxVQUFVLENBQUM7UUFDWiwwQkFBMEI7UUFDMUIsR0FBRyxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQix3QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU07SUFDVixLQUFJLENBQUMsU0FBUyxDQUFDO1FBQ1gseUJBQXlCO1FBQ3pCLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkIsc0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixNQUFNO0lBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNSLHNCQUFzQjtRQUN0QixHQUFHLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixNQUFNO0lBRVYsT0FBTyxDQUFDLE9BQU07Q0FDakIiLCJmaWxlIjoiaW5kZXhSUEcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge1Byb2ZpbCwgZXZlbnRQcm9maWx9IGZyb20gXCIuL3Byb2ZpbC9wcm9maWxcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiO1xyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD7DqnRlcy12b3VzIHN1ciBkZSBjaG9pc2lyIGNlIGNoZW1pbj88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgJHtQcm9maWwoaW5mbyl9XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbihpbmZvKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbihpbmZvKTtcclxuICAgIGV2ZW50UHJvZmlsKCk7XHJcbiAgICBldmVudEZvb3RlcigpO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgc2F2ZU9uQ29va2llLCBnZXROYW1lT2ZVc2VyLCBlbmNvZGluZywgc3RyaW5naWZ5RGF0YX0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcbmltcG9ydCB7Tm9kZUVsZW1lbnR9IGZyb20gXCIuL25vZGVcIjtcclxuaW1wb3J0IHtQYXRoc0VsZW1lbnR9IGZyb20gXCIuL3BhdGhzXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7Z29Ub1BhdGh9IGZyb20gXCIuLi9ydWxlL3ZhbGlkYXRpb25QYXRoXCI7XHJcbmltcG9ydCB7ZXZlbnRQbGF5ZXJQcm9maWx9IGZyb20gXCIuL3BsYXllclByb2ZpbFwiXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJub2RlXCI+XHJcbiAgICAgICAgJHtOb2RlRWxlbWVudChkYXRhW2luZm8uZ2FtZS5ub2RlXSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJwYXRoc1wiPlxyXG4gICAgICAgICR7UGF0aHNFbGVtZW50KGRhdGFbaW5mby5nYW1lLm5vZGVdW1wicGF0aHNcIl0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICAvL3Byb2ZpbFBsYXllclxyXG4gICAgZXZlbnRQbGF5ZXJQcm9maWwoaW5mbyk7XHJcbiAgICAvL290aGVyIFxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkUGF0aChpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhdGgnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoc1tpXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25Gb2N1c1wiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5hZGQoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwQ29uZmlybVBhdGhcIikgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuRm9jdXNPblBhdGgoKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXRoJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGF0aFwiKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBwYXRoc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbGlkUGF0aChwYXRoc1tpbmRleF0uaWQpOyAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcFVwQ2hvaWNlWWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlWWVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5mb3JFYWNoKGMgPT4ge3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5yZW1vdmUoYyl9ICk7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5hZGQocGF0aHNbaW5kZXhdLmNsYXNzTGlzdFsxXSk7XHJcbiAgICAgICAgICAgIHBvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdC5hZGQocGF0aHNbaW5kZXhdLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb24gZXZlbnRcclxuICAgIGNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDbG9zZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VObyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZU5vJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vc2V0IGZ1bmN0aW9uIGluIGV2ZW50IG9uIGNsaWNrXHJcbiAgICBwb3BVcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZU5vLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZVllcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBnb1RvUGF0aCgrcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzBdLCArcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzFdLnNwbGl0KFwicGF0aFwiKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBtYWpNYWluID0gKGFjdHVlbE5vZGUgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZGVcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IE5vZGVFbGVtZW50KGRhdGFbYWN0dWVsTm9kZV0pO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aHNcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFBhdGhzRWxlbWVudChkYXRhW2FjdHVlbE5vZGVdW1wicGF0aHNcIl0pO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9kZUVsZW1lbnQgPSAobm9kZTpOb2RlKSA9PiB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8ZGl2IGNsYXNzPVwiYSBkZWNvXCIgaWQ9XCJub2RlRGVjb1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgY29udGVudFwiIGlkPVwibm9kZUNvbnRlbnRcIj5cclxuICAgICAgICAke3BhcnNpbmdUZXh0KG5vZGUuY29udGVudCl9XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuLy8gPHAgY2xhc3M9XCJ0YWxrIG5wY1wiPlxyXG4vLyAgICAgUXVpIMOqdGVzLXZvdXM/IFxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJhbm5vdGF0aW9uXCI+Y3VyaWV1eDwvc3Bhbj48L3A+XHJcbi8vIDxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIFVuIGpldW5lIGhvbW1lIHZvdXMgcmVnYXJkZSBkZSBoYXV0IHRhbnQgZGlzIHZvdXMgc29ydGV6IGRlIGNlIHF1aSB2b3VzIHNlbWJsZSDDqnRyZSB1biBsb25nIHNvbW1laWwuXHJcbi8vICAgICBWb3MgYXJ0aWN1bGF0aW9uIHNvbnQgdG91dGUgZW5kb2xvcmlzIGV0IHVuIG1hbCBkZSBjcmFuZSBwYXNzw6kgY2UgcmVzc2VudCBhdSBmb25kIGRlIHZvdHJlIGVzcHJpdCBlbWJydW3DqS5cclxuLy8gPC9wPjxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIE91IMOqdGVzLXZvdXM/IFxyXG4vLyA8L3A+IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcbmltcG9ydCB7cGF0aElzVmFsaWR9IGZyb20gXCIuLi9ydWxlL3ZhbGlkYXRpb25QYXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF0aHNFbGVtZW50ID0gKHBhdGhzOkFycmF5PFBhdGg+KSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vanNvbi9wYXRocy5qc29uXCIpIGFzIEFycmF5PE5vZGU+O1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChwYXRoSXNWYWxpZChwYXRoc1tpbmRleF0ucGF0aElELCBpbmRleCwgZGF0YSkpe1xyXG4gICAgICAgIHJlbmRlciArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggJHtwYXRoc1tpbmRleF0ucGF0aElEfVwiIGlkPVwicGF0aCR7aW5kZXh9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImEgY29udGVudFwiPlxyXG4gICAgICAgICAgICAke3BhcnNpbmdUZXh0KHBhdGhzW2luZGV4XS5jb250ZW50KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgYCAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRQbGF5ZXJQcm9maWwgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBgPGRpdiBpZD1cInByb2ZpbEpvdWV1clwiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+YDtcclxuICAgIGNvbnN0IHByb2ZpbEpvdWV1ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsSm91ZXVyXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgXHJcbiAgICAvLyBzd2l0Y2hcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94Vmlld0JhZGdlUHJvZmlsXCIpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9maWxKb3VldXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpP1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsSm91ZXVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcclxuICAgICAgICAgICAgICAgIDpwcm9maWxKb3VldXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjb250ZW50XHJcbiAgICBjb25zdCBiYWRnZXMgPSBpbmZvLmdhbWUudXNlci5iYWRnZXM7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHByb2ZpbEpvdWV1ci5pbm5lckhUTUwgKz1cclxuICAgICAgICBgPHA+JHtiYWRnZXNbaV0ubmFtZX0gJHtiYWRnZXNbaV0ubmJyID4gMD8gYCgke2JhZGdlc1tpXS5uYnJ9KWA6XCJcIn08L3A+YFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCIgaWQ9XCJwcm9maWxQaWN0dXJlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy90b2YucG5nXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiXCIgaWQ9XCJwcm9maWxJbmZvXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+JHtpbmZvLmdhbWUudXNlci5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsTmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhXCIgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFZpZXdCYWRnZVByb2ZpbFwiIGlkPVwiY2hlY2tib3hWaWV3QmFkZ2VQcm9maWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveERlY29cIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRcIj48L2Rpdj5cclxuICAgIGB9XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRQcm9maWwgPSAoKSA9PiB7XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvLCBCYWRnZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7c2V0QmFkZ2VVc2VydG9EYXRhLCBzZXREYXRhdG9CYWRnZVVzZXJ9IGZyb20gXCIuL3Rvb2xzL3Rvb2xcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2l2ZSA9ICh0YWc6QXJyYXk8c3RyaW5nPiwgaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBsZXQgbmV3SW5mbyA9IGluZm87XHJcbiAgICBsZXQgYmFkZ2VVc2VyPSBzZXRCYWRnZVVzZXJ0b0RhdGEobmV3SW5mbyk7XHJcbiAgICBmb3IgKGxldCBpPSAxOyBpIDwgdGFnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoYmFkZ2VVc2VyW1wiYmFkZ2VzXCJdLmluY2x1ZGVzKHRhZ1tpXS5zcGxpdChcIl9cIilbMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBiYWRnZVVzZXJbXCJiYWRnZXNcIl0uaW5kZXhPZih0YWdbaV0uc3BsaXQoXCJfXCIpWzBdKVxyXG4gICAgICAgICAgICBiYWRnZVVzZXJbXCJiYWRnZXNOYnJcIl1baW5kZXhdICs9ICt0YWdbaV0uc3BsaXQoXCJfXCIpWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFkZ2VVc2VyW1wiYmFkZ2VzXCJdLnB1c2godGFnW2ldLnNwbGl0KFwiX1wiKVswXSk7XHJcbiAgICAgICAgICAgIGJhZGdlVXNlcltcImJhZGdlc05iclwiXS5wdXNoKCt0YWdbaV0uc3BsaXQoXCJfXCIpWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdJbmZvLmdhbWUudXNlci5iYWRnZXMgPSBzZXREYXRhdG9CYWRnZVVzZXIoYmFkZ2VVc2VyKTtcclxuICAgIHJldHVybiBuZXdJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGFrZSA9ICh0YWc6QXJyYXk8c3RyaW5nPiwgaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBsZXQgbmV3SW5mbyA9IGluZm87XHJcbiAgICBsZXQgYmFkZ2VVc2VyPSBzZXRCYWRnZVVzZXJ0b0RhdGEobmV3SW5mbyk7ICBcclxuICAgIGNvbnNvbGUubG9nKHRhZyk7XHJcbiAgICByZXR1cm4gbmV3SW5mbztcclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge05vZGV9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9ub2RlVHlwZVwiO1xyXG5pbXBvcnQge3NldEJhZGdlVXNlcnRvRGF0YX0gZnJvbSBcIi4vdG9vbHMvdG9vbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5lZWRUb1NlZSA9IChuZWVkQnJ1dGU6QXJyYXk8c3RyaW5nPixpbmZvOkluZm8pOmJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuICAgIC8vZGF0YVxyXG4gICAgbGV0IHJ1bGVzOiBBcnJheTx7dHlwZTpzdHJpbmcsYmFkZ2VzOkFycmF5PHN0cmluZz4sIGJhZGdlc05icjpBcnJheTxudW1iZXI+fT4gPSBbXVxyXG4gICAgbGV0IGJhZGdlVXNlciA9IHNldEJhZGdlVXNlcnRvRGF0YShpbmZvKTtcclxuICAgIFxyXG4gICAgLy9zZXQgcnVsZVxyXG4gICAgZm9yIChsZXQgcnVsZUluZGV4ID0gMTsgcnVsZUluZGV4IDwgbmVlZEJydXRlLmxlbmd0aDsgcnVsZUluZGV4KyspIHtcclxuICAgICAgICBsZXQgYjpBcnJheTxzdHJpbmc+ID0gW11cclxuICAgICAgICBsZXQgYk5icjpBcnJheTxudW1iZXI+ID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5lZWRCcnV0ZVtydWxlSW5kZXhdLnNwbGl0KFwiLFwiKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiLnB1c2gobmVlZEJydXRlW3J1bGVJbmRleF0uc3BsaXQoXCIsXCIpW2ldLnNwbGl0KFwiX1wiKVswXSk7XHJcbiAgICAgICAgICAgIGJOYnIucHVzaCgrbmVlZEJydXRlW3J1bGVJbmRleF0uc3BsaXQoXCIsXCIpW2ldLnNwbGl0KFwiX1wiKVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bGVzLnB1c2goe3R5cGU6bmVlZEJydXRlW3J1bGVJbmRleF0uc3BsaXQoXCIsXCIpWzBdLGJhZGdlczpiLGJhZGdlc05icjpiTmJyfSlcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbmZyb250ZSBydWxlIHdpdGggYmFkZ2VVc2VyXHJcbiAgICBmb3IgKGxldCBydWxlSW5kZXggPSAwOyBydWxlSW5kZXggPCBydWxlcy5sZW5ndGg7IHJ1bGVJbmRleCsrKSB7XHJcbiAgICAgICAgc3dpdGNoKHJ1bGVzW3J1bGVJbmRleF0udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJ3aGl0ZWxpc3RcIik6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VVc2VyLmJhZGdlcy5pbmNsdWRlcyhydWxlc1tydWxlSW5kZXhdLmJhZGdlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzTmJyW2ldID4gYmFkZ2VVc2VyLmJhZGdlc05icltiYWRnZVVzZXIuYmFkZ2VzLmluZGV4T2YocnVsZXNbcnVsZUluZGV4XS5iYWRnZXNbaV0pXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWxpZCA9IGZhbHNlKSBcclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsaWQgPSBmYWxzZSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImJsYWNrbGlzdFwiKTpcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVsZXNbcnVsZUluZGV4XS5iYWRnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWRnZVVzZXIuYmFkZ2VzLmluY2x1ZGVzKHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzTmJyW2ldIDw9IGJhZGdlVXNlci5iYWRnZXNOYnJbYmFkZ2VVc2VyLmJhZGdlcy5pbmRleE9mKHJ1bGVzW3J1bGVJbmRleF0uYmFkZ2VzW2ldKV0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsaWQgPSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge05vZGV9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9ub2RlVHlwZVwiO1xyXG5pbXBvcnQge2V2ZW50T259IGZyb20gXCIuL3ZhbGlkYXRpb25QYXRoXCI7XHJcbmltcG9ydCB7bmVlZFRvU2VlfSBmcm9tIFwiLi9uZWVkVG9TZWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3Rpb24gPSAodGFnOkFycmF5PHN0cmluZz4sIGluZm86SW5mbykgPT4ge1xyXG4gICAgbGV0IG5ld0luZm8gPSBpbmZvO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9qc29uL3BhdGhzLmpzb25cIikgYXMgQXJyYXk8Tm9kZT47XHJcblxyXG4gICAgLy9yZWdhcmRlIHNpIHJlZGlyZWN0aW9uXHJcbiAgICBpZiAobmVlZFRvU2VlKHRhZywgbmV3SW5mbykpe1xyXG4gICAgICAgIC8vcmVnYXJkZSB2ZXJzIHF1ZWwgY2hlbWluIG9uIHJlZGlyaWdlXHJcbiAgICAgICAgbGV0IG5vZGVUb0dvSUQgPSB0YWdbdGFnLmxlbmd0aC0xXTtcclxuICAgICAgICAvL2luZm9ybWUgaW5mb1xyXG4gICAgICAgIG5ld0luZm8uZ2FtZS5ub2RlID0gK25vZGVUb0dvSUQ7XHJcbiAgICAgICAgLy9yZWdhcmRlIHNpIGV2ZW50IGxvcnMgZGUgbGEgcmVkaXJlY3Rpb25cclxuICAgICAgICBuZXdJbmZvID0gZXZlbnRPbihuZXdJbmZvLCBkYXRhW25ld0luZm8uZ2FtZS5ub2RlXS50YWcsXCJub2RlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdJbmZvO1xyXG59IiwiaW1wb3J0IHtJbmZvLCBCYWRnZX0gZnJvbSBcIi4uLy4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG4vL3Rvb2wgdXNlciBiYWRnZVxyXG5leHBvcnQgY29uc3Qgc2V0QmFkZ2VVc2VydG9EYXRhID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgbGV0IGJhZGdlVXNlcjp7YmFkZ2VzOkFycmF5PHN0cmluZz4sIGJhZGdlc05icjpBcnJheTxudW1iZXI+fSA9IHtiYWRnZXM6W10sYmFkZ2VzTmJyOltdfVxyXG4gICAgLy9zZXQgYmFkZ2UgdXNlclxyXG4gICAgaW5mby5nYW1lLnVzZXIuYmFkZ2VzLm1hcChiID0+IHtcclxuICAgICAgICBiYWRnZVVzZXIuYmFkZ2VzLnB1c2goYi5uYW1lKTtcclxuICAgICAgICBiYWRnZVVzZXIuYmFkZ2VzTmJyLnB1c2goYi5uYnIpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBiYWRnZVVzZXI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNldERhdGF0b0JhZGdlVXNlciA9IChEYXRhVXNlcjp7YmFkZ2VzOkFycmF5PHN0cmluZz4sIGJhZGdlc05icjpBcnJheTxudW1iZXI+fSkgPT4ge1xyXG4gICAgbGV0IGJhZGdlVXNlcjogQXJyYXk8QmFkZ2U+ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGF0YVVzZXIuYmFkZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIGJhZGdlVXNlci5wdXNoKHtuYW1lOkRhdGFVc2VyLmJhZGdlc1tpXSwgbmJyOkRhdGFVc2VyLmJhZGdlc05icltpXX0pO1xyXG4gICAgfSByZXR1cm4gYmFkZ2VVc2VyO1xyXG59IiwiaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgZ2V0TmFtZU9mVXNlciwgc2F2ZU9uQ29va2llLCBzdHJpbmdpZnlEYXRhLCBlbmNvZGluZywgZGVjb2RpbmcsIHBhcnNlRGF0YX0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcbmltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge05vZGV9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9ub2RlVHlwZVwiO1xyXG5pbXBvcnQge25lZWRUb1NlZX0gZnJvbSBcIi4vbmVlZFRvU2VlXCI7XHJcbmltcG9ydCB7Z2l2ZSwgdGFrZX0gZnJvbSBcIi4vZ2l2ZUFORHRha2VcIjtcclxuaW1wb3J0IHtyZWRpcmVjdGlvbn0gZnJvbSBcIi4vcmVkaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXRoSXNWYWxpZCA9IChub2RlVG9Hb0lEOm51bWJlciwgaW5kZXhQYXRoOm51bWJlciwgZGF0YTpBcnJheTxOb2RlPik6Ym9vbGVhbiA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG4gICAgY29uc3QgaW5mbyA9IGdldEluZm9Gcm9tQ29va2llKGdldE5hbWVPZlVzZXIoKSk7XHJcbiAgICBcclxuICAgIC8vcGFyYW1ldHJlIGRlIHByw6lWw6lyaWZcclxuICAgIGxldCBvayA9IGZhbHNlO1xyXG4gICAgLy9jaGVtaW4gZXhpc3RhbnQgZGFucyBsZSBub2V1ZCBhY3R1ZWxcclxuICAgIGlmICh2YWxpZCl7XHJcbiAgICBkYXRhW2luZm8uZ2FtZS5ub2RlXS5wYXRoc1tpbmRleFBhdGhdLnBhdGhJRCA9PSBub2RlVG9Hb0lEICYmIChvayA9IHRydWUpO1xyXG4gICAgIW9rJiYgKHZhbGlkID0gZmFsc2UpO1xyXG4gICAgLy8hdmFsaWQmJiBjb25zb2xlLmxvZyhcImNoZW1pbiBub24gZXhpc3RhbnRcIilcclxuICAgIH0gb2sgPSBmYWxzZSAvL3Jlc2V0IHByw6ktdsOpcmlmXHJcblxyXG4gICAgLy9cclxuICAgIGlmICh2YWxpZCl7XHJcbiAgICAgICAgcGFyc2VUYWdCYXNpYyhkYXRhW2luZm8uZ2FtZS5ub2RlXS5wYXRoc1tpbmRleFBhdGhdLnRhZykuZm9yRWFjaCh0YWcgPT4geyAgICAgICAgICBcclxuICAgICAgICAgICAgb2s9dHJ1ZTtcclxuICAgICAgICAgICAgc3dpdGNoKHRhZ1swXSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlKFwibmVlZFRvU2VlXCIpOlxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRUb1NlZSh0YWcsaW5mbykgfHwgKG9rPWZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6YnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICFvayYmICh2YWxpZCA9IGZhbHNlKVxyXG4gICAgICAgIC8vIXZhbGlkJiYgY29uc29sZS5sb2coXCJjaGVtaW4gaG9ycyBuZWVkXCIpXHJcbiAgICB9IG9rID0gZmFsc2UgLy9yZXNldCBwcsOpLXbDqXJpZlxyXG4gICAgLy9cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50T24gPSAoaW5mbzpJbmZvLHRhZ3M6c3RyaW5nLCB0eXBlOlwibm9kZVwifFwicGF0aFwiKSA9PiB7XHJcbiAgICBsZXQgbmV3SW5mbyA9IGluZm87XHJcbiAgICBjb25zdCBhbGxUYWcgPSBwYXJzZVRhZ0Jhc2ljKHRhZ3MpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzd2l0Y2goYWxsVGFnW2ldWzBdKXtcclxuICAgICAgICAgICAgY2FzZShcImdpdmVcIik6XHJcbiAgICAgICAgICAgICAgICBuZXdJbmZvID0gZ2l2ZShhbGxUYWdbaV0sbmV3SW5mbyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcInRha2VcIik6XHJcbiAgICAgICAgICAgICAgICBuZXdJbmZvID0gdGFrZShhbGxUYWdbaV0sbmV3SW5mbyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcInJlZGlyZWN0aW9uXCIpOlxyXG4gICAgICAgICAgICAgICAgbmV3SW5mbyA9IHJlZGlyZWN0aW9uKGFsbFRhZ1tpXSxuZXdJbmZvKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3SW5mbztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdvVG9QYXRoID0gKG5vZGVUb0dvSUQ6bnVtYmVyLCBpbmRleFBhdGg6bnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIGlmIChwYXRoSXNWYWxpZChub2RlVG9Hb0lELGluZGV4UGF0aCwgZGF0YSkpIHtcclxuICAgICAgICBsZXQgbmFtZVNhdmUgPSBnZXROYW1lT2ZVc2VyKCk7XHJcbiAgICAgICAgaWYgKG5hbWVTYXZlIT0gXCJsb2FkXCIpe1xyXG5cclxuICAgICAgICAgICAgLy9sb29rIGluZm9cclxuICAgICAgICAgICAgbGV0IGluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShuYW1lU2F2ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBlZmZldCBkZSBwcmlzZSBkdSBjaGVtaW5cclxuICAgICAgICAgICAgaW5mbyA9IGV2ZW50T24oaW5mbywgZGF0YVtpbmZvLmdhbWUubm9kZV0ucGF0aHNbaW5kZXhQYXRoXS50YWcsXCJwYXRoXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9vbiBpbmZvcm1lIHF1ZSBsZSBjaGVtaW4gZXN0IHByaXNcclxuICAgICAgICAgICAgaW5mby5nYW1lLm5vZGUgPSBub2RlVG9Hb0lEO1xyXG5cclxuICAgICAgICAgICAgLy8gZWZmZXQgZCdhcnJpdsOpIHN1ciBsZSBub3V2ZWF1IG5vZXVkXHJcbiAgICAgICAgICAgIGluZm8gPSBldmVudE9uKGluZm8sIGRhdGFbaW5mby5nYW1lLm5vZGVdLnRhZyxcIm5vZGVcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2VucmVnaXN0cmUgbW9kaWZpY2F0aW9uXHJcbiAgICAgICAgICAgIHNhdmVPbkNvb2tpZShuYW1lU2F2ZSxpbmZvKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gP3VzZXI9JHtuYW1lU2F2ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtjb25zb2xlLmVycm9yKFwibm9tIGQndXNlciBpbmNvbm51XCIpO31cclxuICAgIH0gZWxzZSB7Y29uc29sZS5lcnJvcihcImNoZW1pbiBub24gdmFsaWRlXCIpO31cclxufVxyXG5cclxuY29uc3QgcGFyc2VUYWdCYXNpYyA9ICh0YWdzOnN0cmluZykgPT4ge1xyXG4gICAgbGV0IGFsbFRhZ3MgOiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xyXG4gICAgbGV0IHRhZyA6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHRhZ3Muc3BsaXQoXCIkXCIpLm1hcCh0ID0+IHtcclxuICAgICAgICB0YWcgPSBbXTtcclxuICAgICAgICB0LnNwbGl0KFwiPVwiKS5tYXAodGwgPT4gdGFnLnB1c2godGwpKTtcclxuICAgICAgICBhbGxUYWdzLnB1c2godGFnKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWxsVGFnc1xyXG59XHJcbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInRleHRQb3BVcFwiPkNoYXJnZXIgbGEgcGFydGllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKCl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEhvbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBwYXJzZURhdGEsIGRlY29kaW5nfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgICAgIGhvbWVcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cInBhdGhzXCI+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSBcclxuZXhwb3J0IGNvbnN0IGV2ZW50TWFpbiA9ICgpID0+IHtcclxuXHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCJcclxuaW1wb3J0IHtGb290ZXIsIGV2ZW50Rm9vdGVyfSBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TG9hZEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBwYXJzZURhdGEsIGRlY29kaW5nfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuaW1wb3J0IHtTYXZlfSBmcm9tIFwiLi9zYXZlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5vZGVcIj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICAke1NhdmUoKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG4gICAgLy9vdGhlciBcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFBhdGgoaWQ6c3RyaW5nKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkU2F2ZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmlkID09IGlkKXtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbkZvY3VzXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LmFkZChcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBDb25maXJtUGF0aFwiKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle3BhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5Gb2N1c09uUGF0aCgpe1xyXG4gICAgICAgIHZhciBsb2FkU2F2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkU2F2ZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZFNhdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxvYWRTYXZlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9hZFNhdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvYWRTYXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvYWRTYXZlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBsb2FkU2F2ZXNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWxpZFBhdGgobG9hZFNhdmVzW2luZGV4XS5pZCk7ICBcclxuICAgICAgICAgICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmZvckVhY2goYyA9PiB7cG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LnJlbW92ZShjKX0gKTtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmFkZChsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0UG9wVXBcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXSA9PSBcIm5ld0dhbWVcIilcclxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCJDb21tZW5jZXIgdW5lIG5vdXZlbGxlIHBhcnRpZT9cIjtcclxuICAgICAgICAgICAgZWxzZSB0ZXh0LmlubmVySFRNTCA9IGBDaGFyZ2VyIGxhIHBhcnRpZSBcIiR7bG9hZFNhdmVzW2luZGV4XS5jbGFzc0xpc3RbMl19XCIgP2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR1cCB2YWxpZGF0aW9uIGV2ZW50XHJcbiAgICBjb25zdCBwb3BVcENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2xvc2UnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBvcFVwQ2hvaWNlTm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VObycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvL3NldCBmdW5jdGlvbiBpbiBldmVudCBvbiBjbGlja1xyXG4gICAgcG9wVXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VOby5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VZZXMuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gP3VzZXI9JHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3RbMF19YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICBcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IG1hak1haW4gPSAoYWN0dWVsTm9kZSA9IDApID0+IHtcclxuICAgIFxyXG59IiwiZXhwb3J0IGNvbnN0IFNhdmUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuICAgIGxldCBzYXZlQnJ1dDogQXJyYXk8c3RyaW5nPjtcclxuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZihcIjtcIikgIT09IC0xKVxyXG4gICAgICAgIHtzYXZlQnJ1dCA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7fVxyXG4gICAgZWxzZSB7c2F2ZUJydXQgPSBbZG9jdW1lbnQuY29va2llXTt9XHJcbiAgICBsZXQgc2F2ZTogQXJyYXk8e25hbWU6c3RyaW5nLGRhdGE6c3RyaW5nfT4gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZUJydXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBzYXZlLnB1c2goeyBuYW1lOnNhdmVCcnV0W2ldLnNwbGl0KFwiPVwiKVswXSAsIGRhdGE6c2F2ZUJydXRbaV0uc3BsaXQoXCI9XCIpWzFdIH0pO1xyXG4gICAgICAgIGlmIChzYXZlW2ldLm5hbWUgIT0gXCJsb2FkXCIpe1xyXG4gICAgICAgIHJlbmRlciArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggbG9hZFNhdmUgJHtzYXZlW2ldLm5hbWV9XCIgaWQ9XCJwYXRoJHtpfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYSBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAke3NhdmVbaV0ubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICs9IFxyXG4gICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXRoIGxvYWRTYXZlIG5ld0dhbWVcIiBpZD1cIm5ld3BhdGhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgTk9VVkVMTEUgUEFSVElFXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYiBjb25maXJtYXRpb25cIj48ZGl2IGNsYXNzPVwiYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7c2F2ZU9uQ29va2llLCBwYXJzZURhdGEsIGdldE5hbWVPZlVzZXJ9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJuZXdHYW1lQmdTdG9yeVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFsayBucGNcIj5CaWVudmVudWU8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJuYXJyYXRvclwiPmNvbnRleHRlIGRlIGwnaGlzdG9pcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJmb3JtTmV3R2FtZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPk5vdXZlbGxlIHBhcnRpZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJGTkduYW1lXCIgcGxhY2Vob2xkZXI9XCJub20gZHUgcGVyc29ubmFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cIkZOR2Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiRk5Hc3VibWl0XCI+Q29tbWVuY2VyIGwnYXZlbnR1cmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5Hc3VibWl0XCIpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV3R2FtZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5HbmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYoIS9eW2EtekEtWl0vLnRlc3QobmFtZS52YWx1ZSkgfHwgbmFtZS52YWx1ZS5sZW5ndGggPCAyKSAge2Vycm9yID0gXCJub20gaW52YWxpZGVcIjt9XHJcbiAgICBpZiAoZXJyb3IgPT0gXCJcIikgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGBwYWdlPWdhbWUhZ2FtZVVzZXJOYW1lPSR7bmFtZS52YWx1ZX0hZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wYDtcclxuICAgICAgICBzYXZlT25Db29raWUobmFtZS52YWx1ZSwgcGFyc2VEYXRhKGRhdGEpKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke25hbWUudmFsdWV9YDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZOR2Vycm9yXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJjb2xvcjpyZWRcIj4ke2Vycm9yfTwvcD5gO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInRleHRQb3BVcFwiPkNoYXJnZXIgbGEgcGFydGllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKCl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudE5ld0dhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge2dldE5hbWVPZlVzZXJ9IGZyb20gXCIuLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiO1xyXG5cclxuICAgIGxldCB1c2VyID0gZ2V0TmFtZU9mVXNlcigpO1xyXG5cclxuICAgIHJlbmRlciArPSBcclxuICAgIGA8ZGl2IGNsYXNzPVwiYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhXCIgaWQ9XCJob21lT25Gb290ZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIj9cIj48aSBjbGFzcz1cImZhcyBmYS1ob21lXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYlwiIGlkPVwibG9hZE9uRm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCI/dXNlcj1sb2FkXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L2E+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY1wiPjwvZGl2PmA7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAvL2V2ZW50XHJcbn0iLCJpbXBvcnQge0luZm8sIEJhZGdlfSBmcm9tIFwiLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCAgZW5jb2RpbmcgPSAoYXNjaWlTdHJpbmc6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgaGV4ID0gJyc7XHJcbiAgICBsZXQgdGVtcEFTQ0lJLCB0ZW1wSGV4O1xyXG4gICAgY29uc3QgYXNjaWlBcnJheSA9IGFzY2lpU3RyaW5nLnNwbGl0KCcnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNjaWlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXBBU0NJSSA9IGFzY2lpQXJyYXlbaV0uY2hhckNvZGVBdCgwKVxyXG4gICAgICAgIHRlbXBIZXggPSB0ZW1wQVNDSUkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGhleCA9IGhleCArIHRlbXBIZXg7XHJcbiAgICB9XHJcbiAgICBoZXggPSBoZXgudHJpbSgpO1xyXG4gICAgcmV0dXJuIGhleDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNvZGluZyA9IChoZXhTdHJpbmc6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgc3RyaW5nT3V0ID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhleFN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkYXRhID0gaGV4U3RyaW5nW2ldICsgaGV4U3RyaW5nW2krMV07XHJcbiAgICAgICAgbGV0IHRlbXBBc2NpaUNvZGUgPSBwYXJzZUludChkYXRhLCAxNik7XHJcbiAgICAgICAgc3RyaW5nT3V0ID0gc3RyaW5nT3V0ICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wQXNjaWlDb2RlKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nT3V0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VEYXRhID0gKGRhdGE6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyOkluZm8gPSBcclxuICAgIHtwYWdlOiBcImdhbWVcIixcclxuICAgIGdhbWU6IHtcclxuICAgICAgICB1c2VyOntcclxuICAgICAgICAgICAgbmFtZTpcIlwiLFxyXG4gICAgICAgICAgICBiYWRnZXM6W11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vZGU6MFxyXG4gICAgfX1cclxuICAgIGRhdGEuc3BsaXQoXCIhXCIpLm1hcChpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lPSBpLnNwbGl0KFwiPVwiKVswXTtcclxuICAgICAgICBjb25zdCBkZWYgPSBpLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJwYWdlXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wicGFnZVwiXSA9IGRlZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2FtZVVzZXJOYW1lXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJuYW1lXCJdID0gZGVmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lVXNlckJhZGdlc1wiKTpcclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZTpBcnJheTxCYWRnZT4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRlZi5zcGxpdChcIixcIikubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpaSA9IGkuc3BsaXQoXCJfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUucHVzaCh7bmFtZTogaWlbMF0sIG5icjogK2lpWzFdfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJiYWRnZXNcIl0gPSB0YWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2FtZU5vZGVcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1wibm9kZVwiXSA9ICtkZWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeURhdGEgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBsZXQgYmFkZ2U9XCJcIjtcclxuICAgIFxyXG4gICAgaW5mb1tcImdhbWVcIl1bXCJ1c2VyXCJdW1wiYmFkZ2VzXCJdLm1hcChtID0+IHtcclxuICAgICAgICBiYWRnZSArPSBgJHttLm5hbWV9XyR7bS5uYnJ9LGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIGJhZGdlID0gYmFkZ2Uuc3Vic3RyaW5nKDAsYmFkZ2UubGVuZ3RoLTEpIC8vb24gZW5sZXZlIGxhIHZpcmd1bGUgZXhjZWRlbnRhaXJlXHJcbiAgICBsZXQgcmVuZGVyID0gXHJcbiAgICBgcGFnZT0ke2luZm9bXCJwYWdlXCJdfSFgK1xyXG4gICAgYGdhbWVVc2VyTmFtZT0ke2luZm9bXCJnYW1lXCJdW1widXNlclwiXVtcIm5hbWVcIl19IWArXHJcbiAgICBgZ2FtZVVzZXJCYWRnZXM9JHtiYWRnZX0hYCtcclxuICAgIGBnYW1lTm9kZT0ke2luZm9bXCJnYW1lXCJdW1wibm9kZVwiXX0hYFxyXG4gICAgO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuY29uc3QgY2hlbWluTG9hZCA9IFwicGFnZT1sb2FkR2FtZSFnYW1lVXNlck5hbWU9Tm9ib2R5IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MFwiO1xyXG5jb25zdCBjaGVtaW5OZXdHYW1lID0gXCJwYWdlPW5ld0dhbWUhZ2FtZVVzZXJOYW1lPU5vYm9keSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBcIjtcclxuY29uc3QgY2hlbWluSG9tZSA9IFwicGFnZT1ob21lIWdhbWVVc2VyTmFtZT1Ob2JvZHkhZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5mb0Zyb21VcmwgPSAoKSA9PiB7XHJcbiAgICBsZXQgaW5mbzpJbmZvO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCAhPSBcIlwiP1xyXG4gICAgaW5mbyA9IHBhcnNlRGF0YShkZWNvZGluZyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiPVwiKVsxXSkpXHJcbjpcclxuICAgIGluZm8gPSBwYXJzZURhdGEoY2hlbWluTG9hZCk7XHJcbiAgICByZXR1cm4gaW5mbztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluZm9Gcm9tQ29va2llID0gKG5hbWVTYXZlOnN0cmluZykgPT4ge1xyXG4gICAgc3dpdGNoIChuYW1lU2F2ZSl7XHJcbiAgICAgICAgY2FzZShcImxvYWRcIik6ICAgcmV0dXJuIHBhcnNlRGF0YShjaGVtaW5Mb2FkKTtcclxuICAgICAgICBjYXNlKFwibmV3R2FtZVwiKTpyZXR1cm4gcGFyc2VEYXRhKGNoZW1pbk5ld0dhbWUpO1xyXG4gICAgICAgIGNhc2UoXCJob21lXCIpOiAgIHJldHVybiBwYXJzZURhdGEoY2hlbWluSG9tZSk7XHJcbiAgICAgICAgZGVmYXVsdDogICAgICAgIHJldHVybiBwYXJzZURhdGEoZGVjb2RpbmcoYCR7ZG9jdW1lbnQuY29va2llfWAuc3BsaXQoYCR7bmFtZVNhdmV9PWApWzFdLnNwbGl0KFwiO1wiKVswXSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZU9uQ29va2llID0gKG5hbWVTYXZlOnN0cmluZywgc2F2ZTpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lU2F2ZX09JHsoZW5jb2Rpbmcoc3RyaW5naWZ5RGF0YShzYXZlKSkpfTsgU2FtZVNpdGU9TGF4YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWVTYXZlfT0keyhlbmNvZGluZyhzdHJpbmdpZnlEYXRhKGdldEluZm9Gcm9tQ29va2llKG5hbWVTYXZlKSkpKX07IFNhbWVTaXRlPUxheDsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQydgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmFtZU9mVXNlciA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj9cIilcclxuICAgIGZvciAobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgaWYoZC5zcGxpdChcIj1cIilbMF0gPT0gXCJ1c2VyXCIpIHJldHVybiBkLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgIH1cclxuICAgIHJldHVybiBcImhvbWVcIjtcclxufSIsImV4cG9ydCBjb25zdCBwYXJzaW5nVGV4dCA9ICh0ZXh0RlVsbDpzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlVGV4dCA9IHRleHRGVWxsLnNwbGl0KFwiJFwiKTtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiXHJcbiAgICBmb3IgKGxldCB0ZXh0IG9mIHBhcnNlVGV4dCl7XHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoKHRleHQuc3BsaXQoXCItXCIpWzBdKXtcclxuICAgICAgICAgICAgY2FzZShcInBcIik6XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgb2YgdGV4dC5zcGxpdChcIi1cIikpe2NsYXNzTmFtZSs9IGMgKyBcIiBcIn1cclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSBgPHAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgXCI+YDtcclxuICAgICAgICAgICAgICAgIG1vZHVsZSA9IFwicFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJzcGFuXCIpOlxyXG4gICAgICAgICAgICByZW5kZXIrPSBgPHNwYW4gY2xhc3M9XCJhbm5vdGF0aW9uXCI+YFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJjbG9zZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSBgPC8ke21vZHVsZX0+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyICs9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgZ2V0TmFtZU9mVXNlciwgZGVsZXRlQ29va2llLCBzYXZlT25Db29raWUsIHBhcnNlRGF0YX0gZnJvbSBcIi4vdG9vbHMvZW5jb2RpbmdcIlxyXG5pbXBvcnQge0dhbWUsIGV2ZW50R2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9nYW1lL0dhbWVcIjtcclxuaW1wb3J0IHtsb2FkR2FtZSwgZXZlbnRMb2FkR2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9sb2FkR2FtZS9sb2FkR2FtZVwiO1xyXG5pbXBvcnQge25ld0dhbWUsIGV2ZW50TmV3R2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9uZXdHYW1lL25ld0dhbWVcIjtcclxuaW1wb3J0IHtIb21lLCBldmVudEhvbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvaG9tZS9Ib21lXCI7XHJcblxyXG4vL2dldCBpbmZvXHJcbmxldCBpbmZvOkluZm87XHJcbnN3aXRjaChnZXROYW1lT2ZVc2VyKCkpe1xyXG4gICAgY2FzZShcImxvYWRcIik6aW5mbyA9IGdldEluZm9Gcm9tQ29va2llKFwibG9hZFwiKTticmVhaztcclxuICAgIGNhc2UoXCJuZXdHYW1lXCIpOmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShcIm5ld0dhbWVcIik7YnJlYWs7XHJcbiAgICBkZWZhdWx0OmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShnZXROYW1lT2ZVc2VyKCkpO2JyZWFrO1xyXG59XHJcblxyXG4vLyBpbml0IGZ1bmN0aW9uIHJvb3QgY29uc3R1Y3RvclxyXG5jb25zdCBBcHAgPSAocGFnZTpzdHJpbmcpID0+IHtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFxyXG4gICAgYFxyXG4gICAgICAgICR7cGFnZX1cclxuICAgIGBcclxufVxyXG5cclxuLy93cml0ZSBwYWdlXHJcbnN3aXRjaChpbmZvLnBhZ2Upe1xyXG5cclxuICAgIGNhc2UoXCJnYW1lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnYW1lXCIpO1xyXG4gICAgICAgIEFwcChHYW1lKGluZm8pKTtcclxuICAgICAgICBldmVudEdhbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlKFwibG9hZEdhbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvYWRHYW1lXCIpO1xyXG4gICAgICAgIEFwcChsb2FkR2FtZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnRMb2FkR2FtZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UoXCJuZXdHYW1lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJuZXdHYW1lXCIpO1xyXG4gICAgICAgIEFwcChuZXdHYW1lKGluZm8pKTtcclxuICAgICAgICBldmVudE5ld0dhbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlKFwiaG9tZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaG9tZVwiKTtcclxuICAgICAgICBBcHAoSG9tZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnRIb21lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6YnJlYWs7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=