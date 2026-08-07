import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import "../styles/Home.css";
import "../styles/organization.css";

interface Organization {
  id: number;
  name: string;
  location: string;
  email: string;
  phone: string;
  employees: number;
}

export const Organization = () => {

  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      id: 1,
      name: "Tecnics",
      location: "Hyderabad",
      email: "info@tecnics.com",
      phone: "+91 9876543210",
      employees: 120,
    },
    {
      id: 2,
      name: "Infosys",
      location: "Bangalore",
      email: "info@infosys.com",
      phone: "+91 9123456789",
      employees: 2500,
    },
    {
      id: 3,
      name: "TCS",
      location: "Pune",
      email: "info@tcs.com",
      phone: "+91 9988776655",
      employees: 5000,
    },
    {
      id: 4,
      name: "Wipro",
      location: "Chennai",
      email: "info@wipro.com",
      phone: "+91 9001122334",
      employees: 3500,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
const [editId, setEditId] = useState<number | null>(null);

  const [newOrganization, setNewOrganization] = useState({
  name: "",
  location: "",
  email: "",
  phone: "",
  employees: 0,
});
const [search, setSearch] = useState("");

const handleEdit = (organization: Organization) => {

    setShowForm(true);

    setIsEditing(true);

    setEditId(organization.id);

    setNewOrganization({
        name: organization.name,
        location: organization.location,
        email: organization.email,
        phone: organization.phone,
        employees: organization.employees,
    });

};

const handleAddOrganization = () => {

  if (
    !newOrganization.name ||
    !newOrganization.location ||
    !newOrganization.email ||
    !newOrganization.phone ||
    newOrganization.employees <= 0
  ) {
    alert("Please fill all the fields.");
    return;
  }

  const organization = {
    id: organizations.length + 1,
    ...newOrganization,
  };

  setOrganizations([...organizations, organization]);

  setNewOrganization({
    name: "",
    location: "",
    email: "",
    phone: "",
    employees: 0,
  });

  setShowForm(false);
};
const handleUpdate = () => {

    const updatedOrganizations = organizations.map((organization) =>

        organization.id === editId

            ? {
                ...organization,
                ...newOrganization,
            }

            : organization

    );

    setOrganizations(updatedOrganizations);

    setShowForm(false);

    setIsEditing(false);

    setEditId(null);

    setNewOrganization({
        name: "",
        location: "",
        email: "",
        phone: "",
        employees: 0,
    });

};
const handleDelete = (id: number) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this organization?"
    );

    if (!confirmDelete) return;

    const updatedOrganizations = organizations.filter(
        (organization) => organization.id !== id
    );

    setOrganizations(updatedOrganizations);

};
const filteredOrganizations = organizations.filter((organization) =>
  organization.name.toLowerCase().includes(search.toLowerCase())
);



  return (
    <div className="home">

      <Navbar />

      <div className="home-body">

        <Side_bar />

        <main className="content">

          <div className="organization-header">

            <h2>Organizations</h2>
            <div className="organization-top">

  <input
    type="text"
    placeholder="Search Organization..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-box"
  />

  <button
    className="add-btn"
    onClick={() => setShowForm(true)}
  >
    + Add Organization
  </button>

</div>

           
          </div>
          {showForm && (
  <div className="form-container">

    <input
      type="text"
      placeholder="Organization Name"
      value={newOrganization.name}
      onChange={(e) =>
        setNewOrganization({
          ...newOrganization,
          name: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="Location"
      value={newOrganization.location}
      onChange={(e) =>
        setNewOrganization({
          ...newOrganization,
          location: e.target.value,
        })
      }
    />

    <input
      type="email"
      placeholder="Email"
      value={newOrganization.email}
      onChange={(e) =>
        setNewOrganization({
          ...newOrganization,
          email: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="Phone"
      value={newOrganization.phone}
      onChange={(e) =>
        setNewOrganization({
          ...newOrganization,
          phone: e.target.value,
        })
      }
    />

    <input
      type="number"
      placeholder="Employees"
      value={newOrganization.employees}
      onChange={(e) =>
        setNewOrganization({
          ...newOrganization,
          employees: Number(e.target.value),
        })
      }
    />

         <button
          className="save-btn"
         onClick={isEditing ? handleUpdate : handleAddOrganization}
           >
           {isEditing ? "Update" : "Save"}
        </button>

    <button className="cancel-btn"
      onClick={() => setShowForm(false)}
    >
      Cancel
    </button>

  </div>
)}

          <table className="organization-table">

            <thead>

              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Employees</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredOrganizations.map((organization) => (

                <tr key={organization.id}>

                  <td>{organization.id}</td>
                  <td>{organization.name}</td>
                  <td>{organization.location}</td>
                  <td>{organization.email}</td>
                  <td>{organization.phone}</td>
                  <td>{organization.employees}</td>

                  <td>

                    <button className="view-btn">
                      View
                    </button>

                    <button
                   className="edit-btn"
                   onClick={() => handleEdit(organization)}>
                     Edit
                     </button>

                    <button
                   className="dlt-btn"
                   onClick={() => handleDelete(organization.id)}>
                                                                   
                   Delete
                 </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </main>

      </div>

    </div>
  );
};