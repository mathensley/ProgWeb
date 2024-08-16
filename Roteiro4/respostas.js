/**
 * QUESTÃO 01
 */
function somaArray(list) {
    const filtro = valor => valor > 60 && valor < 300
    const lista = list.filter(filtro)
    let somatorio = 0
    lista.forEach(valor => {
        somatorio += valor
    })
    console.log(`A lista de valores maiores que 60 é: ${lista}`)
    console.log(`A soma dos elementos da lista é: ${somatorio}`)
}

somaArray([1, 60, 232, 7, 25, 76, 29, 74, 92])

/**
 * QUESTÃO 02
 */
const obj = {
    id: 1,
    nome: 'Objeto 1',
    n: 20,
    a1: 1,
    r: 2
}

const pA = ({n, a1, r}) => new Array(n).fill().map((_, index) => a1 + index * r);
const somaPa = ({n, a1, r}, lista) => (a1 + lista[n-1])*n/2
const pG = ({n, a1, r}) => new Array(n).fill().map((_, index) => a1 * r ** index);
const somaPg = ({n, a1, r}) => a1*(1-r**n)/(1-r)

listaPA = pA(obj)
console.log(listaPA)
console.log(somaPa(obj, listaPA))
listaPG = pG(obj)
console.log(listaPG)
console.log(somaPg(obj))

/**
 * QUESTÃO 03
 */
const conceitos = (notas) => notas.map(nota => {
    if (nota >= 9.0 && nota <= 10.0) {
        return 'A'
    } else if (nota >= 7.0 && nota <= 8.9) {
        return 'B'
    } else if (nota >= 5.0 && nota <= 6.9) {
        return 'C'
    } else if (nota >= 0.0 && nota <= 4.9) {
        return 'D'
    }
})

console.log(conceitos([3.5, 5.5, 7.5, 9.5]));

/**
 * QUESTÃO 04
 */
const somaPares = valor => {
    let v_ini = valor % 2 === 0 ? valor : valor + 1
    let lista = new Array(5).fill().map((_, i) => v_ini + i *  2)
    let soma = lista.reduce((acc, curr) => acc + curr, 0)
    console.log(`Entrada: ${valor} => Saída: ${soma}`)
}

somaPares(4)
somaPares(11)

/**
 * QUESTÃO 05
 */
const ehPrimo = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const primos = (inicio = 0, fim = 100) => {
    inicio > fim ? [inicio, fim] = [fim, inicio] : [inicio, fim]
    let lista = new Array(Math.abs(fim - inicio) + 1).fill().map((_, index) => inicio + index)
    return lista.filter(ehPrimo)
}

console.log(primos())