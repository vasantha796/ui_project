import {
  FaBell,
  FaHome,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";



export const Navbar = () => {
    const {theme,toggleTheme} = useTheme();

  const username =
    localStorage.getItem("username");

  const navigate = useNavigate();

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <div className="container-fluid">

        <h3
          className="navbar-brand mb-0"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          Tecnics
        </h3>

        <div className="d-flex align-items-center gap-3">

          <button
            className="btn btn-outline-light"
            title="Home"
            onClick={() => navigate("/home")}
          >
            <FaHome />
          </button>

          <button
            className="btn btn-outline-light"
            title="Notifications"
          >
            <FaBell />
          </button>

          <div className="d-flex align-items-center gap-2 text-white">

            <FaUserCircle size={28} />

            <span>{username}</span>
            <button
             className="btn btn-light"
               onClick={toggleTheme} >                             
             {theme === "light"
    ? <FaMoon />
    : <FaSun />}
</button>

          </div>

        </div>

      </div>

    </nav>

  );
};