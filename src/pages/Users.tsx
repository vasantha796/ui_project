import { Navbar } from "../components/Navbar"
import { Side_bar } from "../components/Side_bar"
import "../styles/users.css"
export const Users = () =>{
    const Users =[
        {
            id:1,
            name:"Rahul",
            email:"Rahul21@gmail.com",
            role:"Admin",
        },
        {
            id:2,
            name:"Priya",
            email:"Priya12@gmail.com",
            role:"Employee",
        },
        {
            id:3,
            name:"Raghav",
            email:"Raghav123@gmail.com",
            role:"Employee",
        },
        {
            id:4,
            name:"Rahul.R",
            email:"Rahul121@gmail.com",
            role:"Employee",
        },
        {
            id:5,
            name:"Wincy",
            email:"wincy21@gmail.com",
            role:"Manager",
        }
    ]
  
    return (
        <div className="home">
            <Navbar/>
            <div className="home-body">
                <Side_bar/>
                <main className="content">
                    <h1>Users</h1>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((user)=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </main>
            </div>
        </div>
    )
}