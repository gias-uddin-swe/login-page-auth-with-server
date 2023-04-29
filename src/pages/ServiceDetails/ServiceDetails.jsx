/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/allData/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.item));
  }, []);

  console.log(id);
  return <div>ServiceDetails page</div>;
};

export default ServiceDetails;
