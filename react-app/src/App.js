import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyPokemons from './components/pages/MyPokemons.js';
import Battle from './components/pages/Battle.js';
import Cardlist from './components/Cardlist.js';
import SearchBox from './components/SearchBox.js';
import Menu from './components/layout/Menu.js';
import LoadingAnimation from './components/layout/LoadingAnimation.js';


// Data imports
// import { cards } from './pokemons.js';

class App extends Component {

    state = {
        cards: [],
        cardsLoaded: false,
        searchfield: "",
        userCards: []
    }

    // Körs automatiskt när komponenter laddas in i DOM
    componentDidMount() {
        this.getPokeCard(); // API request
        this.loadCardsToState(); // Hämtar sparade kort från LS
    }

    getPokeCard = () => {
        fetch(`https://api.pokemontcg.io/v1/cards/?setCode=base1|base2|Jungle|Fossil&supertype=Pokemon&pageSize=500`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    cards: json.cards,
                    cardsLoaded: true,
                })
            });
    }

    saveCard = (e) => {
        let cardID;
        let currentElement = e.target
        let continueLoop = true;
        let pokeName;
        while (continueLoop === true) {
            if (currentElement.hasAttribute("data-id")) {
                cardID = currentElement.getAttribute("data-id");
                pokeName = currentElement.getAttribute("data-name");
                continueLoop = false;
            } else {
                currentElement = currentElement.parentElement;
            }
        }

        if (this.checkDuplicateCards(pokeName)){
            if (window.confirm(`You already have this card in your collection. Do you want to remove ${pokeName} from your list of pokemon cards?`)) {
                this.removeCard(pokeName);
            }
        }

        else if (window.confirm(`Sure you want to add ${pokeName} to your list of pokemon cards?`)) {
            this.state.cards.map(card => {
                if (card.id === cardID) {
                    this.setState({
                        userCards: [...this.state.userCards, card],
                    })
                    this.saveCardToLS(card);
                }
            })
        } else {
            alert("No cards were saved");
        }
    }

    saveCardToLS = (card) => {
        let userCards = this.getCardsFromLS();
        userCards.push(card);
        localStorage.setItem("userCards", JSON.stringify(userCards));
    }

    getCardsFromLS = () => {
        return localStorage.getItem("userCards") === null ? [] : JSON.parse(localStorage.getItem("userCards"));
    }

    checkDuplicateCards = (pokeName) => {
        for(var key in this.state.userCards) {
            if (pokeName == this.state.userCards[key]["name"]){
                return true;
            }
        }
    }

    removeCard = (pokeName) => {
        for(var key in this.state.userCards) {
            if (pokeName == this.state.userCards[key]["name"]){
                delete this.state.userCards[key];
            }
        }
        
    }

    // Sparar kort lagrade i LS till state
    loadCardsToState = () => {
        this.setState({
            userCards: this.getCardsFromLS(),
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredcards = this.state.cards.filter(card => {
            return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })


        let { cards, cardsLoaded } = this.state;

        // Detta renderas innan pokes har hämtats
        if (!cardsLoaded) {
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <LoadingAnimation />
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
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" width="400px"></img>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <SearchBox searchChange={this.onSearchChange}/>
                                <section>
                                    <Cardlist
                                        cards={filteredcards}
                                        saveCard={this.saveCard}/>
                                </section>
                            </React.Fragment>
                        )} />
        
                        <Route path="/my-cards" render={props => (
                            <React.Fragment>
                                <section>
                                    <Cardlist
                                        cards={this.state.userCards}/>
                                </section>
                            </React.Fragment>
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