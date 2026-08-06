interface Service {
  id: number;
  invoiceName: string;
  invoiceNo: string;
  country: string;
  customer: string;
  amount: number;
  status: string;
}


export const services: Service[] = [
    {
      id: 1,
      invoiceName: "E-Invoice",
      invoiceNo: "INV-1001",
      country: "India",
      customer: "ABC Pvt Ltd",
      amount: 15000,
      status: "Generated",
    },
    {
      id: 2,
      invoiceName: "Oman Invoice",
      invoiceNo: "OM-2001",
      country: "Oman",
      customer: "XYZ LLC",
      amount: 45000,
      status: "Paid",
    },
    {
      id: 3,
      invoiceName: "Saudi Invoice",
      invoiceNo: "SA-3001",
      country: "Saudi Arabia",
      customer: "Al Noor",
      amount: 60000,
      status: "Pending",
    },
    {
      id: 4,
      invoiceName: "UAE Invoice",
      invoiceNo: "UAE-4001",
      country: "UAE",
      customer: "Dubai Tech",
      amount: 80000,
      status: "Generated",
    },
    {
      id: 5,
      invoiceName: "Purchase Invoice",
      invoiceNo: "PUR-5001",
      country: "India",
      customer: "Global Traders",
      amount: 25000,
      status: "Approved",
    },
    {
      id: 6,
      invoiceName: "Sales Invoice",
      invoiceNo: "SAL-6001",
      country: "India",
      customer: "Sai Enterprises",
      amount: 55000,
      status: "Paid",
    },
  ];