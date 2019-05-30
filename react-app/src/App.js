import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyPokemons from './components/pages/MyPokemons.js';
import Battle from './components/pages/Battle.js';
import Cardlist from './components/Cardlist.js';
import SearchBox from './components/SearchBox.js';
import Menu from './components/layout/Menu.js';


// Data imports
// import { cards } from './pokemons.js';

class App extends Component {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         cards: [],
    //         cardsLoaded: false,
    //         searchfield: "",
    //     }
    // }

    state = {
        cards: [],
        cardsLoaded: false,
        searchfield: "",
    }

    getPokeCard() {
        fetch(`https://api.pokemontcg.io/v1/cards/?setCode=base1|base2|base3&supertype=Pokemon&pageSize=151`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    cards: json.cards,
                    cardsLoaded: true,
                })
            });
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // Kommenterade ut detta så länge så att appen ändå går att köra
        const filteredcards = this.state.cards.filter(card => {
            return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        let { cards, cardsLoaded } = this.state;

        // Detta renderas innan pokes har hämtats
        if (!cardsLoaded) {
            this.getPokeCard();
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                {/* Hade kunnat ha en laddingsbild / animering här */}
                                <div>Loading...</div>
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
        } else {
            // Detta stycket körs automatiskt när cardsLoaded ändrar från false till true
            console.log(cards);
            
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <SearchBox searchChange={this.onSearchChange}/>
                                <section>
                                    <Cardlist cards={filteredcards}/>
                                </section>
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
}

export default App;