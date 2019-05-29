export const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur'
    },
    {
        id: 2,
        name: 'Ivysaur'
    },
    {
        id: 3,
        name: 'Venusaur',
    },
    {
        id: 4,
        name: 'Charmander',
    },
    {
        id: 5,
        name: 'Charmeleon',
    },
    {
        id: 6,
        name: 'Charizard',
    },
    {
        id: 7,
        name: 'Squirtle',
    },
    {
        id: 8,
        name: 'Wartortle',
    },
    {
        id: 9,
        name: 'Blastoise',
    },
    {
        id: 10,
        name: 'Caterpie',
    }
]


// Försöker hämta pokes från API (vilket fungerar) men lyckas inte returnera dem till App.js

// function getPokemons() {
//     // API som kan hämta alla pokes på en gång. Default är 100 st. Hämtar bl.a. bilder på poke-kort
//     fetch(`https://api.pokemontcg.io/v1/cards/`)
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         // 100 pokemon skrivs ut i konsollen
//         console.log(data);
//         return data;
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// };

// export const pokemons = getPokemons();
// // Av någon anledning sparas inte pokemon från APIet i variabeln pokemons
// console.log(pokemons); // = Undefined

