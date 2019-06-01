


// Försöker hämta pokes från API (vilket fungerar) men lyckas inte returnera dem till App.js

function getPokemons() {
    // API som kan hämta alla pokes på en gång. Default är 100 st. Hämtar bl.a. bilder på poke-kort
    fetch(`https://api.pokemontcg.io/v1/cards/?setCode=base2&supertype=Pokemon&pageSize=130`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        return data;
    })
    .catch(function(err) {
        console.log(err);
    })
};

export const cards = getPokemons();
// Av någon anledning sparas inte pokemon från APIet i variabeln pokemons
console.log(cards); // = Undefined

