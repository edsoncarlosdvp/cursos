function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
  /* navigation subroutine here */
}

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0, 'N', 71, 0, 'W']

gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// If there is a return trip . . . 
