import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import { users } from "../data/Users";
import { services } from "../data/Services";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useOrganization } from "../context/Organizatoncontext";

export const Home = () => {

    const navigate = useNavigate();

    const { organizations } = useOrganization();

    const Users = users.length;
    const Services = services.length;

    const username = localStorage.getItem("username");

    return (
        <div className="home">

            <Navbar />

            <div className="home-body">

                <Side_bar />

                <main className="content">

                    <h1>Dashboard</h1>

                    <div className="card-container">

                        <div
                            className="card"
                            onClick={() => navigate("/users")}
                        >
                            <h3>Users</h3>
                            <h1>{Users}</h1>
                        </div>

                        <div
                            className="card"
                            onClick={() => navigate("/organization")}
                        >
                            <h3>Organizations</h3>
                            <h1>{organizations.length}</h1>
                        </div>

                        <div
                            className="card"
                            onClick={() => navigate("/services/1")}
                        >
                            <h3>Services</h3>
                            <h1>{Services}</h1>
                        </div>

                    </div>

                    <div className="welcome-card">
                        <h2>
                            Welcome to Tecnics Dashboard {username}
                        </h2>
                    </div>

                </main>

            </div>

        </div>
    );
};