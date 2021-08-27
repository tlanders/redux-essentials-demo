import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts');
    return response.posts;
});

export const addNewPost = createAsyncThunk('posts/addNewPost',
    async initialPost => {
        // send initial data to server
        const response = await client.post('/fakeApi/posts', {post: initialPost});

        // response contains full post including its ID
        return response.post;
    });

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postUpdated: {
            reducer(state, action) {
                const {id, title, content} = action.payload;
                const existingPost = state.posts.find(post => post.id === id);
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
            const post = state.posts.find(post => post.id === postId);
            if(post) {
                if(post.reactions[reactionName]) {
                    post.reactions[reactionName]++;
                } else {
                    post.reactions[reactionName] = 1;
                }
            }
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.posts = state.posts.concat(action.payload);
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
        }
    }
});

export const selectAllPosts = state => state.posts.posts;
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);

export const {postUpdated, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;