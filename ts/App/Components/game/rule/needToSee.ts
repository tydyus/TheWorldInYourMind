
import {Info, Badge} from "../../../Types/infoType";
import {Node} from "../../../Types/nodeType";
import {setBadgeUsertoData} from "./tools/tool";

export const needToSee = (needBrute:Array<string>,info:Info):boolean => {
    let valid = true;
    //data
    let rules: Array<{type:string,badges:Array<string>, badgesNbr:Array<number>}> = []
    let badgeUser = setBadgeUsertoData(info);
    
    //set rule
    for (let ruleIndex = 1; ruleIndex < needBrute.length; ruleIndex++) {
        let b:Array<string> = []
        let bNbr:Array<number> = []
        for (let i = 1; i < needBrute[ruleIndex].split(",").length; i++) {
            b.push(needBrute[ruleIndex].split(",")[i].split("_")[0]);
            bNbr.push(+needBrute[ruleIndex].split(",")[i].split("_")[1]);
        }
        rules.push({type:needBrute[ruleIndex].split(",")[0],badges:b,badgesNbr:bNbr})
    }

    //confronte rule with badgeUser
    for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
        switch(rules[ruleIndex].type){
            case("whitelist"):
                for (let i = 0; i < rules[ruleIndex].badges.length; i++) {
                    badgeUser.badges.includes(rules[ruleIndex].badges[i])
                    ?
                        rules[ruleIndex].badgesNbr[i] > badgeUser.badgesNbr[badgeUser.badges.indexOf(rules[ruleIndex].badges[i])] 
                        && 
                        (valid = false) 
                    : 
                        (valid = false) 
                }
                break;
            case("blacklist"):
                for (let i = 0; i < rules[ruleIndex].badges.length; i++) {
                    badgeUser.badges.includes(rules[ruleIndex].badges[i])
                    &&
                        rules[ruleIndex].badgesNbr[i] <= badgeUser.badgesNbr[badgeUser.badges.indexOf(rules[ruleIndex].badges[i])] 
                        && 
                        (valid = false)
                }
                break;
        }
    }
    

    return valid;
}
