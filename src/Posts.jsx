import api from "./services/user";
import { useEffect, useState } from "react";

function Posts({ id }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.getPosts().then((res) => {
      const all = res;
      setPosts(all.filter((post) => post.userId === id));
    });
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
