import { createAction, props } from "@ngrx/store";
import { SubCategory } from "src/app/model/sub-category.model";

const LOAD_SUB_CATEGORY = '[sub category page] load sub category';
const LOAD_SUB_CATEGORY_SUCCESS = '[sub category page] load sub category success';

export const loadSubCategory = createAction(
    LOAD_SUB_CATEGORY
)

export const loadSubCategorySuccess = createAction(
    LOAD_SUB_CATEGORY_SUCCESS,
    props<{subCategory: SubCategory[]}>()
);