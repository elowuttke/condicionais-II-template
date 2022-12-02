 console.log(" - AULA CONDICIONAIS II -")

 // if aninhados
 let idadeDependente

 // idadeDependente >= 13
 // idadeDependente <= 17

 if (idadeDependente >= 13){
    if(idadeDependente <= 17){
        console.log(`Pode ter o cartão de dependente`)
    } else {
        console.log(`o limite de idade é 17 anos`)
    }
 } else {
    console.log(`Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank.`)
 }

 //usando operadores lógicos

 if (idadeDependente >= 13 && idadeDependente <= 17){
    console.log(`Pode ter o cartão de dependente`)
 } else {
    console.log(`Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte possibilidades do Labank`)
 }

 // if ternário

 let chuva = false

 chuva ? console.log(`leva sombrinha`) : console.log(`pode deixar a sombrinha`)

 idadeDependente === 13 ? console.log(`pode ter cartão`) : console.log(`consulte outras opções`)

 // Switch-case

 let escolhaUsuario = +(prompt(`Escolha
 1-Fácil
 2-Black
 3-Platinum
 4-Master Gold`))
 let cartao

 switch (escolhaUsuario) {
    case 1:
        cartao = `Fácil`
        break;
    case 2:
        cartao = `Black`
        break
    case 3:
        cartao = `Platinum`
        break
    case 4:
        cartao = `master gold`
        break
    default:
        cartao = `Escolha uma das quatro opções disponíveis`
        break;
 }
 console.log(cartao)

 // FIXAÇÃO

 numeroEscolhido = +(prompt("Digite um número:"))

 verificaDiv2 = numeroEscolhido%2===0
 verificaDiv3 = numeroEscolhido%3===0

 if (verificaDiv2 && verificaDiv3){
    console.log(`O número escolhido (${numeroEscolhido}) é divisível por 2 E por 3.`)
    //numeroEscolhido === 30 
    //? console.log(`UFA ACERTEI! O número surpresa é 30!`) 
    //: console.log(`Não foi dessa vez, você não acertou o número surpresa :(`)
    switch(numeroEscolhido){
        case 6:
            console.log(`O número escolhido foi 6.`)
        break
        case 12:
            console.log(`O número escolhido foi 12.`)
        break
        case 18:
            console.log(`O número escolhido foi 18.`)
        break
        case 24:
            console.log(`O número escolhido foi 24.`)
        break
        case 30:
            console.log(`O número escolhido foi 30.`)
        break
        default:
            console.log(`o número é maior que 30 ou menor que 6`)
    }
 }else{
    console.log(`Número não divisível por 2 e 3`)
 }

