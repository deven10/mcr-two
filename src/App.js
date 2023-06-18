import { Routes, Route, NavLink, Link } from "react-router-dom";

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
      <p className="note">
        Hi Team, I was not able to complete the task within allocated time 😥, I
        tried it again and here's the completed task live url:{" "}
        <Link target="_blank" to="https://mcr-two-second-try.vercel.app/">
          Live Link
        </Link>{" "}
        and Github repo:{" "}
        <Link
          to="https://github.com/deven10/mcr-two-second-try"
          target="_blank"
        >
          Code Link
        </Link>
      </p>
      <p className="note">
        What I could make during the time frame is this much only 😔
      </p>
      <hr />
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
