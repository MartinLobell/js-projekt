import React from 'react';

const Card = ({ name, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Pokemon"/>
            <div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}

export default Card;