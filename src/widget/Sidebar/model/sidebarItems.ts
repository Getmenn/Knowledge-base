// export const sidebarItems = ['css', 'JavaScript', 'React'];

export interface childrenType{
    name: string;
    id: number;
    tooltip?: string;
}

export interface ISidebarItems{
    name: string;
    id: number;
    children?: childrenType[];
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
        ],
    },
    {
        name: 'JavaScript',
        id: 2,
        children: [],
    },
    {
        name: 'React',
        id: 3,
        children: [],
    },

];
