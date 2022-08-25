var numeroAleatorio = Math.floor(Math.random()*100) +1; 
var palpites = document.querySelector(".palpites")
var ultimoResultado = document.querySelector(".ultimoResultado")
var baixoOuAlto = document.querySelector(".baixoOuAlto")
var envioPalpite = document.querySelector(".envioPalpite")
var campoPalpite = document.querySelector(".campoPalpite")
var contagemPalpites = 1; 
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {    // funcao principal 
    var palpiteUsuario = Number(campoPalpite.value);   // transformando o numero capturado em n
    if (contagemPalpites === 1) { 
        palpites.textContent = 'Palpites anteriores: '; // se for o primeiro palpite, palp Ant vazio
    } 
    palpites.textContent += palpiteUsuario + ' '; 

    if (palpiteUsuario === numeroAleatorio) {    // se o numero estiver certo, texto parabenizando
        ultimoResultado.textContent = 'Parabéns! você acertou!'; // pinta fundo de verde e texto
        ultimoResultado.style.backgroundColor = 'greenyellow'; 
        baixoOuAlto.textContent = ''; 
        configFimDeJogo (); 
    } else if (contagemPalpites === 10) {     // se nao acertar e der 10 palpites ai 
        ultimoResultado.textContent = '!! FIM DE JOGO !!'; // escreve fim de jogo e chama function FimdeJogo
        baixoOuAlto.textContent = ''
        configFimDeJogo()
    } else {                            // para cada tentativa <10
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio) { 
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!'
        } else if (palpiteUsuario > numeroAleatorio) { 
            baixoOuAlto.textContent = 'Seu palpite está muito alto!'; 
        }
    }
    
    
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus(); 


    
}
envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo() {    // funcao para quando o jogo finaliza (ganhou ou  acabou tentativa)
    campoPalpite.disabled = true; 
    envioPalpite.disabled = true;             // as duas primeiras linhas desabilitam entrada de texto e clique
    botaoReinicio = document.createElement('button'); // cria um novo botao
    botaoReinicio.textContent = 'Iniciar novo jogo'
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo() {     // funcao para reiniciar o jogo
    contagemPalpites = 1;      // primeiro voltamos ao primeiro palpite

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');     // selecionamos o html
        for ( var i = 0; i < reiniciarParas.length; i++) { 
            reiniciarParas[i].textContent = ''; 
        }

        botaoReinicio.parentNode.removeChild(botaoReinicio);    // apagar o botao de reiniciar o jogo

        campoPalpite.disabled = false   
        envioPalpite.disabled = false  // voltar a entrada de texto e clique
        campoPalpite.value = ' '   // apagar o que estava escrito e trazer o foco 
        campoPalpite.focus(); 
        

        ultimoResultado.style.backgroundColor = 'white'; 

        numeroAleatorio = Math.floor(Math.random()* 100) + 1; 
}
