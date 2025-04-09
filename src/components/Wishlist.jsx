import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carsData from "./Mockdata.js";
function Wishlist() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [wishlistCars, setWishlistCars] = useState([]);
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const ids = JSON.parse(storedWishlist);
      setWishlist(JSON.parse(storedWishlist));
      const matchedCars = carsData.filter((car) => ids.includes(car.id));
      setWishlistCars(matchedCars);
    }
  }, []);
  function removeFromWishlist(id) {
    const updatedList = wishlist.filter((item) => item !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    const updatedCars = wishlistCars.filter((car) => car.id !== id);
    setWishlistCars(updatedCars);
  }
  return (
    <div className="wishlist-container">
      <h2 className="name">My WishList</h2>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlistCars.map((car, index) => (
            <div className="wishlist-every-item" key={car.id}>
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
                    <button onClick={() => removeFromWishlist(car.id)}>
                      ❌ Remove
                    </button>
                  }
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p>No Cars in the WishList yet...</p>
        )}
      </div>
      <div className="wishList-button">
        <button onClick={() => navigate("/")}>Dashboard</button>
      </div>
    </div>
  );
}
export default Wishlist;
