import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostInteraction from './PostInteraction/PostInteraction';

import './Post.css';

class Post extends React.Component {
    state = {
        liked: false,
        likes: this.props.postData.likes
    }

    handleLike = () => {
        this.setState(
            {
                liked: !this.state.liked,
                likes: this.state.liked ? this.state.likes -1 : this.state.likes +1
            }
        );
    }

    render() {
        const {postData} = this.props;
        return(
            <article className="post">
                <PostHeader user={postData.user}/>
                <PostContent data={postData.data} />
                <PostInteraction handleLike={this.handleLike} liked={this.state.liked} likes={this.state.likes}/>
            </article>
        )
    }
}

export default Post;