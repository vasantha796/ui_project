import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrganization } from "../context/Organizatoncontext";
import "../styles/Home.css";

export const Side_bar = () => {

    const navigate = useNavigate();

    const { organizations } = useOrganization();

    const [showOrganization, setShowOrganization] = useState(()=>{
        return localStorage.getItem("showOrganization") === "true";
    });

    const [showServices, setShowServices] = useState(()=>{
        return localStorage.getItem("showService") === "true";
    });

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
    };
    const toggleOrganization =() =>{
        const newValue = !showOrganization;
        setShowOrganization(newValue);
        localStorage.setItem("showOrganization",String(newValue))
    }
    const toggleService = () =>{
        const newValue = !showServices;
        setShowServices(newValue);
        localStorage.setItem("showService",String(newValue))
    };

    return (
        <div className="sidebar">

            <div className="menu">

                <button
                    className="menu-btn"
                    onClick={() => navigate("/users")}
                >
                    Users
                </button>

                {/* Organizations */}

                <button
                    className="menu-btn"
                    onClick ={toggleOrganization}>
                    {showOrganization ? "▼" : "▶"} Organization
                </button>

                {showOrganization && (
                    <div className="submenu">

                        <button
                            onClick={() => navigate("/organization")}
                        >
                            All Organizations
                        </button>

                        {organizations.map((organization) => (
                            <button
                                key={organization.id}
                                onClick={() =>
                                    navigate(`/organization/${organization.id}`)
                                }
                            >
                                {organization.name}
                          
                            </button>
                           
                        ))}

                    </div>
                )}

                {/* Services */}

                <button
                    className="menu-btn"
                    onClick={toggleService}>
                    {showServices ? "▼" : "▶"} Services
                </button>

                {showServices && (
                    <div className="submenu">

                        <button
                            onClick={() => navigate("/services/1")}
                        >
                            E-Invoice
                        </button>

                        <button
                            onClick={() => navigate("/services/2")}
                        >
                            Oman Invoice
                        </button>

                        <button
                            onClick={() => navigate("/services/3")}
                        >
                            Saudi Invoice
                        </button>

                        <button
                            onClick={() => navigate("/services/4")}
                        >
                            UAE Invoice
                        </button>

                        <button
                            onClick={() => navigate("/services/5")}
                        >
                            Purchase Invoice
                        </button>

                        <button
                            onClick={() => navigate("/services/6")}
                        >
                            Sales Invoice
                        </button>

                    </div>
                )}

            </div>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>
    );
};