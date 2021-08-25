import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {postUpdated} from "./postsSlice";
import {useHistory} from "react-router";

export const EditPostForm = ({match}) => {
    const id = match.params.postId;
    const post = useSelector(state => state.posts.find(post => post.id === id));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSaveClick = () => {
        if(title && content) {
            dispatch(postUpdated({id, title, content}));
            history.push(`/feed-app/posts/${id}`);
        }
    }

    return (
        <section>
            <article className="post">
                <form>
                    <label htmlFor={"title"}>Title:</label>
                    <input type={"text"}
                           value={title}
                           name={"title"}
                        onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor={"content"}>Content:</label>
                    <input type={"text"}
                           name={"content"}
                           value={content}
                            onChange={(e) => setContent(e.target.value)}/>
                    <button type={"button"} onClick={onSaveClick}>Save</button>
                </form>
            </article>
        </section>
    );
}