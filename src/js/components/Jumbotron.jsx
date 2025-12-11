// src/js/components/Jumbotron.jsx
import React from "react";

export default function Jumbotron() {
  return (
    <header 
      className="py-5 text-white"
      style={{
        background: "linear-gradient(135deg, #ff8fa3, #ff004c)"
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to the Music Industry!</h1>
        <p className="lead">
          What is music? To try to explain this concept, we will focus on several famous international and Spanish singers. 
          We will learn about their lives and analyze their songs. 💖🔥
        </p>
        <button className="btn btn-light btn-lg text-danger fw-bold">
          Let's go!
        </button>
      </div>
    </header>
  );
}

