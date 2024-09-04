import api from "./services/user";
import { useEffect } from "react";

function Posts(id) {
  let posts = [];

  useEffect(() => {
    api.getPosts().then((res) => {
      posts = res;
      console.log(posts);
    });
  }, []);
}

export default Posts;
