import Post from "./Post";

const PostsList = ({posts, title, remove}) => {
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {
                posts.map((p, i) =>
                    <Post remove={remove} key={p.id} post={p} number={i + 1}/>)
            }
        </div>
    );
};

export default PostsList;