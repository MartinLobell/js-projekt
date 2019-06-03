import React, { Component } from 'react';
import Card from '../Card';

export default class MyPokemons extends Component {

    state = {
        computerPoke: undefined,
        userPoke: undefined,
    }

    render() {
        const computerPoke = {}
        return (
            <div>
                <h1>Battle page</h1>
                <button onClick={this.props.getRandomPokeCard}>Start Game</button>
                {/* <Card 
                    key={i} 
                    id={cards[i].id} 
                    name={cards[i].name}
                    image={cards[i].imageUrl}
                    saveCard={saveCard}
                /> */}
            </div>
            
        )
    }
}