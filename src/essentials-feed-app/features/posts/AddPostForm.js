import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "./postsSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onUserChanged = e => setUserId(e.target.value);

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const onSavePostClicked = () => {
        if(canSave) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>&nbsp;
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />&nbsp;
                <label htmlFor="postContent">Content:</label>&nbsp;
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />&nbsp;
                <label htmlFor="user">Author:</label>&nbsp;
                <select name={"user"} onChange={onUserChanged}>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                            )
                    )}
                </select>
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
}