type Tennis = {
  serve: () => void;
}
 
type Soccer = {
  kick: () => void;
}
 
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}