import React from 'react'

import {Navbar} from './app/Navbar'

import './FeedApp.css'
import {Provider} from "react-redux";
import store from "./app/store";
import {PostsList} from "./features/posts/PostsList";
import {AddPostForm} from "./features/posts/AddPostForm";
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import {SinglePostPage} from "./features/posts/SinglePostPage";
import {EditPostForm} from "./features/posts/EditPostForm";

import './api/server'

function FeedApp() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path={"/feed-app"} exact render={() => (
                            <React.Fragment>
                                <AddPostForm />
                                <PostsList />
                            </React.Fragment>
                            )}
                        />
                        <Route exact path={"/feed-app/posts/:postId"} component={SinglePostPage}/>
                        <Route exact path={"/feed-app/posts/edit/:postId"} component={EditPostForm}/>
                        <Redirect to={"/feed-app"}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default FeedApp