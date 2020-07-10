
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
var numPergunta = 0

function mostrarQuestao(){
    

    res.innerHTML =''
    res.style.color = ''
    resImg.src = ''
    resImg2.src = ''
    numQuestao = Math.floor(Math.random()*questoes.length)
    
    if(numPergunta == 10){
        numQuestao = 19
        numQuestaoGlobal = numQuestao
    }else{
        numQuestaoGlobal = numQuestao
    }
    console.log(numQuestaoGlobal)
    perguntas.innerHTML = questoes[numQuestaoGlobal].pergunta
    opt1.innerHTML = questoes[numQuestaoGlobal].respostas.a
    opt2.innerHTML = questoes[numQuestaoGlobal].respostas.b
    opt3.innerHTML = questoes[numQuestaoGlobal].respostas.c
    opt4.innerHTML = questoes[numQuestaoGlobal].respostas.d
    
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
    if(numPergunta == 2){
        perguntaUm.src = 'audio/pergunta-40mil.mp3'
    } else if(numPergunta == 6){
        perguntaTres.src = 'audio/pergunta-300mil.mp3'
    } else if(numPergunta == 8){
        perguntaDois.src = 'audio/pergunta-400mil.mp3'
    }

    numPergunta ++
    formatar()
}

function respondeu(resposta){
    respostaUsuario = parseInt(resposta.id)

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
    questoes.splice(numQuestaoGlobal, 1)
}

function formatar(){
    for(let i = 0; i < divStyle.length; i++){
        divStyle[i].classList.replace('respostaCorreta','respostasstyle')
    }
}

    



    
   








