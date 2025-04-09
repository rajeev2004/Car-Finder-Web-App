import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import carsData from "./Mockdata.js";
import { motion } from "framer-motion";
import axios from "axios";
function CardDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchCarDeatil() {
      setLoading(true);
      const id = location.state?.id;
      try {
        const carDetail = carsData.find((car) => car.id === parseInt(id));
        setCar(carDetail);
      } catch (err) {
        console.log(err);
        setError("Something Went Wrong!!");
      } finally {
        setLoading(false);
      }
    }
    fetchCarDeatil();
  }, [location.state]);
  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }
  return (
    <div className="card-deatil">
      {error && <h2 className="error-message">{error}</h2>}
      {car && (
        <motion.div
          className="car-detail"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <h5 className="card-header">
            <p>{car.make}</p>
          </h5>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <img src={car.image} alt="Car photo" />
              </li>
              <li className="list-group-item">
                <strong>Brand: </strong>
                {car.make}
              </li>
              <li className="list-group-item">
                <strong>Model: </strong>
                {car.model}
              </li>
              <li className="list-group-item">
                <strong>Color: </strong>
                {car.color}
              </li>
              <li className="list-group-item">
                <strong>Fuel Type: </strong>
                {car.fuelType}
              </li>
              <li className="list-group-item">
                <strong>Color: </strong>
                {car.horsepower}
              </li>
              <li className="list-group-item">
                <strong>Price: </strong>
                {car.price}
              </li>
              <li className="list-group-item">
                <strong>Transmission: </strong>
                {car.transmission}
              </li>
              <li className="list-group-item">
                {
                  <button
                    className="btn btn-primary buttonClass"
                    onClick={() => navigate("/")}
                  >
                    Dashboard
                  </button>
                }
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
export default CardDetail;
