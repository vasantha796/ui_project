
import { FaBell,FaHome,FaUserCircle } from "react-icons/fa";
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";
export const Navbar =() =>{
   
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <h2 className="tecnics-btn">Tecnics</h2>
            <div className="nav-left">
                <button className="home-btn" onClick={() =>navigate("/home")} title="home">
                    <FaHome/>
                </button>
                <button className="bell-btn" title="bell">
                    <FaBell/>
                </button>
                
                <span className="user-info" title="username">{username}</span>
                <button className="user-logo-btn" title="user">
                    <FaUserCircle/>
                </button>
            </div>
            
        </div>
    )
}