import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'First Post!', content: 'Hello!', user: '0', date: new Date().toISOString(),
        reactions: {}},
    {id: '2', title: 'Second Post', content: 'More text', user: '1', date: new Date().toISOString(),
        reactions: {}},
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: {}
                    }
                };
            }
        },
        postUpdated: {
            reducer(state, action) {
                const {id, title, content} = action.payload;
                const existingPost = state.find(post => post.id === id);
                if(existingPost) {
                    existingPost.title = title;
                    existingPost.content = content;
                }
            },
            prepare(id, title, content) {
                return {
                    payload: {id, title, content}
                };
            }
        },
        reactionAdded(state, action) {
            const {postId, reactionName} = action.payload;
            const post = state.find(post => post.id === postId);
            if(post) {
                if(post.reactions[reactionName]) {
                    post.reactions[reactionName]++;
                } else {
                    post.reactions[reactionName] = 1;
                }
            }
        }
    }
});

export const selectAllPosts = state => state.posts;
export const selectPostById = (state, postId) => state.posts.find(post => post.id === postId);

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;