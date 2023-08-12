import { createReducer, on } from "@ngrx/store";
import { initialState } from "./sub-category.state";
import { loadSubCategorySuccess } from "./sub-category.actions";

const _subCategoryReducer = createReducer(
    initialState,
    on(loadSubCategorySuccess, (state, action) => {
        return {
            ...state,
            subCategories: action.subCategory
        }
    })
)

export function SubCategoryReducer(state, action) {
    _subCategoryReducer(state, action);
}