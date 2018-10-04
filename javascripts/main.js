// import {getPets} from './data/petData.js'
import {petsBuilder} from './components/petComponent.js'
import {sortEvents} from './events.js'

const initializeApp = () => {
    petsBuilder();
    sortEvents();
    // getPets();
 };
    
initializeApp();