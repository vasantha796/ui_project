import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import "../styles/users.css";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Rahul",
      email: "Rahul21@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Priya",
      email: "Priya12@gmail.com",
      role: "Employee",
    },
    {
      id: 3,
      name: "Raghav",
      email: "Raghav123@gmail.com",
      role: "Employee",
    },
    {
      id: 4,
      name: "Rahul.R",
      email: "Rahul121@gmail.com",
      role: "Employee",
    },
    {
      id: 5,
      name: "Wincy",
      email: "wincy21@gmail.com",
      role: "Manager",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);


  const handleAddUser = () => {
    if(!newUser.name || !newUser.email || !newUser.role){
        alert("fill all the fields")
        return;
    }

    const user: User = {
      id: Date.now(),
      ...newUser,
    };
   

    setUsers([...users, user]);

    setNewUser({
      name: "",
      email: "",
      role: "",
    });

    setShowForm(false);
  };

  const handleEdit = (user: User) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(user.id);

    setNewUser({
      
      name: user.name,
      email: user.email,
      role: user.role,
    });
   
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((user) =>
      user.id === editId
        ? {
            ...user,
            ...newUser,
          }
        : user
    );

    setUsers(updatedUsers);

    setShowForm(false);
    setIsEditing(false);
    setEditId(null);
    setNewUser({
        name:"",
        email:"",
        role:"",
    })
  };

  const handleDelete = (id: number) => {
    const usertodelete = users.find((user)=>user.id === id);
    if(!usertodelete) return;
   

  };

  return (
    <div className="home">
      <Navbar />

      <div className="home-body">
        <Side_bar />

        <main className="content">
            <div className="user-header">
          <h1 className="user-title">Users</h1>

          <button
            className="user-add-btn"
            onClick={() => setShowForm(true)}
          >
            + Add User
          </button>
          </div>

          {showForm && (
            <div className="user-form">
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Role"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    role: e.target.value,
                  })
                }
              />

              <button className="save-btn"
                onClick={
                  isEditing
                    ? handleUpdate
                    : handleAddUser
                }
              >
                {isEditing ? "Update" : "Save"}
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                  
                    <button
                      className="user-edit-btn"
                      onClick={() =>
                        handleEdit(user)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="user-delete-btn"
                      onClick={() =>
                        handleDelete(user.id)
                      }
                    >
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