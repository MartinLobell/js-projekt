import React from 'react';
import Card from './Card.js';

const Cardlist = ({ cards }) => {
    return (
        <div>
            {
            cards.map((user, i) => {
            return ( 
                <Card 
                    key={i} 
                    id={cards[i].id} 
                    name={cards[i].name}
                    image={cards[1].imageUrl}
                />
                );
            })
        }
        </div>
    );
}

export default Cardlist;