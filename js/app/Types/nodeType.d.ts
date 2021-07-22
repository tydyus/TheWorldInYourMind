export interface Path {
    content: string;
    pathID: number;
    tag: string;
}
export interface Node {
    id: number;
    type: string;
    name: string;
    content: string;
    paths: Array<Path>;
    tag: string;
}
