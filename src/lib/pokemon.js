import pokemon from "pokemontcgsdk";

pokemon.configure({ apiKey: "2a30334b-5d51-4afd-b7fc-c999fb16ee61" });

const url = "https://api.pokemontcg.io/v2/sets/swsh1";
const cardSet = "base1";
let pokemonCards = [];

let getPokemon = async () => {
    let cardCount = 0;
    await pokemon.set.find(cardSet).then((set) => {
        console.log(set);
        cardCount = set.printedTotal;
    });

    for (let i = 1; i < 3; i++) {
        let cardId = `${cardSet}-${i}`;
        pokemon.card.find(cardId).then((card) => {
            console.log(card.name); // "Charizard"
            pokemonCards.push(card);
        });
    }
};

