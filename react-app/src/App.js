import React, { Component } from 'react';
import Cardlist from './Cardlist.js';
import { pokemons } from './pokemons.js';
import SearchBox from './SearchBox.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemons: pokemons,
            searchfield: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredpokemons = this.state.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
        <div className="tc">
            <h1>Pokémon</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist pokemons={filteredpokemons}/>
        </div>
        );
    }
}

export default App;