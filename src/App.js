import './styles/App.css'
import {useState} from "react";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";

function App() {

    const [posts, setPost] = useState(
        [
            {postId: 1, title: 'js', body: 'text'},
            {postId: 2, title: 'react', body: 'text text'},
            {postId: 3, title: 'redux', body: 'text text text'},
        ]
    )
    return (
        <div>
            <form>
                <input type='text' placeholder='Post name'/>
                <input type='text' placeholder='Post description'/>
                <MyButton title='create post'/>
            </form>
            <PostsList posts={posts} title='List 1'/>
        </div>

    );
}

export default App;
