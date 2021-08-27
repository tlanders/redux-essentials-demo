import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";

export const SinglePostPage = ({match}) => {
    const {postId} = match.params;

    const post = useSelector(state => state.posts.find(post => post.id === postId));

    if(!post) {
        console.log('post not found, id=' + postId);
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        );
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p><PostAuthor userId={post.user}/>&nbsp;(<TimeAgo timestamp={post.date}/>)</p>
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post}/>
            </article>
            <Link to={`/feed-app/posts/edit/${post.id}`} className="button">
                Edit Post
            </Link>
        </section>
    );
}