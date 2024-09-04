import dashboardIcon from "./assets/dashboard.svg";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleGo = () => {
    navigate("/1");
  };

  return (
    <div>
      <div className="loading-container">
        <img src={dashboardIcon} className="loader"></img>
        <button onClick={handleGo} className="go-button">
          View Dashboard
        </button>
      </div>
    </div>
  );
}

export default Home;
