import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const headerStyle = {
    background: "#00e",
    color: "yellow",
    padding: "1rem 0",
    textAlign: "center",
    marginBottom: "1.5rem",
  }

  const linkStyle = {
    color: "yellow",
    textDecoration: "none",
  }
  
  return (
    <header style={headerStyle}>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/" style={linkStyle}>My Pokémon</Link> | <Link to="/" style={linkStyle}>Battle</Link>
      </nav>
    </header>
  )
  
}


