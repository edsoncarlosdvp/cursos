enum Direction {
  North,
  South,
  East,
  West
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 

enum Direction {
  North = 7,
  South,
  East,
  West
}

