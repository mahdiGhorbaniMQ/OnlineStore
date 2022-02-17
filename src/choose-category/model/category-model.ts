import { CategoryItemModel } from "./category-item-model";

export interface CategoryModel {
    name:string;
    icon:any;
    isMouseEnter:boolean;
    children:CategoryItemModel[];
}
