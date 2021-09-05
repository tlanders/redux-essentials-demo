import React from "react";
import {useSelector} from "react-redux";
import {selectUserById} from "./usersSlice";
import {Link} from "react-router-dom";
import {selectPostsByUserId} from "../posts/postsSlice";

export const UserPage = ({match}) => {
    const {userId} = match.params;
    const user = useSelector((state) => selectUserById(state, userId));
    const postsForUser = useSelector((state) => selectPostsByUserId(state, userId));

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/feed-app/posts/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    );
}