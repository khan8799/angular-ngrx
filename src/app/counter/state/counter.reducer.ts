import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { changeCompanyName, customIncrement, decrement, increment, reset } from "./counter.action"

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeCompanyName, (state) => {
        return {
            ...state,
            companyName: 'FutronixWeb LLP'
        }
    })
)
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}