// + = Soma
// - = Subtração
// * = Multiplicação
// / = divisão
// % = Resto

// || = Operador 'ou'
// && = Operador 'e'

// 1 == '1' --> verdadeiro
// 1 === '1' --> falso

// document.getElementById("som").onclick = function clique() {
//     var tipoOperacao = document.getElementById("tipoOperacao").value

//     var numero1 = document.getElementById("input1").value
//     var numero2 = document.getElementById("input2").value

//     if (numero1 == 1) {
//         console.log('Dois iguais')
//     }

    

//     if (numero1 === '1') {
//         console.log('Tres iguais')
//     }

//     // if (numero1 <= 0 && numero2 <= 0) {
//     //     console.log('Adicione um numero valido')
//     // } else if (tipoOperacao == 'adicao') {
//     //     soma(numero1, numero2)
//     // } else if (tipoOperacao == 'subtracao') {
//     //     subitracao(numero1, numero2)
//     // } else if (tipoOperacao == 'multiplicacao') {
//     //     multiplicacao(numero1, numero2)
//     // } else if (tipoOperacao == 'divisao') {
//     //     divisao(numero1, numero2)
//     // } else {
//     //     console.log('Essa operação não existe!')
//     // }

// }


// function soma(n1, n2) {
//     console.log(Number(n1) + Number(n2))
// }

// function subitracao(n1, n2) {
//     console.log(Number(n1) - Number(n2))
// }

// function multiplicacao(n1,n2) {
//     console.log(n1 * n2)
// }

// function divisao(n1,n2) {
//     console.log(n1 / n2)
// }



// var botao = document.getElementById("botao");

// botao.onclick = clique;

// function clique() {
//     var texto = document.getElementById("texto").value;

//     // console.log(typeof texto)
//     // console.log(typeof Number(texto))
//     // console.log(parseInt(texto))
//     // console.log(parseFloat(texto))
//     // console.log(Number(texto).toFixed(3))

//     // console.log(texto.replace('maça', 'uva'))
//     // console.log(texto.length)

//     var lista = [1,2,3]

//     // console.log(lista)
//     // lista.push(4)
//     // lista.unshift(0)

//     // console.log(lista)
//     // console.log(lista[0])
//     // console.log(lista[lista.length - 1])

//     // console.log(lista)
//     // lista.pop()
//     // lista.shift()
//     // console.log(lista)

    
// }


var pessoa = {
    nome: 'vinicius',
    sobrenome: 'schiffler',
    idade: 18,
    repostorios: [
        {
           nome: 'clone-tesla',
           descicao: 'Clonando o site da tesla' 
        },
    ],
    filho: {
        nome:'jose',
        idade: 3
    }
}

document.getElementById("nome").innerText = pessoa.nome
document.getElementById("idade").innerText = pessoa.idade
document.getElementById("nomeFilho").innerText = pessoa.filho.nome

console.log(pessoa.filho.nome)
