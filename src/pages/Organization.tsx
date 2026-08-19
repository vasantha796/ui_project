import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import type { Organization} from "../context/Organizatoncontext";
import { useOrganization } from "../context/Organizatoncontext";
import "../styles/Home.css";
import "../styles/organization.css";




export const OrganizationPage = () => {
  const {
    organizations,
    setOrganizations,
    deletedOrganizations,
    setDeletedOrganizations,
  } = useOrganization();

  const [showForm, setShowForm] =
    useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  const [editId, setEditId] =
    useState<number | null>(null);

  const [search, setSearch] =
    useState("");

  const [selectedOrganization,
    setSelectedOrganization] =
    useState<Organization | null>(null);

  const [newOrganization,
    setNewOrganization] =
    useState({
      name: "",
      location: "",
      email: "",
      phone: "",
      employees: 0,
      services: [] as string[]
    });
    const handleAddOrganization = () => {
  if (
    !newOrganization.name ||
    !newOrganization.location ||
    !newOrganization.email ||
    !newOrganization.phone ||
    newOrganization.employees <= 0 ||
    !newOrganization.services
  ) {
    alert("Please fill all fields");
    return;
  }

  const organization: Organization = {
    id: Date.now(),
    ...newOrganization,
  };

  setOrganizations([
    ...organizations,
    organization,
  ]);

  setNewOrganization({
    name: "",
    location: "",
    email: "",
    phone: "",
    employees: 0,
    services: [] as string[],
  });

  setShowForm(false);
};
    

  const handleEdit = (
    organization: Organization
  ) => {

    setShowForm(true);

    setIsEditing(true);

    setEditId(organization.id);

    setNewOrganization({
      name: organization.name,
      location: organization.location,
      email: organization.email,
      phone: organization.phone,
      employees: organization.employees,
      services:organization.services,
    });
  };

  const handleUpdate = () => {

    const updatedOrganizations =
      organizations.map((organization) =>
        organization.id === editId
          ? {
              ...organization,
              ...newOrganization,
            }
          : organization
      );

    setOrganizations(
      updatedOrganizations
    );

    setIsEditing(false);

    setEditId(null);

    setShowForm(false);

    setNewOrganization({
      name: "",
      location: "",
      email: "",
      phone: "",
      employees: 0,
      services: [],
    });
  };

  const handleDelete = (id: number) => {

  const organizationToDelete =
    organizations.find(
      (organization) =>
        organization.id === id
    );

  if (!organizationToDelete) return;

  const confirmDelete =
    window.confirm(
      "Are you sure you want to delete?"
    );

  if (!confirmDelete) return;

  setDeletedOrganizations([
    ...deletedOrganizations,
    organizationToDelete,
  ]);

  setOrganizations(
    organizations.filter(
      (organization) =>
        organization.id !== id
    )
  );

  if (
    selectedOrganization?.id === id
  ) {
    setSelectedOrganization(null);
  }

};
const handleRestore = (
  organization: Organization
) => {

  setOrganizations([
    ...organizations,
    organization,
  ]);

  setDeletedOrganizations(
    deletedOrganizations.filter(
      (deletedOrganization) =>
        deletedOrganization.id !==
        organization.id
    )
  );

};

  const handleView = (
    organization: Organization
  ) => {

    if (
      selectedOrganization?.id ===
      organization.id
    ) {
      setSelectedOrganization(
        null
      );
    } else {
      setSelectedOrganization(
        organization
      );
    }
  };

  const filteredOrganizations =
    organizations.filter(
      (organization) =>
        organization.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
        )

  return (
    <div className="home">

      <Navbar />

      <div className="home-body">

        <Side_bar />

        <main className="content">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Organizations</h2>

            <div className="d-flex gap-2">

              <input
                type="text"
                placeholder="Search Organization"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="form-control"
                style={{width:"250px", marginRight:"250px"}}
              />

              <button
                className="btn btn-success"
                onClick={() =>
                  setShowForm(true)
                }
              >
                + Add Organization
              </button>

            </div>

          </div>

          {showForm && (

            <div className="card p-3 mb-4">

              <input
              className="form-control mb-2"
                placeholder="Name"
                value={
                  newOrganization.name
                }
                onChange={(e) =>
                  setNewOrganization({
                    ...newOrganization,
                    name:
                      e.target.value,
                  })
                }
              />

              <input
              className="form-control mb-2"
                placeholder="Location"
                value={
                  newOrganization.location
                }
                onChange={(e) =>
                  setNewOrganization({
                    ...newOrganization,
                    location:
                      e.target.value,
                  })
                }
              />

              <input
              className="form-control mb-2"
                placeholder="Email"
                value={
                  newOrganization.email
                }
                onChange={(e) =>
                  setNewOrganization({
                    ...newOrganization,
                    email:
                      e.target.value,
                  })
                }
              />

              <input
              className="form-control mb-2"
                placeholder="Phone"
                value={
                  newOrganization.phone
                }
                onChange={(e) =>
                  setNewOrganization({
                    ...newOrganization,
                    phone:
                      e.target.value,
                  })
                }
              />

              <input
              className="form-control mb-2"
                type="number"
                placeholder="Employees"
                value={
                  newOrganization.employees
                }
                onChange={(e) =>
                  setNewOrganization({
                    ...newOrganization,
                    employees:
                      Number(
                        e.target.value
                      ),
                  })
                }
              />
             <input
  className="form-control mb-2"
  type="text"
  placeholder="Services"
  value={newOrganization.services.join(",")}
  onChange={(e) =>
    setNewOrganization({
      ...newOrganization,
      services: e.target.value
        .split(",")
        .map((service) => service.trim()),
    })
  }
/>

              <button
                className="btn btn-success mb-2"
                onClick={
                  isEditing
                    ? handleUpdate
                    : handleAddOrganization
                }
              >
                {isEditing
                  ? "Update"
                  : "Save"}
              </button>

              <button
                className="btn btn-secondary mb-2"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

            </div>

          )}

          {selectedOrganization && (

            <div className="view-card ">

              <h3>
                Organization Details
              </h3>

              <p>
                Name:
                {" "}
                {selectedOrganization.name}
              </p>

              <p>
                Location:
                {" "}
                {selectedOrganization.location}
              </p>

              <p>
                Email:
                {" "}
                {selectedOrganization.email}
              </p>

              <p>
                Phone:
                {" "}
                {selectedOrganization.phone}
              </p>

              <p>
                Employees:
                {" "}
                {selectedOrganization.employees}
              </p>
              <div className="services-container">
              {selectedOrganization.services?.map((service,index)=>(
                <span key={index}className="service-tag">{service}</span>
              ))}
            </div>

            </div>

          )}

          <table className="table table-striped table-bordered table-hover">

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

              {filteredOrganizations.map(
                (organization) => (
                  <tr
                    key={
                      organization.id
                    }
                  >
                    <td>
                      {organization.id}
                    </td>
                    <td>
                      {organization.name}
                    </td>
                    <td>
                      {organization.location}
                    </td>
                    <td>
                      {organization.email}
                    </td>
                    <td>
                      {organization.phone}
                    </td>
                    <td>
                      {
                        organization.employees
                      }
                    </td>
                   
                  

                    <td>

                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() =>
                          handleView(
                            organization
                          )
                        }
                      >
                        View
                      </button>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          handleEdit(
                            organization
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(
                            organization.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )}
              

            </tbody>

          </table>
          <h2
  style={{
    marginTop: "30px",
    marginBottom: "10px",
  }}
>
  Deleted Organizations
</h2>

<table className="table table-bordered table-hover">

  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Restore</th>
    </tr>
  </thead>

  <tbody>

    {deletedOrganizations.map(
      (organization) => (

        <tr key={organization.id}>

          <td>{organization.id}</td>

          <td>{organization.name}</td>

          <td>

            <button
              className="btn btn-success btn-sm"
              onClick={() =>
                handleRestore(
                  organization
                )
              }
            >
              Restore
            </button>

          </td>

        </tr>

      )
    )}

  </tbody>

</table>

        </main>

      </div>

    </div>
  );
};