import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import { users } from "../data/Users";
import { services } from "../data/Services";
import { useNavigate } from "react-router-dom";
import { useOrganization } from "../context/Organizatoncontext";
import "../styles/Home.css";
export const Home = () => {

  const navigate = useNavigate();

  const { organizations } =
    useOrganization();

  const Users = users.length;
  const Services = services.length;

  const username =
    localStorage.getItem("username");

  return (

    <div className="home">

      <Navbar />

      <div className="home-body">

        <Side_bar />

        <main className="container-fluid p-4">

          <h1 className="mb-4">
            Dashboard
          </h1>

          <div className="row g-4">

            <div className="col-md-4">

              <div
                className="card shadow-sm h-100" 
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/users")
                }
              >

                <div className="card-body text-center">

                  <h4>Users</h4>

                  <h1>{Users}</h1>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div
                className="card shadow-sm h-100"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/organization")
                }
              >

                <div className="card-body text-center">

                  <h4>Organizations</h4>

                  <h1>
                    {organizations.length}
                  </h1>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div
                className="card shadow-sm h-100"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/services/1")
                }
              >

                <div className="card-body text-center">

                  <h4>Services</h4>

                  <h1>{Services}</h1>

                </div>

              </div>

            </div>

          </div>

          <div className="card shadow-sm mt-4 w-100">

            <div className="card-body">

              <h4>
                Welcome to Tecnics Dashboard,
                {" "}
                {username}
              </h4>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};