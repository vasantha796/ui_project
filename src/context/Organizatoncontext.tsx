
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export interface Organization {
  id: number;
  name: string;
  location: string;
  email: string;
  employees: number;
}

interface OrganizationContextType {
  organizations: Organization[];
  setOrganizations: React.Dispatch<React.SetStateAction<Organization[]>>;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined);

export const OrganizationProvider = ({ children }: { children: ReactNode }) => {

  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      id: 1,
      name: "Tecnics",
      location: "Hyderabad",
      email: "info@tecnics.com",
      employees: 120,
    },
    {
      id: 2,
      name: "Infosys",
      location: "Bangalore",
      email: "info@infosys.com",
      employees: 2500,
    },
    {
      id: 3,
      name: "TCS",
      location: "Pune",
      email: "info@tcs.com",
      employees: 5000,
    },
    {
      id: 4,
      name: "Wipro",
      location: "Chennai",
      email: "info@wipro.com",
      employees: 3500,
    },
  ]);
  

  return (
    <OrganizationContext.Provider
      value={{ organizations, setOrganizations }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => {
  const context = useContext(OrganizationContext);

  if (!context) {
    throw new Error("useOrganization must be used inside OrganizationProvider");
  }

  return context;
};