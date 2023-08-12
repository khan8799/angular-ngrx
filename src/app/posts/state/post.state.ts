import { Post } from "src/app/model/post.model";

export interface PostState {
    posts: Post[];
}

export const initialState = {
    posts: [
        {
            id: 1,
            title: 'Sample Title 1',
            description: 'Sample Description 1'
        },
        {
            id: 2,
            title: 'Sample Title 2',
            description: 'Sample Description 2'
        }
    ]
}