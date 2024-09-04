import Dashboard from "./Dashboard";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
