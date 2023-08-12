import { createAction, props } from "@ngrx/store";
import { LoginPayload, SignupPayload, User } from "src/app/model/auth.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAILED = '[auth page] login fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const SIGNUP_FAILED = '[auth page] signup fail';

export const AUTO_LOGIN = '[auth page] auto login';
export const LOGOUT = '[auth page] logout';

export const loginStart = createAction(
    LOGIN_START,
    props<LoginPayload>()
);

export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{user: User, canRedirect: boolean}>()
);

export const signupStart = createAction(
    SIGNUP_START,
    props<SignupPayload>()
);

export const signupSuccess = createAction(
    SIGNUP_SUCCESS,
    props<{user: User}>()
);

export const autoLoginStart = createAction(AUTO_LOGIN);
export const logoutStart = createAction(LOGOUT);