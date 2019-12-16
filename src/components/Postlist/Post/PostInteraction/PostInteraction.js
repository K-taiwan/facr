import React from 'react';
import './PostInteraction.css'

const PostInteraction = (props) => {
    return (
        <section className="post-interaction">
            <p>{props.likes} <em>liked this</em></p>
            <button onClick={props.handleLike} className={`like-button ${props.liked && "liked"}`}>
                {props.liked ? "Liked" : "Like"}
            </button>
        </section>
    )
}

export default PostInteraction;