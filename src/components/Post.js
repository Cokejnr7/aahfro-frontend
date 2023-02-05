const Post = ({ post }) => {
  const renderedTags = post.tags.map((tag) => {
    return (
      <button key={tag.id} className="tag">
        {tag.name.toUpperCase()}
      </button>
    );
  });

  return (
    <div className="post">
      <img src={post.image} alt={post.title} />
      <div className="tag-container">{renderedTags}</div>
      <div className="title-container">
        <h3 className="post-title">{post.title.toUpperCase()}</h3>

        <div className="post-footer">
          <h3 className="post-author">BY {post.author.toUpperCase()}</h3>
          <small>{post.published.toUpperCase()}</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
