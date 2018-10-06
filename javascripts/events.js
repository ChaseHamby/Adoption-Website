import {pets, petsBuilder} from './components/petComponent.js'

const sortPets = (e) => {
    const type = e.target.id;
    if (type === 'all') {
        petsBuilder(pets);
        console.log('if it works?');
    } else {
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
        console.log('else it works?');
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const dogButton = document.getElementById('dog');
    const catButton = document.getElementById('cat');
    const dinoButton = document.getElementById('dino');
    allButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
};

export {sortEvents}