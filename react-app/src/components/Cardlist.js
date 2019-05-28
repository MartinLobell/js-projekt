import React from 'react';
import Card from './Card.js';

const Cardlist = ({ pokemons }) => {
    return (
        <div>
            {
            pokemons.map((user, i) => {
            return ( 
                <Card 
                    key={i} 
                    id={pokemons[i].id} 
                    name={pokemons[i].name}
                />
                );
            })
        }
        </div>
    );
}

export default Cardlist;