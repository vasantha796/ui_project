import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export const Side_bar = () => {

    const navigate = useNavigate();

    const [showOrganization, setShowOrganization] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
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


           

                <button
                    className="menu-btn"
                    onClick={() =>
                        setShowOrganization(!showOrganization)
                    }
                >
                    {showOrganization ? "▼" : "▶"} Organization
                </button>

                {showOrganization && (

                    <div className="submenu">

                        <button
                            onClick={() => navigate("/organization/1")}
                        >
                            Tecnics
                        </button>

                        <button
                            onClick={() => navigate("/organization/2")}
                        >
                            Infosys
                        </button>

                        <button
                            onClick={() => navigate("/organization/3")}
                        >
                            TCS
                        </button>

                        <button
                            onClick={() => navigate("/organization/4")}
                        >
                            Wipro
                        </button>

                    </div>

                )}


                {/* Services */}

                <button
                    className="menu-btn"
                    onClick={() =>
                        setShowServices(!showServices)
                    }
                >
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