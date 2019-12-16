import React from 'react';
import Post from './Post/Post';
import './Postlist.css';
import api from './posts.json';

class PostList extends React.Component {
    state = {
        posts : api
    }
    
    displayPosts = (posts) => {
        if(this.props.name){
            posts = posts.filter(post => {
                return post.user.name === this.props.name;
            });
        }
        return posts.map(index => {
            return(
                <Post key={index._id} postData={index}/>
            )
        })
    }

    render(){
        return(
            <section id="post-list">
                {this.displayPosts(this.state.posts)}
            </section>
        )
    }
}

export default PostList;