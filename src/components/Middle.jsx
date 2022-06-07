import React from "react";
import MiddleIndex from "./Middle/MiddleIndex";

function Middle(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-warning"
      style={{ height: "90vh" }}
    >
      <div className="w-50 shadow border border-light rounded">
        <MiddleIndex />
      </div>
    </div>
  );
}

export default Middle;
