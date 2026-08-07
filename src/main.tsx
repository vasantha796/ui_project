import { OrganizationProvider } from './context/Organizatoncontext.tsx'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
 <OrganizationProvider>
    <App />
 </OrganizationProvider>
)



