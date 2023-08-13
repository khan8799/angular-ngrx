import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { CATEGORY_STATE_NAME } from "../category/state/category.selector";
import { CategoryState } from "../category/state/category.state";
import { SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";
import { SUB_CATEGORY_STATE_NAME } from "../sub-category/state/sub-category.selector";
import { SubCategoryState } from "../sub-category/state/sub-category.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [AUTH_STATE_NAME]: AuthState,
    [CATEGORY_STATE_NAME]: CategoryState,
    [SUB_CATEGORY_STATE_NAME]: SubCategoryState,
    router: RouterReducerState,
}

export const AppReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer,
}