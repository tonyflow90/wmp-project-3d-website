import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "2a30334b-5d51-4afd-b7fc-c999fb16ee61" });

// const sets = [
//     'base1',
//     'base2',
//     'basep',
//     'base3',
//     'base4',
//     'base5',
// ];

let getAll = async () => {
    return new Promise(async (resolve, reject) => {
        let cardCount = 0;
        await pokemon.set.find(cardSet).then((set) => {
            console.log(set);
            cardCount = set.printedTotal;
        });

        let aPromise = [];
        for (let i = 1; i < cardCount; i++) {
            let cardId = `${cardSet}-${i}`;
            aPromise.push(pokemon.card.find(cardId));
        }

        Promise.all(aPromise).then((values) => {
            resolve(values);
        }).catch(e => {
            reject(e);
        });
    });
};

// let getAllSets2 = async () => {
//     return new Promise(async (resolve, reject) => {

//         let setp = []
//         sets.forEach(set => {
//             setp.push(pokemon.set.find(set))
//         });

//         Promise.all(setp).then((sets) => {
//             resolve(sets);
//         }).catch(e => {
//             reject(e);
//         });
//     });
// };

let getAllSets = async () => {
    return pokemon.set.all();
    // return new Promise(async (resolve, reject) => {
    // let setp = []
    // sets.forEach(set => {
    //     setp.push(pokemon.set.find(set))
    // });

    // Promise.all(setp).then((sets) => {
    //     resolve(sets);
    // }).catch(e => {
    //     reject(e);
    // });
    // });
};

let getRandomSets = async (count = 1) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sets = await getAllSets();
            let randomSets = sets.sort(() => Math.random() - Math.random()).slice(0, count)
            resolve(randomSets);
        } catch (e) {
            reject(e);
        }
    });
};

let getSet = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let set = await pokemon.set.find(id);
            resolve(set);
        } catch (e) {
            reject(e);
        }
    });
};

let getAllSetCards = async (setId) => {
    return new Promise(async (resolve, reject) => {
        let set = await getSet(setId)

        let cardp = [];
        for (let i = 1; i < set.printedTotal; i++) {
            // for (let i = 1; i < 3; i++) {
            let cardId = `${set.id}-${i}`;
            cardp.push(getCard(cardId));
        }

        resolve(cardp);
    });
};

let getAllCards = async (setId) => {
    return new Promise(async (resolve, reject) => {
        return pokemon.card.all({ q: 'series:Base' });
    });
};

let getRandomCards = async (count = 1) => {
    return new Promise(async (resolve, reject) => {
        try {
            let randomSets = await getRandomSets(count);
            let cardp = [];
            randomSets.forEach(set => {
                let randomNumber = Math.floor(Math.random() * set.printedTotal);
                let cardId = `${set.id}-${randomNumber}`;
                cardp.push(getCard(cardId));
            });
            resolve(cardp);
        } catch (e) {
            reject(e);
        }
    });
};

let getCard = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let card = await pokemon.card.find(id);
            resolve(card);
        } catch (e) {
            reject(e);
        }
    });
};

export default { getAllSets, getSet, getAllCards, getCard, getAll, getAllCards, getAllSetCards, getRandomSets, getRandomCards };