console.log("----------------------------");

//EXERCICIO 1 / Codificação Sistema de Cadastro de Eventos

let dataEvento = [10, 11, 2021];
let dataHoje = [11, 10, 2021];
let idade = 18;

let participantes = [];

if((dataEvento[2] - dataHoje[2]) < 0){
    console.log("Impossível marcar, pois o evento ja ocorreu!");
} else if ((dataEvento[1] - dataHoje[1]) < 0){
    console.log("Impossível marcar, pois o evento ja ocorreu!");
} else if (((dataEvento[0] - dataHoje[0]) < 0) && ((dataEvento[1] - dataHoje[1]) == 0)){
    console.log("Impossível marcar, pois o evento ja ocorreu!");
} else {
    if(idade < 18){
        console.log("Impossível marcar, pois a idade é inferior a 18 anos.");
    } else {
        if(participantes.length < 100){
        participantes.push('participante 1');
        console.log("participante adicionado!");
        console.log(participantes);
        }
        else{
            console.log("limite de participantes ja atingido!");
        }
    }        
}

console.log("----------------------------");

//EXERCÍCIO 2 / Codificação de um sistema de contagem de peças

let pesoPeca = 100;
let pecas = ['peça1','peça2','peça3','peça4','peça5','peça6','peça7','peça8','peça9','peça10'];

if(pesoPeca >= 100){
   if(pecas.length >10){
    console.log("o sistema não pode cadastrar mais que 10 peças");
   }
   else{
       for(let i=0; i<pecas.length; i++){
           if(pecas[i].length <3){
               console.log("A peça: "+pecas[i]+" possui o nome inferior a 3 digitos! não será cadastrada!");
           }
           else{
               console.log("peça: "+pecas[i]+", cadastrado com sucesso");
           }
       }
   }
}

console.log("----------------------------");
//EXERCÍCIO 3 / Codificação de um sistema de contagem e classificação
let qtdAlunos = 35;

for(let i=0; i<=qtdAlunos; i++){
    if(i==0){
        console.log("zero: "+i);
    }
    if(i%2 == 0 && i != 0){
        console.log("par: "+i);
    }
    if(i%2 != 0 && i!=0){
        console.log("impar: "+i);
    }

}