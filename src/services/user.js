const API_URL = "https://jsonplaceholder.typicode.com/users/";

const getUser = (id) => {
  return fetch(`${API_URL}${id}`).then((res) => res.json());
};

export default getUser;
