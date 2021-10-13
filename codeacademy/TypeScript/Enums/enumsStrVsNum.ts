enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

let whichWayToAntarctica: DirectionNumber;
whichWayToAntarctica = 1; // Valid TypeScript code.
whichWayToAntarctica = DirectionNumber.South; // Valid, equivalent to the above line.

let whichWayToAntarctica: DirectionString;
whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.