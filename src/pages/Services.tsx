import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Side_bar } from "../components/Side_bar";
import "../styles/Home.css";
import "../styles/Services.css";

interface Service {
  id: number;
  invoiceName: string;
  invoiceNo: string;
  country: string;
  customer: string;
  amount: number;
  status: string;
}

export const Services = () => {

  const { id } = useParams();

  const services: Service[] = [
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

  const service = services.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="home">

      <Navbar />

      <div className="home-body">

        <Side_bar />

        <main className="content">

          {service ? (

            <div className="service-card">

              <h2>{service.invoiceName}</h2>

              <table className="service-table">

                <tbody>

                  <tr>
                    <td><strong>Invoice No</strong></td>
                    <td>{service.invoiceNo}</td>
                  </tr>

                  <tr>
                    <td><strong>Country</strong></td>
                    <td>{service.country}</td>
                  </tr>

                  <tr>
                    <td><strong>Customer</strong></td>
                    <td>{service.customer}</td>
                  </tr>

                  <tr>
                    <td><strong>Amount</strong></td>
                    <td>₹ {service.amount}</td>
                  </tr>

                  <tr>
                    <td><strong>Status</strong></td>
                    <td>{service.status}</td>
                  </tr>

                </tbody>

              </table>

              <button className="edit-btn">
                Edit
              </button>

            </div>

          ) : (

            <h2>Select an invoice from the Services menu.</h2>

          )}

        </main>

      </div>

    </div>
  );
};