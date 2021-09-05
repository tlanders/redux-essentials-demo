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
import {fetchUsers} from "./features/users/usersSlice";
import {UsersList} from "./features/users/UsersList";

import './api/server'
import {UserPage} from "./features/users/UserPage";
import {NotificationsList} from "./features/notifications/NotificationsList";

store.dispatch(fetchUsers());

function FeedApp() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path={"/feed-app"} exact render={() => (
                            <>
                                <AddPostForm />
                                <PostsList />
                            </>
                            )}
                        />
                        <Route exact path={"/feed-app/posts/:postId"} component={SinglePostPage}/>
                        <Route exact path={"/feed-app/posts/edit/:postId"} component={EditPostForm}/>
                        <Route exact path={"/feed-app/users"} component={UsersList}/>
                        <Route exact path={"/feed-app/users/:userId"} component={UserPage}/>
                        <Route exact path={"/feed-app/notifications"} component={NotificationsList}/>
                        <Redirect to={"/feed-app"}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default FeedApp