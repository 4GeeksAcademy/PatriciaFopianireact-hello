// src/js/components/Card.jsx
import React from "react";

export default function Card({ name, description, img }) {
  return (
    <div className="card h-100 shadow" style={{ borderRadius: "16px" }}>
      <img 
        src={img} 
        className="card-img-top" 
        alt={name} 
        style={{ height: "400px", objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{description}</p>
        <button className="btn btn-danger px-4">GET TO KNOW ME!</button>
      </div>
    </div>
  );
}

