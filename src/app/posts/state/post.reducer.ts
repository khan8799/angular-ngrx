import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"
import { addPost, deletePost, updatePost } from "./post.action";

const _postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        const post = {...action.post}
        post.id = state.posts.length + 1;

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const posts = state.posts.map(post => post.id === action.post.id ? action.post : post)
        
        return {
            ...state,
            posts
        }
    }),
    on(deletePost, (state, action) => {
        const posts = state.posts.filter(post => post.id !== action.id);
        
        return {
            ...state,
            posts
        }
    })
)
export function PostReducer(state: any, action: any) {
    return _postReducer(state, action);
}