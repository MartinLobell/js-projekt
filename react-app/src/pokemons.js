


// Försöker hämta pokes från API (vilket fungerar) men lyckas inte returnera dem till App.js

 function getPokemons() {
     // API som kan hämta alla pokes på en gång. Default är 100 st. Hämtar bl.a. bilder på poke-kort
     // Hämtar i nuläget bara 68 Pokémon = Orsak okänd = Prio 1.
     fetch(`https://api.pokemontcg.io/v1/cards/?setCode=base1&supertype=Pokemon`)
     .then(function(res) {
         return res.json();
     })
     .then(function(data) {
         // 100 pokemon skrivs ut i konsollen
         console.log(data);
         return data;
     })
     .catch(function(err) {
         console.log(err);
     })
 };

 export const pokemons = getPokemons();
 // Av någon anledning sparas inte pokemon från APIet i variabeln pokemons
console.log(pokemons); // = Undefined

