/*==============================================
    OPERADORES DE COMPARAÇÃO
        >       Maior
        <       Menor
        >=      Maior ou igual
        <=      Menor ou igual
        ==      Igual o valor
        ===     Igual o valor e o tipo da variavel
        !=      Diferente o valor
        !==     Diferente o valor e o tipo da variavel
==============================================*/

// DESAFIO 01
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisa para voltar quando fizer 18
const personAge = 16

console.log('DESAFIO - 01:')
console.log('idade atual: ' + personAge)
if(personAge >= 18) {
    console.log('Entre')
} else {
    console.log('Entrada não permitida')
    if (personAge === 17) {
        console.log('Volte quando fizer 18 anos')
    }
}

/*==============================================
    OPERADORES DE LÓGICOS
&& "E" As duas condições devem ser verdadeiras
    para que a condição final seja verdadeira.

|| "OU" Uma das condições deve ser verdadeira
    para que a condição final seja verdadeira.

!  "NÃO" Nega um condição.
==============================================*/




/*==============================================
    OPERADORES ARITMÉTICOS
    
    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

==============================================*/