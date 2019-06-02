import React from 'react';
import Card from './Card.js';

const Cardlist = ({ cards, saveCard }) => {
    return (
        <div>
            {
            cards.sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber).map((user, i) => {
            return ( 
                <Card 
                    key={i} 
                    id={cards[i].id} 
                    name={cards[i].name}
                    image={cards[i].imageUrl}
                    nationalPokedexNumber={cards[i].nationalPokedexNumber}
                    saveCard={saveCard}
                />
                );
            })
        }
        </div>
    );
}

export default Cardlist;