interface Organization {
  id: number;
  name: string;
  location: string;
  email: string;
  employees: number;
  phone: string;
}


export const organizations: Organization[] = [
    {
      id: 1,
      name: "Tecnics",
      location: "Hyderabad",
      email: "info@tecnics.com",
      employees: 120,
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Infosys",
      location: "Bangalore",
      email: "info@infosys.com",
      employees: 2500,
      phone: "+91 9123456789",
    },
    {
      id: 3,
      name: "TCS",
      location: "Pune",
      email: "info@tcs.com",
      employees: 5000,
      phone: "+91 9988776655",
    },
    {
      id: 4,
      name: "Wipro",
      location: "Chennai",
      email: "info@wipro.com",
      employees: 3500,
      phone: "+91 9001122334",
    },
  ];
