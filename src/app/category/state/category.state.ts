import { Category } from "src/app/model/category.model";

export interface CategoryState {
    categories: Category[] | null
}

export const initialState: CategoryState = {
    categories: []
};