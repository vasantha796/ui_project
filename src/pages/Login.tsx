import { useState,useRef,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Page.css"
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
   
<div className="container">

    <div className="left-panel">
        <h1>Hello!</h1>
        
    </div>

    <div className="right-panel">

        <div className="login-box">

            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>

            <input 
            ref={inputRef}
            type="text" placeholder="Username"
             onChange={(e) =>setUsername(e.target.value)}/>

            <input 
            ref={inputRef}
            type="password" placeholder="Password" 
            onChange={(e) =>setPassword(e.target.value)}/>
            
            {error && <p className="error">{error}</p>}

            <button className="login-btn" type="submit">Login</button> &nbsp;
            <button className="signup-btn">Sign up</button>
            </form>
        </div>

    </div>

</div>


    )
}