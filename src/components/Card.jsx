import React, { useEffect, useState } from "react";
function Card(props) {
  const isWishlisted = props.wishlist.includes(props.id);
  return (
    <div className="card" style={{ width: "18rem" }}>
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
    </div>
  );
}
export default Card;
