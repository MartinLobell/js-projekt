import React from 'react';


export default function Menu() {
  const imageBoxStyle = {
    width: "100%",
    margin: "auto",
    maxWidth: "500px",
  }

  const imageStyle = {
    width: "100%",
  }
  
  return (
    <div style={imageBoxStyle}>
        <h2>Loading Pokémon...</h2>
        <img
            src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"
            alt="pokemon loading gif"
            style={imageStyle}
        />
    </div>
  )
  
}