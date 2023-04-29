/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Home = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((result) => result.json())
      .then((data) => setServicesData(data));
  }, []);
  console.log(servicesData);
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        {servicesData.services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Price: ${service.price}</p>
            <p>Duration: {service.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
