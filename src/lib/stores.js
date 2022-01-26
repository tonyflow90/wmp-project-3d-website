import { writable } from 'svelte/store';

const storedSets = JSON.parse(localStorage.getItem("sets"))
export let sets = writable(storedSets);
sets.subscribe(val => {
    localStorage.setItem("sets", JSON.stringify(val));
});

const storedCards = JSON.parse(localStorage.getItem("cards"))
export let cards = writable(storedCards);
cards.subscribe(val => {
    localStorage.setItem("cards", JSON.stringify(val));
});