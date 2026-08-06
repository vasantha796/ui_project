import { FaBell,FaHome } from "react-icons/fa";
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";
export const Navbar =() =>{
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <h2>Tecnics</h2>
            <div className="nav-left">
                <button className="home-btn" onClick={() =>navigate("/home")}>
                    <FaHome/>
                </button>
                <button className="bell-btn">
                    <FaBell/>
                </button>
                
                <span className="user-info">{username}</span>
            </div>
            
        </div>
    )
}