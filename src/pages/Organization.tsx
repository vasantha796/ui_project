import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import "../styles/Home.css";
import "../styles/organization.css";


interface Organization {
  id: number;
  name: string;
  location: string;
  email: string;
  employees: number;
  phone: string;
}



export const Organization = () => {
  const { id } = useParams();

  const organizations: Organization[] = [
    {
      id: 1,
      name: "Tecnics",
      location: "Hyderabad",
      email: "info@tecnics.com",
      employees: 120,
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Infosys",
      location: "Bangalore",
      email: "info@infosys.com",
      employees: 2500,
      phone: "+91 9123456789",
    },
    {
      id: 3,
      name: "TCS",
      location: "Pune",
      email: "info@tcs.com",
      employees: 5000,
      phone: "+91 9988776655",
    },
    {
      id: 4,
      name: "Wipro",
      location: "Chennai",
      email: "info@wipro.com",
      employees: 3500,
      phone: "+91 9001122334",
    },
  ];

 

  const organization = organizations.find(
    (org) => org.id === Number(id)
  );
  

  return (
    <div className="home">
      <Navbar />

      <div className="home-body">
        <Side_bar />

        <main className="content">
          {organization ? (
            <div className="organization-card">

              <h2>Organization Details</h2>

              <table className="org-table">

                <tbody>

                  <tr>
                    <td><strong>ID</strong></td>
                    <td>{organization.id}</td>
                  </tr>

                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{organization.name}</td>
                  </tr>

                  <tr>
                    <td><strong>Location</strong></td>
                    <td>{organization.location}</td>
                  </tr>

                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{organization.email}</td>
                  </tr>

                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>{organization.phone}</td>
                  </tr>

                  <tr>
                    <td><strong>Employees</strong></td>
                    <td>{organization.employees}</td>
                  </tr>

                </tbody>

              </table>

             
              <button className="add-btn">
                Add
                </button> 
              <button className="edit-btn">
                Edit
              </button>

            </div>
          ) : (
            <h2>Organization Not Found</h2>
          )}
        </main>
      </div>
    </div>
  );
};