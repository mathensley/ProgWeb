document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("txtEntrada").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            clique();
            event.preventDefault();
        }
    });
});

function clique() {
    const questaoSelecionada = document.querySelector("input[name='questao']:checked");

    document.getElementById("resultado").innerHTML = "";
    if (questaoSelecionada) {
        const valor = questaoSelecionada.value;
        const entrada = document.getElementById("txtEntrada").value;
        switch (valor) {
            case "questao1":
                calcularQuadrados(entrada);
                break;
            case "questao2":
                verificarMaior(entrada);
                break;
            case "questao3":
                verificarIdadesMaiorMenor18(entrada);
                break;
            case "questao4":
                separarDiaMesAno(entrada);
                break;
            case "questao5":
                inverterTexto(entrada);
                break;
            case "questao6":
                ordena(entrada);
                break;
            case "questao7":
                somaInteirosImpares(entrada);
                break;
            case "questao8":
                fatorial(entrada);
                break;
            case "questao9":
                calculos(entrada);
                break;
            case "questao10":
                inverterLista(entrada);
                break;
        }
    }
    return false;
}

// Questão 01
function calcularQuadrados(entrada) {
    const numeros = entrada.split(",");
    let resultadoHtml = "";
    for (i = 0; i < numeros.length; i++) {
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
        resultadoHtml += "O quadrado de " + numeros[i] + " é " + quadrado + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultadoHtml;
}

// Questão 02
function verificarMaior(entrada) {
    const numeros = entrada.split(",");
    var maior = parseInt(numeros[0]);
    for (i = 1; i < numeros.length; i++){
        if(parseInt(numeros[i]) > maior){
            maior = parseInt(numeros[i]);
        }
    }
    document.getElementById("resultado").innerHTML = maior;
    alert("O maior número digitado é: " + maior);
}

// Questão 03
function verificarIdadesMaiorMenor18(entrada) {
    const idades = entrada.split(",");
    var maior18 = 0;
    var menor18 = 0;
    for (i = 0; i < idades.length; i++){
        if(parseInt(idades[i]) >= 18)
            maior18++;
        else
            menor18++;
    }
    let resultadoHtml = "Quantidade de maiores: " + maior18 + "; e menores: " + menor18;
    document.getElementById("resultado").innerHTML = resultadoHtml;
}

// Questão 04
function separarDiaMesAno(entrada) {
    const data = entrada.split("/");
    let resultadoHtml = "";
    resultadoHtml += "O dia é: " + data[0] + "<br>";
    resultadoHtml += "O mês é: " + data[1] + "<br>";
    resultadoHtml += "O ano é: " + data[2] + "<br>";
    document.getElementById("resultado").innerHTML = resultadoHtml;
}

// Questão 05
function inverterTexto(entrada){
    var textoAux = '';
    for (var i = entrada.length - 1; i >= 0; i--){
        textoAux += entrada[i];
    }
    let resultadoHtml = "String invertida: " + textoAux;
    document.getElementById("resultado").innerHTML = resultadoHtml;
}

// Questão 06
function ordena(entrada) {
    let lista = entrada.split(',').map(str => Number(str)).sort((a, b) => a - b);
    document.getElementById("resultado").innerHTML = lista.join(", ");
}

// Questão 07
function somaInteirosImpares(entrada) {
    const numeros = entrada.split(',').map(str => Number(str));
    let soma = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0 && numeros[i] % 3 == 0) {
            soma += numeros[i];
        }
    }
    document.getElementById("resultado").innerHTML = soma;
}

// Questão 08
function fatorial(entrada) {
    const numeros = entrada.split(',').map(str => Number(str));
    let lista = new Array();
    for (i = 0; i < numeros.length; i++) {
        lista.push(calcFatorial(numeros[i]));
    }
    document.getElementById("resultado").innerHTML = lista.join(", ");
}

function calcFatorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * calcFatorial(num-1);
    }
}

// Questão 09
function calculos(entrada) {
    const numeros = entrada.split(',').map(str => Number(str));
    let media = 0;
    let positivos = 0;
    let negativos = 0;
    for (i = 0; i < numeros.length; i++) {
        media += numeros[i];
        positivos += numeros[i] >= 0 ? 1 : 0;
        negativos += numeros[i] < 0 ? 1 : 0;
    }
    media = media / numeros.length;
    let resultadoHtml = "";
    resultadoHtml += "Média: " + media + "<br>";
    resultadoHtml += "Números Positivos: " + positivos + " Percentual: " + (positivos / numeros.length * 100).toFixed(2) + "%<br>";
    resultadoHtml += "Números Negativos: " + negativos + " Percentual: " + (negativos / numeros.length * 100).toFixed(2) + "%<br>";
    document.getElementById("resultado").innerHTML = resultadoHtml;
}

// Questão 10
function inverterLista(entrada) {
    const numeros = entrada.split(',').map(str => Number(str));
    let listaInvertida = new Array();
    for (i = numeros.length - 1; i >= 0; i--) {
        listaInvertida.push(numeros[i]);
    }
    document.getElementById("resultado").innerHTML = listaInvertida.join(", ");
}