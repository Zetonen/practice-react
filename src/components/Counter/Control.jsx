import React from "react";

export function Control({ onIncrement, onDecrement }) {
  return (
    <div className="d-flex justify-content-center px-5">
      <button className="btn btn-outline-success me-5" onClick={onIncrement}>
        <i className="bi bi-plus-circle-fill fs-1"></i>
      </button>
      <button className="btn btn-outline-danger ms-5" onClick={onDecrement}>
        <i className="bi bi-dash-circle-fill fs-1"></i>
      </button>
    </div>
  );
}
