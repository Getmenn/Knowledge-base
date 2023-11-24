// export const sidebarItems = ['css', 'JavaScript', 'React'];

export interface IContentType{
    name: string;
    id: number;
    tooltip?: string;
}
export interface IChildrenType{
    name: string;
    id: number;
    tooltip?: string;
    children?: IContentType[];
}
export interface ISidebarItems{
    name: string;
    id: number;
    tooltip?: string;
    children?: IChildrenType[];
}

export const sidebarItems: ISidebarItems[] = [
    {
        name: 'css',
        id: 1,
        children: [
            {
                name: 'example',
                id: 1,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },

        ],
    },
    {
        name: 'JavaScript',
        id: 2,
        children: [
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
            },
            {
                name: 'example',
                id: 2,
                tooltip: 'tooltip',
                children: [
                    {
                        name: 'example',
                        id: 2,
                        tooltip: 'tooltip',
                    },
                ],
            },
        ],
    },
    {
        name: 'React',
        id: 3,
        children: [],
    },

];
