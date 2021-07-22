import { Info } from "../../../Types/infoType";
import { Node } from "../../../Types/nodeType";
export declare const pathIsValid: (nodeToGoID: number, indexPath: number, data: Array<Node>) => boolean;
export declare const eventOn: (info: Info, tags: string, type: "node" | "path") => Info;
export declare const goToPath: (nodeToGoID: number, indexPath: number) => void;
