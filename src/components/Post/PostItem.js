import React from 'react';

const PostItem = ({post,onDelete}) => {
    return (
        <div>
            <span>{`${post.id} - ${post.title}`}</span>
            <button onClick={()=>onDelete(post.id)}>x</button>
            <button onClick={()=>onDelete(post.id)}>
                <i class="fa-brands fa-searchengin"></i>
            </button>
        </div>
    );
};

export default PostItem;