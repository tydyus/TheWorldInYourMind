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
