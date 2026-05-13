import React, { useState } from "react";
import { Link } from "react-router-dom";


 function HomePage() {
    return (

    <div className="main-bg">
    <div className="container">
      <h1>Treinador Pokémon</h1>

      <div className="card">
        <p><strong>Nome:</strong> </p>

     
        <Link to="/pokemon"> poke /> </Link>
      </div>

 

      </div>
    </div>
  );
}

export default HomePage;