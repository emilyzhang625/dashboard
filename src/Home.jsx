import dashboardIcon from "./assets/dashboard.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleGo = () => {
    navigate("/1");
  };

  return (
    <div>
      <div className="loading-container">
        <img src={dashboardIcon} className="loader"></img>
        <button onClick={handleGo}>View Dashboard</button>
      </div>
    </div>
  );
}

export default Home;
