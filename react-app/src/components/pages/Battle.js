import React, { Component } from 'react';
import Card from '../Card';

export default class MyPokemons extends Component {
    render() {
        // computerPoke = {}
        return (
            <div>
                <h1>Battle page</h1>
                <button onClick={this.props.getRandomPokeCard}>Start Game</button>
                <p></p>
            </div>
        )
    }
}