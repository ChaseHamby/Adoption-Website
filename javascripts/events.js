import {pets, petsBuilder} from './components/petComponent.js'

const sortPets = (e) => {
    const type = e.target.id;
    if (type === 'Cats') {
        petsBuilder(pets);
    // } else {
    //     const filteredPets = pets.filter(x => x.type === type);
    //     petsBuilder(filteredPets);
    // }
    }
};

const sortEvents = () => {
    const dogButton = document.getElementById('Dogs');
    const catButton = document.getElementById('Cats');
    const dinoButton = document.getElementById('Dinos');
    dogButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
}

export {sortEvents}