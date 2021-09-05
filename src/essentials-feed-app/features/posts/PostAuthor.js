import React from "react";
import {useSelector} from "react-redux";
import {selectUserById} from "../users/usersSlice";
import {Link} from "react-router-dom";

export const PostAuthor = ({userId}) => {
    const author = useSelector(state => selectUserById(state, userId));

    const authorRendering = author ? (
        <Link to={`/feed-app/users/${userId}`}>
            {author.name}
        </Link>
    ) : ('Unknown Author');
    return (
        <span>by {authorRendering}</span>
    )
}