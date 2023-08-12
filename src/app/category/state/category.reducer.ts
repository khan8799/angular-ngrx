import { createReducer, on } from "@ngrx/store";
import { initialState } from "./category.state";
import { addCategorySuccess, deleteCategorySuccess, loadCategorySuccess, updateCategorySuccess } from "./category.actions";

const _categoryReducer = createReducer(
    initialState,
    on(loadCategorySuccess, (state, action) => {
        return {
            ...state,
            categories: action.category
        }
    }),
    on(addCategorySuccess, (state, action) => {
        const categories = [...state.categories];
        categories.push(action.category);
        return {
            ...state,
            categories
        }
    }),
    on(deleteCategorySuccess, (state, action) => {
        const categories = state.categories.filter(category => category._id !== action.payload._id);
        return {
            ...state,
            categories
        }
    }),
    on(updateCategorySuccess, (state, action) => {
        return {
            ...state,
        }
    })
);

export function CategoryReducer(state, action) {
    return _categoryReducer(state, action);
}