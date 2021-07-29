export interface Path {
    content: string;
    pathID: number;
    tag: string;
}
export interface Node {
    id: number;
    type: string;
    location: string;
    focal: string;
    name: string;
    content: string;
    paths: Array<Path>;
    tag: string;
}
export declare const findNode: (data: Array<Node>, idNode: number) => Node;
interface IDsample {
    "id": "idname";
}
export declare const containId: (data: Array<IDsample>, idNode: number | string) => boolean;
export declare const findWithId: (data: Array<any>, idNode: string) => any;
export {};
