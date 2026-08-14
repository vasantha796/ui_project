import { useState,useRef,useEffect} from "react"
import { useNavigate } from "react-router-dom"
// import "../styles/Page.css"
export const Login =() =>{
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] =useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    useEffect (() =>{
        inputRef.current?.focus();

    },[])


    const handleLogin = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(username === "" || password === ""){
            setError("Username and Password are required");
        
            return;
        }
        setError("");
        localStorage.setItem("username",username);
        navigate("/home");
    }
    return(
   
<div className="container-fluid vh-100">

  <div className="row h-100">

    <div className="col-md-6 bg-primary text-white d-flex flex-column justify-content-center align-items-center">

      <h1>Hello!</h1>
      <p>Welcome to Tecnics Dashboard</p>

    </div>

    <div className="col-md-6 d-flex justify-content-center align-items-center">

      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >

        <h2 className="text-center mb-4">
          Login Form
        </h2>

        <form onSubmit={handleLogin}>

          <input
            ref={inputRef}
            type="text"
            placeholder="Username"
            className="form-control mb-3"
            onChange={(e) =>
              setUsername(e.target.value)
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

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

<div className="text-center mt-3">

  <button
    type="submit"
    className="btn btn-primary"
  >
    Login
  </button>

  <p className="mt-3 mb-0">

    Don't have an account?{" "}

    <button
      type="button"
      className="btn btn-link p-0"
      onClick={() => navigate("/signup")}
    >
      Sign Up
    </button>

  </p>

</div>
        

        </form>

      </div>

    </div>

  </div>

</div>


    )
}