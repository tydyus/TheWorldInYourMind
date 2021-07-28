export interface Path{
    content:string,
    pathID:number,
    tag:string
}
export interface Node {
    id:number,
    type:string,
    location:string,
    focal:string,
    name:string,
    content:string,
    paths:Array<Path>,
    tag:string
}

export const findNode = (data:Array<Node>, idNode:number) =>{
    return (data.find(node => node["id"] == idNode)) as Node
    //return n as unknown as Node;
}      
//replace data[...] => basé sur le fait que l'index == l'id, dangereux