import { Info, Badge } from "../../../../Types/infoType";
export declare const setBadgeUsertoData: (info: Info) => {
    badges: Array<string>;
    badgesNbr: Array<number>;
};
export declare const setDatatoBadgeUser: (DataUser: {
    badges: Array<string>;
    badgesNbr: Array<number>;
}) => Badge[];
