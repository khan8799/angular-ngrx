import { createAction, props } from "@ngrx/store";
import { Category, CategoryPayload, DeleteCategoryResponse } from "src/app/model/category.model";

const LOAD_CATEGORY = '[category page] load categories';
const LOAD_CATEGORY_SUCCESS = '[category page] load categories success';
const ADD_CATEGORY = '[category page] add category';
const ADD_CATEGORY_SUCCESS = '[category page] add category success';
const UPDATE_CATEGORY = '[category page] update category';
const UPDATE_CATEGORY_SUCCESS = '[category page] update category success';
const DELETE_CATEGORY = '[category page] delete category';
const DELETE_CATEGORY_SUCCESS = '[category page] delete category success';

export const loadCategory = createAction(
    LOAD_CATEGORY
);

export const loadCategorySuccess = createAction(
    LOAD_CATEGORY_SUCCESS,
    props<{category: Category[]}>()
);

export const addCategory = createAction(
    ADD_CATEGORY,
    props<CategoryPayload>()
);

export const addCategorySuccess = createAction(
    ADD_CATEGORY_SUCCESS,
    props<{category: Category}>()
);

export const updateCategory = createAction(
    UPDATE_CATEGORY,
    props<CategoryPayload>()
);

export const updateCategorySuccess = createAction(
    UPDATE_CATEGORY_SUCCESS,
    props<{message?: string; category: Category}>()
);

export const deleteCategory = createAction(
    DELETE_CATEGORY,
    props<{_id: string}>()
);

export const deleteCategorySuccess = createAction(
    DELETE_CATEGORY_SUCCESS,
    props<DeleteCategoryResponse>()
);