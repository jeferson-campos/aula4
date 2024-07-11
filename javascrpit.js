// var nome = `luan`
// let age, isHuman

// age = 26,
// isHuman = true

// console.log(`Olá ${nome} voçê tem ${age} anos`);

// const person = {
//   nome: 'luan',
//   age: 26,
//   weight: 128.7,
//    isAdimin: true
// }
// console.log(`${person.nome} tem ${person.age} anos e pesa ${person.weight} kg e pesa para caralho`)

// const animals = [
//    'Lion',
//    "Monkey",
//    {
//    nome: 'cat',
//   age: 3

//    },
//    isHuman,
//    person
// ]

// console.log(animal[2].nome)

// console.log(animal[4].nome)

// let contador = 0
// while (contador < 18) {
//    console.log(contador)
//    contador++
// }
// var contador = 17

// while (contador > 0){
// console.log(contador)
// contador--
// }

// let contador = 0
// while (contador < 10) {
//    console.log(contador)
//    if (contador === 5) {
//    break
// }
// contador++
// }
// console.log(`O laço foi quebrado e o contador parou com //o valor ${contador//}`)

// let contador = 20
// while (contador >=0) {
//    console.log('vc acertou')
// }
// contador = prompt ('quero um numero ')

// if (contador === 0)
// contador = prompt("digite sua nota escolar");

// contador = 0
// if (contador > 6) {
//  console.log("vc foi aprovado");
// }

// if (contador < 6) {
//  console.log("vc foi reprovado");
// }

// let i = 0
// do {
// console.log(i);
// i++;
// } while (i < 50);
// for (var  i =1; i <=20; i++)
//  if (i % 2 )

// let soma = 0 
// while (true) {
//    let input = prompt
// }


// function getRandomInt(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min);
//  }
// while (true) {
//    let ress = parseInt(prompt("adivinhe um numero de um a dez"))
//    if (ress === num) {
//        alert("Parabens! Voçê acertou")
//        break
//    }else{alert("tente novamente");

//    }
// }

    

    
// class BancoSimulador {
//     constructor() {
//     this.saldo = 0.0;
//     }
    
//     exibirMenu() {
//     let opcao;
//     do {
//     opcao = prompt(`Menu:
//     1. Ver Saldo
//     2. Depositar
//     3. Sacar
//     4. Sair
//     Escolha uma opção:`);
    
//     switch (opcao) {
//     case '1':
//         this.verSaldo();
//         break;
//     case '2':
//         this.depositar();
//         break;
//     case '3':
//         this.sacar();
//         break;
//     case '4':
//     console.log("Encerrando o programa.");
//     break;
//     default:
//     console.log("Opção inválida. Tente novamente.");
//     }
//     } while (opcao !== '4');
//     }
    
//     verSaldo() {
//     console.log(`Seu saldo atual é: R$ ${this.saldo.toFixed(2)}`);
//     }
    
//     depositar() {
//     let valor = parseFloat(prompt("Digite o valor para depositar: R$ "));
//     if (valor > 0) {
//     this.saldo += valor;
//     console.log(`R$ ${valor.toFixed(2)} depositados com sucesso.`);
//     } else {
//     console.log("Valor inválido. Tente novamente.");
//     }
//     }
    
//     sacar() {
//     let valor = parseFloat(prompt("Digite o valor para sacar: R$ "));
//     if (valor > 0 && valor <= this.saldo) {
//     this.saldo -= valor;
//     console.log(`R$ ${valor.toFixed(2)} sacados com sucesso.`);
//     } else {
//     console.log("Valor inválido ou saldo insuficiente. Tente novamente.");
//     }
//     }
//     }
    
//      // Cria uma instância do simulador e exibe o menu
//     let simulador = new BancoSimulador();
//     simulador.exibirMenu();
//     const frutas = ['maça', 'melancia', 'banana']
//     frutas.push('abacaxi')
//     frutas.pop()

//     frutas.unshifit('pera')
// console.log(frutas)
//  const pessoas = ['kelly', 'saulo', 'joão']

// pessoas.splice(2, 3, "jose")
//  pessoas.splice(1, 2, "maria", "antonio")

//  console.log(pessoas)
// const lista = []
//     while (true) {
//         const menu = prompt('digite um nome ou sair para parar: ')
//         if(menu === 'sair'){
//             break
//         }
        
//         lista.push(menu)
//     lista.push['jeferson', 'lucas']
//     }


// const cores = ['vermelho', 'verde', 'azul', 'amarelo', 'roxo']
// const ultimaCores = cores.pop();
// cores.splice(1, 1, "laranja", "marrom",)

// const novasCores = ['vermelho', 'laranja',]
// console.log(novasCores.join('vermelho', 'laranja', 'marrom', 'azul', 'amarelo',)) 
// objeto.metodo();
    
// for(let cor of cores)
// document

// console.log(cores)
// console.log(novasCores)
// console.log(metodojoin)
// console.log()
// console.log()


// const notas = ['']
// while (true)
//     const menu = Number (prompt('voçê deseja adicionar uma nota, caso não é so digitar sair') {
//         if(menu === 'sair') {
//             break
//          }
//     }
  
// if(notas >= 6) {
//     console.log{'vc foi aprovado'}
// }
// else( notas <= 5) {
//     console.log('vc foi reprovado')
// }

