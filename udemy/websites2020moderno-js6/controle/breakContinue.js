const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Desvio de fluxo para fora do bloco em exercício

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// Desvio de fluxo por interrupção de sequência

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // Indicar o rótulo externo para sair deste laço
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')