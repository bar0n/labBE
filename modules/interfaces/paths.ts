export interface IRoute {
    userId:string,
    paths:IPoint[];
    description:string,
    type:string
}

export interface IPoint {

    latitude : number
    longitude : number

}