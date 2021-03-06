import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost} from "./postsSlice";
import {selectAllUsers} from "../users/usersSlice";
import {unwrapResult} from "@reduxjs/toolkit";

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onUserChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = async () => {
        if(canSave) {
            try {
                setAddRequestStatus('pending');
                const resultAction = await dispatch(addNewPost({title, content, user: userId}));
                unwrapResult(resultAction);
                setTitle('');
                setContent('');
                setUserId('');
            } catch(err) {
                console.log('Failed to save new post:', err);
            } finally {
                setAddRequestStatus('idle');
            }
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