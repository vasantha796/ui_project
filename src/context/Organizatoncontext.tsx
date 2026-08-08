import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

export interface Organization {
  id: number;
  name: string;
  location: string;
  email: string;
  phone: string;
  employees: number;
  services :string[];
}

interface OrganizationContextType {
  organizations: Organization[];
  setOrganizations: React.Dispatch<
    React.SetStateAction<Organization[]>
  >;

  deletedOrganizations: Organization[];
  setDeletedOrganizations: React.Dispatch<
    React.SetStateAction<Organization[]>
  >;
}

const OrganizationContext =
  createContext<OrganizationContextType | undefined>(
    undefined
  );

export const OrganizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
    

  const [organizations, setOrganizations] =
    useState<Organization[]>(() => {


      const savedOrganizations =
        localStorage.getItem("organizations");

      return savedOrganizations
        ? JSON.parse(savedOrganizations)
        : [
            {
              id: 1,
              name: "Tecnics",
              location: "Hyderabad",
              email: "info@tecnics.com",
              phone: "+91 9876543210",
              employees: 120,
              services: ["E-Invoice","Oman Invoice"]
            },
            {
              id: 2,
              name: "Infosys",
              location: "Bangalore",
              email: "info@infosys.com",
              phone: "+91 9123456789",
              employees: 2500,
                services: ["Saudi Invoice", "UAE Invoice"]
            },
            {
              id: 3,
              name: "TCS",
              location: "Pune",
              email: "info@tcs.com",
              phone: "+91 9988776655",
              employees: 5000,
              services: ["Purchase Invoice"]
            },
            {
              id: 4,
              name: "Wipro",
              location: "Chennai",
              email: "info@wipro.com",
              phone: "+91 9001122334",
              employees: 3500,
             services: ["Sales Invoice"]
            },
          ];
    });
    const [deletedOrganizations, setDeletedOrganizations] =
  useState<Organization[]>([]);
    

  useEffect(() => {
    localStorage.setItem(
      "organizations",
      JSON.stringify(organizations)
    );
  }, [organizations]);

  return (
    <OrganizationContext.Provider
  value={{
    organizations,
    setOrganizations,
    deletedOrganizations,
    setDeletedOrganizations,
  }}
>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => {

  const context =
    useContext(OrganizationContext);

  if (!context) {
    throw new Error(
      "useOrganization must be used inside OrganizationProvider"
    );
  }

  return context;
};