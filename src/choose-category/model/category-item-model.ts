export interface CategoryItemModel {
    title: string;
    path?: string | undefined;
    icon:any;
    isActive?: boolean;
    children?: CategoryItemModel[];
}
