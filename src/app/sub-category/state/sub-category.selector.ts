import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SubCategoryState } from "./sub-category.state";
export const SUB_CATEGORY_STATE_NAME = 'subCategory';

const subCategoryState = createFeatureSelector<SubCategoryState>(SUB_CATEGORY_STATE_NAME);

export const getSubCategories = createSelector(subCategoryState, (state) => {
    return state.subCategories;
})