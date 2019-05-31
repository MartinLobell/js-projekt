import React from 'react';

function setPokemon(id, name ){
	localStorage.setItem(id, name);
	console.log(localStorage.getItem(id));
}

const Card = ({ name, image, id }) => {
    return (
        <div className="tc bg-light-green dib dim br3 pa3 ma2 grow bw2 shadow-5" onClick={ () => {setPokemon(id, name) }} >
            <img src={ image } alt="Pokemon"/>
            <div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}

export default Card;