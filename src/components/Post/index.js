import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {postLoadingSelector, postSelector} from "../../redux/selector";
import {deleteDataThunk, getDataThunk, resetData} from "../../redux/reducers/postSlice";
import PostItem from "./PostItem";

function Post() {
    const posts = useSelector(postSelector);
    const dispatch = useDispatch();
    const isLoading = useSelector(postLoadingSelector);

    const handleGetData = () => {
        dispatch(getDataThunk()).unwrap();
    }

    const handleResetData = () => {
        dispatch(resetData());
    }

    const handleDeleteData = (id) => {
        dispatch(deleteDataThunk(id));
    }

    return (
        <div>
            <p>Posts</p>
            <button onClick={handleGetData}>Get data</button>
            <button onClick={handleResetData}>Reset data</button>
            <p>
                {`Loading: ${isLoading}`}
            </p>

            <div>
                {
                    posts && posts.map(post =>
                        <PostItem key={post.id} post={post} onDelete={handleDeleteData}/>
                    )
                }
            </div>
        </div>
    )
}

export default Post;