import React from 'react';

const Card = ({ name, image }) => {
    return (
        <div className="tc bg-light-green dib dim br3 pa3 ma2 grow bw2 shadow-5">
            <img src={ image } alt="Pokemon"/>
            <div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}

export default Card;