import { printToDom } from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
}

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => {
        domString +=  `<div class="pet-card p-5">`;
        domString +=   `<div class="card border-dark mb-3" style="max-width: 18rem;">`;
        domString +=    `<div class="card-body text-dark">`;
        domString +=       `<h2 class="card-title">${pet.name}</h2>`
        domString +=        `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`;
        domString +=       `<h5 class="card-title">${pet.color}</h5>`
        domString +=        `<p class="card-text">${pet.specialSkill}</p>`
        domString +=       `<h2 class="card-footer bg-transparent border-dark" id="${pet.type}">${pet.type}</h2>`
        domString +=     `</div>`
        domString +=    `</div>`
        domString +=  `</div>`
    });
    printToDom(domString);
};

export {pets, petsBuilder, setPets, getPetz}
