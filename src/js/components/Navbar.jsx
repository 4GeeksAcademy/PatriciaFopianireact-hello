// src/js/components/navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Singers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Biography</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Lyrics</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
