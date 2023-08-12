import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { CATEGORY_STATE_NAME } from "../category/state/category.selector";
import { CategoryState } from "../category/state/category.state";
import { SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [AUTH_STATE_NAME]: AuthState
    [CATEGORY_STATE_NAME]: CategoryState
}

export const AppReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer
}