import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = ({posts, title, remove}) => {
    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((p, i) =>
                        <CSSTransition key={p.id} timeout={500} classNames={'post'}>
                            <Post remove={remove} post={p} number={i + 1}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default PostsList;