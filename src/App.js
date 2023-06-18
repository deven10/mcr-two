import { Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Archives } from "./Pages/Archives/Archives";

import "./App.css";
function App() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none",
      color: "#000",
    };
  };

  return (
    <div className="App">
      <nav className="navlinks">
        <NavLink style={styles} className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink style={styles} className="nav-item" to="/archives">
          Archives
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </div>
  );
}

export default App;
