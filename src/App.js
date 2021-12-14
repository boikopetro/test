import './styles/App.css'
import {useState} from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/UI/PostForm";

function App() {
    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <PostForm create={createPost}/>
            {
                posts.length
                    ? <PostsList remove={removePost} posts={posts} title='List 1'/>
                    : <h1 style={{textAlign: 'center'}}>no posts</h1>
            }
        </div>
    );
}

export default App;
