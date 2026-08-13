import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import type { User } from "../context/usercontext";
import { useuser } from "../context/usercontext";
import "../styles/users.css";

export const USER = () => {

  const {
    users,
    setusers,
    deletedusers,
    setDeletedusers,
  } = useuser();

  const [showForm, setShowForm] = useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  const [editId, setEditId] =
    useState<number | null>(null);

  const [search, setSearch] =
    useState("");


  const [newuser, setNewuser] =
    useState({
      name: "",
      email: "",
      role: "",
    });

  const handleAdduser = () => {

    if (
      !newuser.name ||
      !newuser.email ||
      !newuser.role
    ) {
      alert("Please fill all fields");
      return;
    }

    const user: User = {
      id: Date.now(),
      ...newuser,
    };

    setusers([
      ...users,
      user,
    ]);

    setNewuser({
      name: "",
      email: "",
      role: "",
    });

    setShowForm(false);
  };

  const handleEdit = (
    user: User
  ) => {

    setShowForm(true);

    setIsEditing(true);

    setEditId(user.id);

    setNewuser({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const handleUpdate = () => {

    const updatedusers =
      users.map((user) =>
        user.id === editId
          ? {
              ...user,
              ...newuser,
            }
          : user
      );

    setusers(updatedusers);

    setIsEditing(false);

    setEditId(null);

    setShowForm(false);

    setNewuser({
      name: "",
      email: "",
      role: "",
    });
  };

  const handleDelete = (
    id: number
  ) => {

    const userToDelete =
      users.find(
        (user) =>
          user.id === id
      );

    if (!userToDelete) return;

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete?"
      );

    if (!confirmDelete) return;

    setDeletedusers([
      ...deletedusers,
      userToDelete,
    ]);

    setusers(
      users.filter(
        (user) =>
          user.id !== id
      )
    );
  };

  const handleRestore = (
    user: User
  ) => {

    setusers([
      ...users,
      user,
    ]);

    setDeletedusers(
      deletedusers.filter(
        (deleteduser) =>
          deleteduser.id !== user.id
      )
    );
  };

  const filteredusers =
    users.filter(
      (user) =>
        user.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
          
    );

  return (
    <div className="home">

      <Navbar />

      <div className="home-body">

        <Side_bar />

        <main className="content">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2 className="mb-0">Users</h2>

            <div className="d-flex gap-2">

              <input
                type="text"
                placeholder="Search User"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="form-control"
                style={{width:"250px"}}

              />

              <button
                className="btn btn-success"
                onClick={() =>
                  setShowForm(true)
                }
              >
                + Add User
              </button>

            </div>

          </div>

          {showForm && (

            <div className="form-container">

              <input
                placeholder="Name"
                value={newuser.name}
                onChange={(e) =>
                  setNewuser({
                    ...newuser,
                    name:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Email"
                value={newuser.email}
                onChange={(e) =>
                  setNewuser({
                    ...newuser,
                    email:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Role"
                value={newuser.role}
                onChange={(e) =>
                  setNewuser({
                    ...newuser,
                    role:
                      e.target.value,
                  })
                }
              />

              <button
                className="save-btn"
                onClick={
                  isEditing
                    ? handleUpdate
                    : handleAdduser
                }
              >
                {isEditing
                  ? "Update"
                  : "Save"}
              </button>

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

            </div>

          )}

          <table className="user-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredusers.map(
                (user) => (
                  <tr
                    key={user.id}
                  >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(
                            user
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="dlt-btn"
                        onClick={() =>
                          handleDelete(
                            user.id
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
            Deleted Users
          </h2>

          <table className="user-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Restore</th>
              </tr>
            </thead>

            <tbody>

              {deletedusers.map(
                (user) => (

                  <tr key={user.id}>

                    <td>{user.id}</td>

                    <td>{user.name}</td>

                    <td>

                      <button
                        className="restore-btn"
                        onClick={() =>
                          handleRestore(
                            user
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