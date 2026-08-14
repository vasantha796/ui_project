import { useParams } from "react-router-dom";
import { useOrganization } from "../context/Organizatoncontext";

export const OrganizationDetails = () => {

  const { id } = useParams();

  const { organizations } = useOrganization();

  const organization = organizations.find(
    (org) => org.id === Number(id)
  );

  if (!organization) {
    return <h2>Organization Not Found</h2>;
  }

  return (

    <div className="container mt-4">

      <div className="card p-4">

        <h2>{organization.name}</h2>

        <p>
          <strong>Location:</strong>
          {" "}
          {organization.location}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {organization.email}
        </p>

        <p>
          <strong>Phone:</strong>
          {" "}
          {organization.phone}
        </p>

        <p>
          <strong>Employees:</strong>
          {" "}
          {organization.employees}
        </p>

        <p>
          <strong>Services:</strong>
        </p>

        <ul>
          {organization.services?.map(
            (service, index) => (
              <li key={index}>
                {service}
              </li>
            )
          )}
        </ul>

      </div>

    </div>

  );
};