import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState } from "./category.state";
import { getCurrentRoute } from "src/app/store/router/router-selector";
import { RouterStateUrl } from "src/app/store/router/custom-serializer";

export const CATEGORY_STATE_NAME = 'category';

const getCategoryState = createFeatureSelector<CategoryState>(CATEGORY_STATE_NAME);

export const getCategories = createSelector(getCategoryState, (state) => {
    return state.categories;
})

export const getCategoryById = createSelector(getCategories, getCurrentRoute, (categories, route: RouterStateUrl) => {
    return categories ? categories.find(category => category._id === route.params['_id']) : null;
});