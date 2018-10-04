import { printToDom } from "../helpers/util.js";

const pets = [
    {name: "Dusty", color: "Green", specialSkill: "Gives sincere apologies.", type: "cat", imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"},
    {name: "Trouble", color: "Poop-colored", specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.", type: "dino", imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"},
    {name: "Whiskers", color: "Yellow", specialSkill: "Can prove he is a real man by drinking whiskey.", type: "dino", imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"},
    {name: "Coco", color: "Black", specialSkill: "Burps minimally.", type: "dog", imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"},
    {name: "Spooky", color: "Brown", specialSkill: "Comfortable in the outdoors for up to eight hours.", type: "cat", imageUrl:"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"},
    {name: "Tiger", color: "Golden", specialSkill: "Can read (but cannot understand) Hebrew.", type: "dog", imageUrl: "https://i.etsystatic.com/12330583/d/il/88f153/1511850463/il_340x270.1511850463_ilk9.jpg?version=0"}
];

// const setPets = (newArray) => {
//     pets = newArray;
// };

// const getPetz = () => {
//     return pets;
// }

const petsBuilder = () => {
    let domString = '';
    pets.forEach((pet) => {
        domString +=  `<div class="pet-card p-5">`;
        domString +=   `<div class="card border-dark mb-3" style="max-width: 18rem;">`;
        domString +=    `<div class="card-body text-dark">`;
        domString +=       `<h2 class="card-title">${pet.name}</h2>`
        domString +=        `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`;
        domString +=       `<h5 class="card-title">${pet.color}</h5>`
        domString +=        `<p class="card-text">${pet.specialSkill}</p>`
        domString +=       `<h2 class="card-footer bg-transparent border-dark">${pet.type}</h2>`
        domString +=     `</div>`
        domString +=    `</div>`
        domString +=  `</div>`
    });
    printToDom(domString);
};

export {pets, petsBuilder}
// export {setPets, getPetz}