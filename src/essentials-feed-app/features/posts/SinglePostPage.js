import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const SinglePostPage = ({match}) => {
    const {postId} = match.params;
    console.log('single page - id=', postId);

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
                <p className="post-content">{post.content}</p>
            </article>
            <Link to={`/feed-app/posts/edit/${post.id}`} className="button">
                Edit Post
            </Link>
        </section>
    );
}