import "./Posts.css";

function Posts({ user, posts }) {
  const userPosts = posts.filter((post) => post.userId === user.id);

  return (
    <div className="posts-container">
      <div className="sect-title">Activity</div>
      {userPosts.map((post) => (
        <div key={post.id}>
          <div className="box-container">
            <div className="inline-post">
              <div className="post-title">@{user.username}</div>
              {post.title}
            </div>
            <div className="line"></div>
            <div>{post.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
