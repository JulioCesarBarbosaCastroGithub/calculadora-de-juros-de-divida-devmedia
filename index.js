import entradaDados from 'readline-sync';

console.log("\nAplicação de Juros:\n");

let valorDevido = entradaDados.question("Informe o valor devido: R$ ");

let taxaDeJuros;

let valorTotal;

if(valorDevido > 0){

    let diasEmAtraso = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

    if(diasEmAtraso > 0){

            if(diasEmAtraso > 15){
                taxaDeJuros = 10;
                valorTotal = (valorDevido * 0.10) + Number(valorDevido);
            }else{
                taxaDeJuros = 5;
                valorTotal = (valorDevido * 0.05) + Number(valorDevido);
            }

            console.log("\nValor original da dívida: R$ " + valorDevido);
            console.log("Dias atrasados: " + diasEmAtraso + " dias");
            console.log("Taxa de juros: " + taxaDeJuros + "%");
            console.log("Valor total com juros: R$ " + valorTotal);
    }else{
        console.log("A dívida deve ter pelo menos 1 dia de atraso!");
    }
}else{
    console.log("O valor da dívida deve ser maior que zero!");
}