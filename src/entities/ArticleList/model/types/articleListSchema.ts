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

export interface ArticleListSchema{
    css: IArticleListItem[] | null;
    react: IArticleListItem[] | null;
    javaScript: IArticleListItem[] | null;
}
