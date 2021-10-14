type Tea = {
  steep: () => string;
}
 
type Coffee = {
  pourOver: () => string;
} 
 
function brew(beverage: Coffee | Tea) {
  if ('steep' in beverage) {
    return beverage.steep();
  }
 
  return beverage.pourOver();
}