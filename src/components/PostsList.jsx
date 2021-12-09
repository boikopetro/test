import React, {useState} from 'react';
import Post from "./Post";

const PostsList = ({posts, title}) => {
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(p => <Post key={p.postId} post={p}/>)}
        </div>
    );
};

export default PostsList;