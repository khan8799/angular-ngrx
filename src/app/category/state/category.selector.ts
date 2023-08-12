import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState } from "./category.state";

export const CATEGORY_STATE_NAME = 'category';

const getCategoryState = createFeatureSelector<CategoryState>(CATEGORY_STATE_NAME);

export const getCategories = createSelector(getCategoryState, (state) => {
    return state.categories;
})

export const getCategoryById = createSelector(getCategoryState, (state, props) => {
    return state.categories.find(category => category._id === props._id);
});