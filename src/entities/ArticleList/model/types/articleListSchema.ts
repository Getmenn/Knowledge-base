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
export interface IArticleListItem{
    name: string;
    id: number;
    tooltip?: string;
    children?: IChildrenType[];
}

// export interface IArticleList{
//     css: IArticleListItem[];
//     react: IArticleListItem[];
//     javaScript: IArticleListItem[];
// }

type keysTypes = 'css' | 'react' | 'javaScript'

export type IArticleList = Record<keysTypes, IArticleListItem[]>

export interface ArticleListSchema{
    articleList: IArticleList[] | null;
}
