import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (
      !username ||
      !email ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem(
      "signupUser",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    navigate("/");
  };

  return (

    <div className="container-fluid vh-100">

      <div className="row h-100">

        <div className="col-md-6 bg-primary text-white d-flex justify-content-center align-items-center">

          <h1>Create Account</h1>

        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">

          <div
            className="card p-4 shadow"
            style={{ width: "400px" }}
          >

            <h2 className="mb-4">
              Sign Up
            </h2>

            <form onSubmit={handleSignup}>

              <input
                type="text"
                placeholder="Username"
                className="form-control mb-3"
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Sign Up
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};