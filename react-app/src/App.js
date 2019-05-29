import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cardlist from './components/Cardlist.js';
import SearchBox from './components/SearchBox.js';
import Menu from './components/layout/Menu.js';

// Data imports
import { pokemons } from './pokemons.js';

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            pokemons: pokemons,
            searchfield: ""
        }
    }

    // Rad 9-15 kan ersättas med rad 18-21 om vi vill.
    // state = {
    //     pokemons,
    //     searchfield: "",
    // }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredpokemons = this.state.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
        <Router>
            <div className="tc" id="main-container">
                <Menu />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Cardlist pokemons={filteredpokemons}/>
                    </React.Fragment>
                )} />

                {/* Routes for de två andra sidorna */}
                {/* <Route path="/my-pokemon" component={About} /> */}
                {/* <Route path="/battle" component={About} /> */}

            </div>
                
        </Router>
        );
    }
}

export default App;