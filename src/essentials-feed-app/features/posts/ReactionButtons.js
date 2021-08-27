import React from "react";
import {useDispatch} from "react-redux";
import {reactionAdded} from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export const ReactionButtons = ({post}) => {
    const onReactionClick = (postId, reactionName) => () => dispatch(reactionAdded({postId, reactionName}));
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji)
        .map(([name, emoji]) => {
            return (
                <button key={name}
                        type={"button"}
                        className={"muted-button reaction-button"}
                        onClick={onReactionClick(post.id, name)}>
                    {emoji} {post.reactions[name] ? post.reactions[name] : '0'}
                </button>
            )
        });

    return (
        <div>{reactionButtons}</div>
    );
}