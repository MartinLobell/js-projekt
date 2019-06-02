import React from 'react';

const Card = ({ id, name, image, saveCard }) => {
    return (
        <div className="tc bg-light-green dib dim br3 pa3 ma2 grow bw2 shadow-5" onClick={saveCard} data-id={id} data-name={name}>
            <img src={ image } alt="Pokemon"/>
            <div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}

export default Card;