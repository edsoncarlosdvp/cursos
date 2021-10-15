const spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
};

let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

let spaceship = {
    homePlanet: 'Earth',
    color: 'red'
};
let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
    identified: false,
    'transport type': 'flying'
}; // Regular reassignment still works.