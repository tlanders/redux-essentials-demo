import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {TimeAgo} from "./TimeAgo";
import {PostAuthor} from "./PostAuthor";
import {ReactionButtons} from "./ReactionButtons";
import {fetchPosts, selectPostById, selectPostIds} from "./postsSlice";

let PostExcerpt = ({postId}) => {
    const post = useSelector(state => selectPostById(state,postId));

    return (
        <article className={"post-excerpt"} key={post.id}>
            <Link to={`/feed-app/posts/${post.id}`}><h3>{post.title}</h3></Link>
            <p><PostAuthor userId={post.user}/>&nbsp;(<TimeAgo timestamp={post.date}/>)</p>
            <p className={"post-content"}>{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post}/>
        </article>
    );
}

export const PostsList = () => {
    const postIds = useSelector(selectPostIds);
    const dispatch = useDispatch();

    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if(postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;
    if(postStatus === 'loading') {
        content = (
            <div className={"loader"}>Loading...</div>
        );
    } else if(postStatus === 'failed') {
        content = (
            <div>{error}</div>
        );
    } else if(postStatus === 'succeeded') {
        content = postIds.map(postId => (
            <PostExcerpt key={postId} postId={postId}/>
        ));
    }

    return (
        <section className={"posts-list"}>
            <h2>Posts</h2>
            {content}
        </section>
    );
}