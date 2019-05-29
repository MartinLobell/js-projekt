import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyPokemons from './components/pages/MyPokemons.js';
import Battle from './components/pages/Battle.js';
import Cardlist from './components/Cardlist.js';
import SearchBox from './components/SearchBox.js';
import Menu from './components/layout/Menu.js';


// Data imports
import { cards } from './pokemons.js';

class App extends Component {
    
    // constructor() {
    //     super()
    //     this.state = {
    //         cards: cards,
    //         searchfield: ""
    //     }
    // }

    state = {
        cards,
        searchfield: "",
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // Kommenterade ut detta så länge så att appen ändå går att köra
        // const filteredcards = this.state.cards.filter(card => {
        //     return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })

        return (
        <Router>
            <div className="tc" id="main-container">
                <Menu />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <SearchBox searchChange={this.onSearchChange}/>
                        {/* <Cardlist cards={filteredcards}/> */}
                    </React.Fragment>
                )} />

                <Route path="/my-cards" render={props => (
                    <MyPokemons />
                )} />

                <Route path="/battle" render={props => (
                    <Battle />
                )} />

            </div>        
        </Router>
        );
    }
}

export default App;