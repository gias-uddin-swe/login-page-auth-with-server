/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./services.css";
import { Link } from "react-router-dom";
const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  console.log(servicesData);
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {servicesData[0]?.services?.map((service) => (
          <div key={service?.id} className="service-card">
            <h2>{service?.name}</h2>
            <p>{service?.description}</p>
            <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul>
            <p>Price: ${service?.price}</p>
            <p>Duration: {service?.duration}</p>
            <Link to={`/services/${service?.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
