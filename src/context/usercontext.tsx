import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

export interface User {
 id: number;
  name: string;
  email: string;
  role: string;

}

interface userContextType {
  users: User[];
  setusers: React.Dispatch<
    React.SetStateAction<User[]>
  >;

  deletedusers: User[];
  setDeletedusers: React.Dispatch<
    React.SetStateAction<User[]>
  >;
}

const userContext =
  createContext<userContextType | undefined>(
    undefined
  );

export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    

  const [users, setusers] =
    useState<User[]>(() => {


      const savedusers =
        localStorage.getItem("users");

      return savedusers
        ? JSON.parse(savedusers)
        : [
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
  ]
    });
    const [deletedusers, setDeletedusers] =
  useState<User[]>([]);
    

  useEffect(() => {
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
  }, [users]);

  return (
    <userContext.Provider
  value={{
      users,
      setusers,
      deletedusers,
      setDeletedusers,
  }}
>
      {children}
    </userContext.Provider>
  );
};

export const useuser = () => {

  const context =
    useContext(userContext);

  if (!context) {
    throw new Error(
      "useUser must be used inside UserProvider"
    );
  }

  return context;
};