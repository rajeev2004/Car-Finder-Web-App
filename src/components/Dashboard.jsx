import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import carsData from "./Mockdata.js";
import Card from "./Card";
function DashBoard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    brand: "",
    fuel: "",
    color: "",
    minPrice: "",
    maxPrice: "",
    model: "",
  });
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterCars, setFilteredCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    } else {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
    setCars(carsData);
  }, []);
  useEffect(() => {
    applyFilters();
  }, [filter, cars, sortOrder]);
  async function applyFilters() {
    const minPrice = filter.minPrice ? parseInt(filter.minPrice) : 0;
    const maxPrice = filter.maxPrice ? parseInt(filter.maxPrice) : Infinity;
    const filteredCars = cars.filter((car, index) => {
      const SameBrand =
        filter.brand === "" ||
        car.make.toLowerCase().includes(filter.brand.toLowerCase().trim());
      const SameFuel =
        filter.fuel === "" ||
        car.fuelType.toLowerCase().includes(filter.fuel.toLowerCase().trim());
      const SameColor =
        filter.color === "" ||
        car.color.toLowerCase().includes(filter.color.toLowerCase().trim());
      const SameModel =
        filter.model === "" ||
        car.model.toLowerCase().includes(filter.model.toLowerCase().trim());
      const price = car.price;
      const SamePrice = !isNaN(price) && price >= minPrice && price <= maxPrice;
      return SameBrand && SameColor && SameFuel && SameModel && SamePrice;
    });
    if (sortOrder === "asc") {
      filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredCars.sort((a, b) => b.price - a.price);
    }
    setFilteredCars(filteredCars);
    setLoading(false);
  }
  function CarDetail(id) {
    navigate("/carDetail", {
      state: {
        id,
      },
    });
  }
  function handleChange(field, value) {
    setFilter((prev) => ({ ...prev, [field]: value }));
  }
  function handlePageChange(_, value) {
    setPagination((prev) => ({ ...prev, page: value }));
  }
  function toggleWishlist(id) {
    const isWishlisted = wishlist.includes(id);
    const updatedWishlist = isWishlisted
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
  const start = (pagination.page - 1) * pagination.limit;
  const CarToDisplay = filterCars.slice(start, start + pagination.limit);
  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }
  return (
    <div className="dashboard-container">
      <h2 className="name">Car Finder Web App</h2>
      <div className="filters">
        <div className="filters-group1">
          <input
            type="text"
            placeholder="Brand"
            value={filter.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
          />
          <input
            type="text"
            placeholder="Color"
            value={filter.color}
            onChange={(e) => handleChange("color", e.target.value)}
          />
          <input
            type="text"
            placeholder="Model"
            value={filter.model}
            onChange={(e) => handleChange("model", e.target.value)}
          />
          <input
            type="number"
            placeholder="Minimum Price"
            value={filter.minPrice}
            onChange={(e) => handleChange("minPrice", e.target.value)}
          />
          <input
            type="number"
            placeholder="Maximum Price"
            value={filter.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
          />
          <button
            className="wishlist-cars"
            onClick={() => navigate("/wishlist")}
          >
            WishList
          </button>
        </div>
        <div className="filters-group2">
          <TextField
            label="Fuel Type"
            fullWidth
            select
            value={filter.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            style={{ marginBottom: "1rem" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Gasoline">Gasoline</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
          </TextField>
          <TextField
            label="Sort by Price"
            fullWidth
            select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ marginBottom: "1rem" }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="error-message">{error && <h2>{error}</h2>}</div>
      <div className="car-list">
        {CarToDisplay.length > 0 ? (
          CarToDisplay.map(({ id, make, model, color, image }) => (
            <Card
              key={id}
              id={id}
              make={make}
              model={model}
              color={color}
              details={CarDetail}
              image={image}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          ))
        ) : (
          <p className="no-found-message">No Car Found With These Details...</p>
        )}
      </div>
      <div className="page-number">
        <Pagination
          count={Math.ceil(Math.ceil(filterCars.length / pagination.limit))}
          page={pagination.page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}
export default DashBoard;
