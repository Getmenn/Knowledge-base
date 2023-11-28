// export const sidebarItems = ['css', 'JavaScript', 'React'];

export interface IContentType{
    name: string;
    id: number;
    tooltip?: string;
}
export interface IChildrenType{
    name: string;
    tooltip?: string;
    children?: IContentType[];
}
export interface ISidebarItems{
    tooltip?: string;
    children?: IChildrenType[];
}
