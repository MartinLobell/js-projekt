import React, { Component } from 'react';
import Card from '../Card';

export default class MyPokemons extends Component {

    state = {
        computerPoke: undefined,
        userPoke: undefined,
    }

    getComputerPoke = () => {
        this.setState({
            computerPoke: this.props.getRandomPokeCard(),
        })
    }

    render() {
        const computerPoke = {}
        return (
            <div>
                <h1>Battle page</h1>
                <button onClick={this.props.getRandomPokeCard}>Start Game</button>
                {this.state.computerPoke && <Card 
                    id={this.state.computerPoke.id} 
                    name={this.state.computerPoke.name}
                    image={this.state.computerPoke.imageUrl}
                />}
            </div>
            
        )
    }
}