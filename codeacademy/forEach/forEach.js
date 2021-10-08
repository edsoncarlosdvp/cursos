groceries.forEach(groceryItem =>
    console.log(groceryItem)
)

function printGrocery(element) {
    console.log(element);
}

groceries.forEach(printGrocery)