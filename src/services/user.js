const USER_URL = "https://jsonplaceholder.typicode.com/users/";
const POST_URL = "https://jsonplaceholder.typicode.com/posts/";

const getUser = (id) => {
  return fetch(`${USER_URL}${id}`).then((res) => res.json());
};

const getPosts = () => {
  return fetch(POST_URL).then((res) => res.json());
};

export default { getUser, getPosts };
