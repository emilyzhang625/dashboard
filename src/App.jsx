import Profile from "./Profile";
import Posts from "./Posts";
import api from "./services/user";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState(1);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {},
    address: {},
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getUser(id).then((res) => setUser(res));
    api.getPosts().then((res) => setPosts(res));
  }, [id]);

  return (
    <div className="app-container">
      <Profile user={user} className="user-side" setId={setId} />
      <Posts user={user} posts={posts} className="act-side" />
    </div>
  );
}
export default App;
