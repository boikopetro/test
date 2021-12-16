import './styles/App.css'
import {useEffect, useState} from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {usePosts} from "./hooks/usePosts";
import {getPageCount, getPagesArray} from "./utils/pages";


function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(() => fetchPosts(limit, page), [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter posts={posts} filter={filter} setFilter={setFilter}/>
            {postError && <h1>Error ${postError}</h1>}
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
                : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='List 1'/>
            }
            <div className='page__wrapper'>
                {
                    pagesArray.map(p =>
                        <span
                            key={p}
                            className={page === p ? 'page page__current' : 'page'}
                            onClick={() => changePage(p)}
                        >
                            {p}
                        </span>)
                }
            </div>
        </div>
    );
}

export default App;
