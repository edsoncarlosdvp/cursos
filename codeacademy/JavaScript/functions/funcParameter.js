const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

/*
‎Nós escrevemos uma função de ordem superior, . Ele toma uma função como argumento, economiza um tempo de partida, invoca a função de retorno de chamada, registra o tempo após a função ser chamada e retorna o tempo que a função teve para ser executada subtraindo o tempo de partida a partir do tempo final. ‎timeFuncRuntime()
*/

/*
‎Em seguida, invocamos primeiro com a função - note como passamos e não a invocamos.
*/

timeFuncRuntime(() => {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
});