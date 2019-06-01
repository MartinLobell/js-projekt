import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const headerStyle = {
    background: "#1565c0",
    color: "yellow",
    padding: "1rem 0",
    textAlign: "center",
    marginBottom: "1.5rem",
    borderBottom: "5px solid #19227c",
    textShadow: "-2px 0 #19227c, 0 2px #19227c, 2px 0 #19227c, 0 -2px #19227c"
  }

  const linkStyle = {
    color: "#ffeb3b",
    textDecoration: "none",
    fontWeight: "bold"
  }
  
  return (
    <header style={headerStyle}>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/my-cards" style={linkStyle}>My Pokémon Cards</Link> | <Link to="/battle" style={linkStyle}>Battle</Link>
      </nav>
    </header>
  )
  
}


