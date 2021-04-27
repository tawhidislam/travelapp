import React from "react";
import Cards from "../Card/Cards";

function Popularhotels(props) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          marginTop: "20px",
        }}
        className="d-flex justify-content-center"
      >
        Most popular hotel bookings{" "}
      </h2>
      <Cards />
    </div>
  );
}

export default Popularhotels;
