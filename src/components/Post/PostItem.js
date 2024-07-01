import React from "react";

const PostItem = ({ post, onDelete }) => {
  return (
    <div>
      <span>. </span>
      <span>{`${post.id} - ${post.title}`}</span>
    </div>
  );
};

export default PostItem;
