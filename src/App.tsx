import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Users } from "./pages/Users"
import { Services } from "./pages/Services"
import { OrganizationPage } from "./pages/Organization"

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Login />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path ="/services/:id" element={<Services/>}/>
  <Route path="/organization" element={<OrganizationPage />} />
<Route path="/organization/:id" element={<OrganizationPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
