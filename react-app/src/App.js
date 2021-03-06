import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyPokemons from './components/pages/MyPokemons.js';
import Battle from './components/pages/Battle.js';
import Cardlist from './components/Cardlist.js';
import SearchBox from './components/SearchBox.js';
import Menu from './components/layout/Menu.js';
import LoadingAnimation from './components/layout/LoadingAnimation.js';
import './App.css';

// Externa bibliotek
import Swal from 'sweetalert2';


class App extends Component {

    state = {
        cards: [],
        cardsLoaded: false,
        searchfield: "",
        userCards: [],
        // cpuCards: []
    }

    // Körs automatiskt när komponenter laddas in i DOM
    componentDidMount() {
        this.getPokeCard(); // API request
        this.loadCardsToState(); // Hämtar sparade kort från LS
        this.getRandomPokeCard(); // Generates a random card for duel opponent.
    }

    // Hämtar pokes från API
    getPokeCard = () => {
        fetch(`https://api.pokemontcg.io/v1/cards/?setCode=base1|base2|base3&rarity=Common|Uncommon|Rare&supertype=Pokemon&pageSize=500`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    cards: json.cards.filter(card => card.nationalPokedexNumber <= 151),
                    cardsLoaded: true,
                })
            });
    }

    // Sparar kort lagrade i LS till state
    loadCardsToState = () => {
        this.setState({
            userCards: this.getCardsFromLS(),
        })
    }

    // Sparar nytt kort i LS och state
    saveCard = (e) => {
        let cardID;
        let currentElement = e.target
        let continueLoop = true;
        let pokeName;
        // Hindrar användaren från att spara mer än 6 kort
        // if (this.state.userCards.length >= 6) {
        //     Swal.fire({  
        //         title: 'You already have six Pokémon cards!',  
        //         type: 'error',  
        //         text: "You'll have to remove one before adding a new one.",  
        //     });
        //     return null
        // }
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
            if (Swal.fire({  
                title: 'Card Removed!',  
                imageUrl: 'https://scontent.cdninstagram.com/vp/f010379fcf3c2faae3d1e506f7df182f/5D3002CF/t51.2885-15/e35/s480x480/52905174_2373692596031805_4996684431720486663_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
                imageWidth: 300,
                text: 'Your changes have been saved.'
            })) {
                this.removeCard(pokeName);
            }
        }

        else if (Swal.fire({  
            title: 'Card was added!',  
            type: 'success',  
            text: 'Your changes have been saved.',  
        })) {
            this.state.cards.forEach(card => {
                if (card.id === cardID) {
                    this.setState({
                        userCards: [...this.state.userCards, card],
                    })
                    this.saveCardToLS(card);
                }
            })
        }
    }

    // Lägger till ett kort i LS
    saveCardToLS = (card) => {
        let userCards = this.getCardsFromLS();
        userCards.push(card);
        localStorage.setItem("userCards", JSON.stringify(userCards));
    }

    // Uppdaterar kort i LS med en lista med kort
    saveCardsToLS = (cards) => {
        localStorage.setItem("userCards", JSON.stringify(cards));
    }

    getCardsFromLS = () => {
        return localStorage.getItem("userCards") === null ? [] : JSON.parse(localStorage.getItem("userCards"));
    }

    checkDuplicateCards = (pokeName) => {
        this.filterUserCards();
        for(var key in this.state.userCards) {
            if (this.state.userCards[key] != null) {
                if (pokeName === this.state.userCards[key]["name"]){
                    return true;
                }
            }
        }
    }

    removeCard = (pokeName) => {
        const updatedCards = this.state.userCards;
        updatedCards.forEach((card, index) => {
            if (card.name === pokeName) {
                updatedCards.splice(index, 1);
            }
        });
        this.setState({
            userCards: updatedCards,
        });
        this.saveCardsToLS(this.state.userCards);            
    };             

    filterUserCards = () => {
        var filteredUserCards = this.state.userCards.filter(function (idx) {
            return idx != null;
        });
        this.setState({
            userCards: filteredUserCards,
        })
        localStorage.setItem("userCards", JSON.stringify(this.state.userCards));
    }

    getRandomPokeCard = () => {

        const randomNumber = Math.floor((Math.random() * 189) + 1);
        const randomPokeCard = this.state.cards[randomNumber];
        this.setState({
            computerPoke: randomPokeCard,
        })
        console.log(randomPokeCard);
        return randomPokeCard
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredcards = this.state.cards.filter(card => {
            return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        let { cardsLoaded } = this.state;

        // Detta renderas innan pokes har hämtats
        if (!cardsLoaded) {
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" class="banner-image"></img></a>
                        <div className="container">
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
                    </div>        
                </Router>
                ); 
        } else {
            return (
                <Router>
                    <div className="tc" id="main-container">
                        <Menu />
                        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="Poke-logo" class="banner-image"></img></a>
                        <div className="container">
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
                                            cards={this.state.userCards}
                                            saveCard={this.saveCard}/>
                                    </section>
                                </React.Fragment>
                            )} />
            
                            <Route path="/battle" render={props => (
                                <Battle
                                    getRandomPokeCard={this.getRandomPokeCard}/>
                            )} />
                        </div>
                        
        
                    </div>        
                </Router>
                );    
        }   
    }
}

export default App;