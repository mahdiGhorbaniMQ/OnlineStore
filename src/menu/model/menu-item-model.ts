import { CategoryModel } from "src/choose-category/model/category-model";

export interface MenuItemModel {
    title:string;
    icon:any;
    isMouseEnter?:boolean;
    path?:string | undefined;
    children?:MenuItemModel[] | CategoryModel[] | undefined;
}
