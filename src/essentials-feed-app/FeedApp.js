import React from 'react'

import {Navbar} from './app/Navbar'

import './FeedApp.css'
import {Provider} from "react-redux";
import store from "./app/store";
import {PostsList} from "./features/posts/PostsList";
import {AddPostForm} from "./features/posts/AddPostForm";

function FeedApp() {
    return (
        <Provider store={store}>
            <Navbar />
            <div className="App">
                <AddPostForm/>
                <PostsList/>
            </div>
        </Provider>
    )
}

export default FeedApp