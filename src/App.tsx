import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { USER } from "./pages/Users"
import { Services } from "./pages/Services"
import { OrganizationPage } from "./pages/Organization"
import {Signup} from "./pages/signup"
import { OrganizationDetails } from "./pages/OrganizationDetails"


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/"element={<Login />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/users" element={<USER/>}/>
    <Route path ="/services/:id" element={<Services/>}/>
    <Route path="/signup" element={<Signup />} />
  <Route path="/organization" element={<OrganizationPage />} />
<Route path="/organization/:id" element={<OrganizationDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
