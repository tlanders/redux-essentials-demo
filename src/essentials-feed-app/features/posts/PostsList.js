import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {TimeAgo} from "./TimeAgo";
import {PostAuthor} from "./PostAuthor";

export const PostsList = () => {
    const posts = useSelector(state => state.posts);

    const sortedPosts = posts.slice().sort((p1,p2) => p2.date.localeCompare(p1.date));

    const renderedPosts = sortedPosts.map(post => (
        <article className={"post-excerpt"} key={post.id}>
            <Link to={`/feed-app/posts/${post.id}`}><h3>{post.title}</h3></Link>
            <p><PostAuthor userId={post.user}/>&nbsp;(<TimeAgo timestamp={post.date}/>)</p>
            <p className={"post-content"}>{post.content.substring(0,100)}</p>
        </article>
    ));

    return (
        <section className={"posts-list"}>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
}