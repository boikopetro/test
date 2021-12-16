import './styles/App.css'
import {useState} from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaa', body: 'sss'},
        {id: 2, title: 'dddd', body: 'ggg'},
        {id: 3, title: 'rrr', body: 'bbb'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='name'
                    options={[
                        {value: 'title', name: 'name'},
                        {value: 'body', name: 'description'},

                    ]}
                />
            </div>
            {
                posts.length
                    ? <PostsList remove={removePost} posts={posts} title='List 1'/>
                    : <h1 style={{textAlign: 'center'}}>no posts</h1>
            }
        </div>
    );
}

export default App;
