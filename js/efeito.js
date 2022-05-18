function calcular (){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = peso/(altura^2)

    let box = document.getElementsByClassName("full-box")[0]
    let boxInput = document.getElementsByClassName("imc")[0]
    let submit = document.getElementsByClassName("submit")[0]
    let result = document.getElementById("resultado")

    if (imc < 18.5){
        result.innerHTML = "<h1>VOCÊ ESTÁ MUITO ABAIXO DO PESO!</h1><p>Você deve se concentrar em buscar um nutricionista e realizar musculação para aumentar sua massa muscular. <strong> Seu IMC é de "+ Math.round(imc)+ "</p>"
        box.style = "background: crimson; color: white;"
        boxInput.style = "background: crimson; color: white;"
        submit.style = "background: white;"
    }
    else if (imc >= 18.5 && imc < 24.99){
        result.innerHTML = "<h1> PARABÉNS! SEU PESO ESTÁ NORMAL!</h1><p>Mesmo assim, faça visitas periódicas no médico para avaliar seu estado de saúde. <strong> Seu IMC é de "+ Math.round(imc)+ "</p>"
        box.style = "background: darkgreen; color: white;"
        boxInput.style = "background: darkgreen; color: white;"
        submit.style = "background: lightgreen;"
    }
    else if (imc >= 24.99 && imc <30){
        result.innerHTML = "<h1> ALERTA! VOCÊ ESTÁ COM SOBREPESO!</h1><p>Já está na hora de analisar suas ações e buscar melhorar sua situação, antes que piore. <strong> Seu IMC é de "+ Math.round(imc)+ "</p>"
        box.style = "background: darkgoldenrod; color: white;"
        boxInput.style = "background: darkgoldenrod; color: white;"
        submit.style = "background: orange;"
    }
    else{
        result.innerHTML = "<h1>CUIDADO! VOCÊ ESTÁ COM OBESIDADE</h1><p> Mas se conseguiu fazer essa pesquisa, significa que ainda está vivo e pode mudar sua situação. Procure ajuda imediatamente! <strong> Seu IMC é de "+ Math.round(imc)+ "</p>"
        box.style = "background: crimson; color: white;"
        boxInput.style = "background: crimson; color: white;"
        submit.style = "background: white;"
    }

}

/*
=============================================
JAVASCRIPT - HTML - CSS

    Pegando elementos HTML pelo Id
    document.getElementById("id do elemento")

    Pegando elementos pela classe. Retorna um array com todos os elementos; sendo o primeiro [0]
    document.getElementsByClassName("classe dos elementos")[0]
    
    Pegando elementos pela tag html. Retorna um array com todos os elementos; sendo o primeiro [0] 
    document.getElementsByTagName("nome da tag")[0]
    
    É possível colocar qualquer objeto dentro de uma variável
    É um princípio básico, mas com ele é possível fazer algo como:
    let a = document.getElementById("id").style = "background: black"

============================================
MODIFICANDO ELEMENTOS
    

    innerHTML: Insere um texto em HTML, podendo ser inseridas as tags, que também 
    pode ter propriedades CSS
    EX: document.getElementById("id").innerHTML = "<h1 style='color: white> Bunda Mole</h1>"

    innerText: Pode exibir o que aparece na tela, ou inserir texto
    EX: document.getElementById("id").innerText = "Bunda mole"

    textContent:Exibe todo tipo de conteúdo de texto além de adicionar texto 
    document.getElementById("id").textContent = "Bunda mole"

    className: Modifica o nome do atributo class do objeto html
    Ex: document.getElementById("classe").className = "parag1"

    É possível criar um novo atributo html e buscar em js através da tag getAttribute,
    depois de pegar o ID
    Ex: document.getElementById("id").getAttribuite("atributo")

    para mudar o atributo criado, segue-se a mesma linha anterior mas o 
    atributo é setAttribute("nome atributo", "novo nome atributo")

    É possível criar um novo atributo em HTML usando setAttribute
    Ex: document.getElementById("id").setAttribute("novo atributo", "valor atributo")
    
    style: a partir desse objeto é possível acessar todas as configurações do css
    EX: document.getElementById("id").style = "background: #333; color: white; padding: 10px"
    

===============================================
EVENTOS JS

ONCLICK
    Pode-se criar um evento dentro da tag html através do atributo onclick
    EX: <h1 id="a" onclick="document.getElementById('a').style = 'background: #222;color: white; padding: 5px'">Rolabrava</h1>
    
    É possível declarar a função em outra página js e chamar através do atributo onclick
    EX: <h1 id="a" onclick="h1Click()">Rolabrava</h1>

    Onclick também pode modificar o objeto substituindo getElementById por this
    EX: <h1 id="a" onclick="this.style.background = 'teal'">Rolabrava</h1>

ONCHANGE
    É usado para que seja realizada uma ação caso haja alguma mudança
    EX: <input type="text" onchange="document.getElementsByTagName('body')[0].style.background= 'teal';">


    EXERCÍCIO
    Criar tag h1 e input de forma que o conteudo do h1 passe a ser o texto digitado no input
    Lembando que o this pode ser usado como referencia ao chamar a função e deixa-la mais limpa e
    para resgatar o texto do input: value
    Dúvidas? 07:16


    DESAFIO
    usar a propriedade onchange e hover do css para fazer aparecer um texto na tela com uma formatação diferente

    DESAFIO2
    Criar um h1 e uma div que, com o metodo onclick, vai fazer o h1 desaparecer, permanecendo seu espaço no lugar


ONMOUSEOVER/ONMOUSEOUT
    Quando o mouse passa por cima, realiza uma ação

ONLOAD
    Desencadeará uma função quando a página estiver totalmente carregada.
    Pode ser usado para chamar uma ação js antes da página ser totalmente carregada

    
==================================
ADICIONAR EVENTOS DIRETAMENTE PELO JAVASCRIPT
    
     Pode-se usar a função onload no body para chamar uma função que contenha todas as funcionalidades do JS
     EX: <body onload="loaded()">

------>na página js

function loaded () {
    let t1 = document.getElementById("t1")
    let t2 = document.getElementById("t2")

    t1.onclick = mudar
    t2.addEventListener("click", mudar)

    function mudar (){
        this.innerHTML = this.innerHTML.toUpperCase()
    }
}

    Também é possível realizar esse mesmo processo utilizando na página JS window.onload = 
    EX: window.onload = function (){
    (console.log("Carregado"))
}
=========================================
ELEMENTOS PAIS E FILHOS

    É possível acessar o elemento filho de alguma tag usando o atributo children
    Ex: console.log(document.getElementById("d1").children[0])
    Vai retornar todas as tags que estão dentro do elemento em um array
    Para selecionar um elemento filho específico, basta marcar a posição do array
    Ex: console.log(document.getElementById("d1").children[0])





    Exercício -> criar uma div com h1 e p e, buscar através do console.log,
    a partir do h1, a tag pai e, a partir da div, as tags filho

*/