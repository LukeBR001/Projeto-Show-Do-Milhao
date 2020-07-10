//Aqui separei um espaço pra declarar todas minhas variáveis//
var perguntas = document.getElementById('perguntas')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var res = document.getElementById('res')
var resImg = document.getElementById('resImg')
var resImg2 = document.getElementById('resImg2')
var resImgMilhao = document.getElementById('resImgMilhao')
var resImg4 = document.getElementById('perdeuTudo')
var errar = document.getElementById('errarP')
var parar = document.getElementById('pararP')
var acertar = document.getElementById('acertarP')

var divStyle = document.getElementsByClassName('divs')

var numQuestaoGlobal = 0
var respostaUsuario
//contador para o código saber em qual pergunta está//
var numPergunta = 0
//função para mostrar dinamicamente as perguntas e opções na tela//
function mostrarQuestao(){

    //resetar elementos alterados toda vez que chamar a função//
    res.innerHTML =''
    res.style.color = ''
    resImg.src = ''
    resImg2.src = ''
    //gerador de indice de questões. É pra pegar questões aleatorias no outro arquivo.//
    numQuestao = Math.floor(Math.random()*questoes.length)
    
    if(numPergunta == 10){
        numQuestao = 19
        numQuestaoGlobal = numQuestao
    }else{
        numQuestaoGlobal = numQuestao
    }
    //aqui é onde as perguntas e opções sao escritas na tela//
    perguntas.innerHTML = questoes[numQuestaoGlobal].pergunta
    opt1.innerHTML = questoes[numQuestaoGlobal].respostas.a
    opt2.innerHTML = questoes[numQuestaoGlobal].respostas.b
    opt3.innerHTML = questoes[numQuestaoGlobal].respostas.c
    opt4.innerHTML = questoes[numQuestaoGlobal].respostas.d
    //controle da recompensa das perguntas, que muda dinamicamente//
    if(numPergunta == 0){
        errar.innerHTML = 0
        parar.innerHTML = 0
        acertar.innerHTML = `${1} MIL`
    }else if(numPergunta > 0 && numPergunta <= 4){
        acertar.innerHTML = `${numPergunta*20} MIL`
        parar.innerHTML = `${numPergunta*12} MIL`
        errar.innerHTML = `${numPergunta*5} MIL`
    }else if(numPergunta > 4 && numPergunta <= 9){
        acertar.innerHTML = `${numPergunta*50} MIL`
        parar.innerHTML = `${numPergunta*25} MIL`
        errar.innerHTML = `${numPergunta*10} MIL`
    } else{
        acertar.innerHTML = `MILHÃO`
        parar.innerHTML = `${numPergunta*50} MIL`
        errar.innerHTML = 0
        perguntaMilhao.src = 'audio/pergunta-final.mp3'
        
    }
    //algumas falas do silvio que adicionei. A principio ia fazer uma function só para isso, mas... //
    if(numPergunta == 2){
        perguntaUm.src = 'audio/pergunta-40mil.mp3'
    } else if(numPergunta == 6){
        perguntaTres.src = 'audio/pergunta-300mil.mp3'
    } else if(numPergunta == 8){
        perguntaDois.src = 'audio/pergunta-400mil.mp3'
    }
    //Adiciona +1 no contador de perguntas e chama a function, que é pra voltar as Divs(que veremos à frente) para a coloração normal(vermelha)//
    numPergunta ++
    formatar()
}
//função feita para capturar as respostas do usuário e mudar a coloração caso acerte//
function respondeu(resposta){
    respostaUsuario = parseInt(resposta.id)
    //foram adicionados alguns audios e imagens//
    if(numPergunta == 11 && respostaUsuario == questoes[numQuestaoGlobal].respostaCerta){
        resImg3.src = 'img/silvio-premio.png'
        resImgMilhao.src = 'img/milhao.png'
        res.innerHTML = 'PARABÉNS !!!<br>VOCÊ GANHOU<br>UM MILHÃO !!!'
        voceGanhou.src = 'audio/umMilhao.mp3'
        
    }else if(numPergunta == 11 && respostaUsuario != questoes[numQuestaoGlobal].respostaCerta){
        res.innerHTML = 'PERDEU TUDO !!!'
        res.style.color = 'red'
        resImg4.src = '/img/silvio-santos-decepcionado.png'
        errou.src = 'audio/voce-errou.mp3'
    }else if(respostaUsuario == questoes[numQuestaoGlobal].respostaCerta){
        //nesse momento eu mudo a classe da div em que o usuario clicou, caso esteja certa, para a cor ficar verde//
        resposta.classList.replace('respostasstyle', 'respostaCorreta')
        res.innerHTML ='Você ACERTOU !'
        res.style.color = 'green'
        resImg2.src = '/img/silvio-coracao.png'
        voceAcertou.src = '/audio/certa-resposta.mp3'

    }else {
        res.innerHTML ='Você PERDEU !'
        res.style.color = 'red'
        resImg.src = '/img/silvio-cara-seria.png'
        errou.src = 'audio/voce-errou.mp3'
    }
    //aqui adicionei um splice pra remover a questão que ja foi chamada, mas ainda há erros//
    questoes.splice(numQuestaoGlobal, 1)
}
//função feita apenas pra mudar a div de cor verde para vermelho novamente.
//Tipo alguns problemas aqui no inicio, mas depois percebi que qnd selecionamos algo com "getByClassName" ele retorna um array, então a solução foi realizar um "for" para percorrer o array e mudar todas as divs novamente.
function formatar(){
    for(let i = 0; i < divStyle.length; i++){
        divStyle[i].classList.replace('respostaCorreta','respostasstyle')
    }
}

    



    
   








