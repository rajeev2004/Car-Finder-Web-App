import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Card(props) {
  const isWishlisted = props.wishlist.includes(props.id);
  return (
    <motion.div
      className="card"
      style={{ width: "18rem" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <img src={props.image} alt="Car photo" />
          </li>
          <li className="list-group-item">
            <strong>Brand: </strong>
            {props.make}
          </li>
          <li className="list-group-item">
            <strong>Model: </strong>
            {props.model}
          </li>
          <li className="list-group-item">
            {" "}
            <strong>Color: </strong>
            {props.color}
          </li>
          <li className="list-group-item">
            {
              <button onClick={() => props.toggleWishlist(props.id)}>
                {isWishlisted ? "❤️ Remove" : "🤍 Add"}
              </button>
            }
          </li>
          <li className="list-group-item">
            {
              <button onClick={() => props.details(props.id)}>
                View Details
              </button>
            }
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
export default Card;
