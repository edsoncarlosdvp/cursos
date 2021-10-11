const spaceship = { type: 'shuttle' };
spaceship = { type: 'alien' }; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property