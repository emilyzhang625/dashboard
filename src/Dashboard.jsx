import Profile from "./Profile";
import Posts from "./Posts";
import api from "./services/user";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import dashboardIcon from "./assets/dashboard.svg";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { id } = useParams();
  console.log(id);
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const temp = await api.getUser(id);
        const ttemp = await api.getPosts();
        setUser(temp);
        setPosts(ttemp);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="loading-container">
        <img src={dashboardIcon} className="loader"></img>
      </div>
    );

  return (
    <div className="app-container">
      <Profile user={user} className="user-side" />
      <Posts user={user} posts={posts} className="act-side" />
    </div>
  );
}
export default Dashboard;
