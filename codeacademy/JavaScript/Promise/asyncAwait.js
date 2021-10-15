/*
Async/Await
The async...await syntax ‎permite que os desenvolvedores implementem facilmente‎ Promise-‎código baseado. A palavra-chave‎ async ‎usado em conjunto com uma declaração de função cria uma ‎‎função assincron‎‎ que retorna um‎ Promise. ‎As funções async nos permitem usar a palavra-chave‎ await ‎para bloquear o loop de evento até um dado‎ Promise ‎resolve ou rejeita‎. ‎O ‎await ‎palavra-chave também nos permite atribuir o valor resolvido de um‎ Promise ‎a uma variável‎.

‎Vamos dar uma olhada no código abaixo. No código abaixo uma expressão de seta assíncrona é definida com o‎ async ‎palavra-chave. No corpo de função estamos criando um novo‎ Promise ‎que passa uma função que é executada após 5 segundos, nós‎ await ‎o ‎Promise ‎para resolver e salvar o valor devolvido para‎ finalResult, ‎e a saída do‎ Promise ‎está registrado no console‎.
*/

// Creating a new promise that runs the function in the setTimeout after 5 seconds.
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction. 
const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult.
    const finalResult = await newPromise;

    // Logging the result of the promise to the console
    console.log(finalResult); // Output: All done!
}

asyncFunction();

// Defining a function that instantiates setInterval
const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    setInterval(() => {
        alert('I show every 5 seconds!')
    }, 5000);
};

// Calling the newInterval() function that calls the setInterval
showAlert();

/*
The setTimeout() function ‎executa um bloco de código após uma quantidade especificada de tempo (em milissegundos) e só é executado uma vez. O‎ setTimeout() ‎função aceita os mesmos argumentos que o‎ setInterval() ‎função. Usando o‎ clearTimeout() ‎função evitará que a função especificada seja executada. No bloco de código abaixo, uma função chamada‎ showTimeout() ‎é declarada como uma expressão de flecha. O‎ setTimeout()‎ função é então definida e exibe uma caixa de alerta após 5 segundos.‎
*/

// Defining a function that calls setTimeout
const showTimeout = () => {
    // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
    setTimeout(() => {
        alert('I only show once after 5 seconds!');
    }, 5000);
};

// Calling the showTimeout() function
showTimeout();