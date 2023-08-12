import { SubCategory } from "src/app/model/sub-category.model";

export interface SubCategoryState {
    subCategories: SubCategory[] | null;
}

export const initialState: SubCategoryState = {
    subCategories: []
}