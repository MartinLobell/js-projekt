import React, { Component } from 'react';
import Card from '../Card';

export default class MyPokemons extends Component {

    state = {
        computerPoke: {
            id: "base2-25",
            name: "Pinsir",
            imageUrl: "https://images.pokemontcg.io/base2/25.png",
        },
        // computerPoke: undefined,
        userPoke: undefined,
    }

    getComputerPoke = () => {
        this.setState({
            computerPoke: this.props.getRandomPokeCard(),
        })
    }

    render() {
        console.log(this.state.computerPoke);
        return (
            <div>
                <h1>Work in progress...</h1>
                <button onClick={this.props.getRandomPokeCard}>Start Game</button>
                <div>
                    {this.state.computerPoke && <Card 
                        id={this.state.computerPoke.id} 
                        name={this.state.computerPoke.name}
                        image={this.state.computerPoke.imageUrl}
                    />}
                </div>
                
            </div>
            
        )
    }
}