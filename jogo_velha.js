//Inicializa as casas com nove para sabermos que não foi clicado

var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

//Indica a vez do jogador -(1) xis (-1)bola

var vez = 1;

//conta quantos cliques foram dados durante o jogo

var contaClique = 0;

//Placar

var iPontosCapitao= 0;
var iPontosIron= 0;
var iPontosV = 0;
var sResposta = "";

//Função que verifica as jogadas

function verifica(casa) {
  if (casas[casa] == 9) {
    casas[casa] = vez;

    if (vez == 1) {
      document.getElementById("img" + casa).src = "images/capitaoA.jpg";
      document.getElementById("img" + casa).style.width = "100%";
      document.getElementById("img" + casa).style.height = "100%";
    } else {
      document.getElementById("img" + casa).src = "images/ironM.jpg";
      document.getElementById("img" + casa).style.width = "100%";
      document.getElementById("img" + casa).style.height = "100%";
    }

    vez *= -1;
    contaClique++;

    confere();
  }
}

function confere() {
  var i;

  var ganhou = false;
  var acabou = true;

  for (i = 0; i < casas.length; i++) {
    if (casas[i] == 9) {
      acabou = false;
    }
  }

  if (contaClique == 9) {
    acabou = true;
  }

  var Soma = [];
  Soma[0] = casas[0] + casas[1] + casas[2]; //linha 1
  Soma[1] = casas[3] + casas[4] + casas[5]; //linha 2
  Soma[2] = casas[6] + casas[7] + casas[8]; //linha 3
  Soma[3] = casas[0] + casas[3] + casas[6]; //coluna 1
  Soma[4] = casas[1] + casas[4] + casas[7]; //coluna 2
  Soma[5] = casas[2] + casas[5] + casas[8]; //coluna 3
  Soma[6] = casas[0] + casas[4] + casas[8]; //diagonal 1
  Soma[7] = casas[2] + casas[4] + casas[6]; //diagonal 2

  for (i = 0; i < Soma.length; i++) {
    if (Soma[i] == -3) {
      ganhou = true;
      sResposta = "Homem de Ferro ganhou!!";
      iPontosIron++;
      document.getElementById("iron").innerHTML = "Pontos Homem de Ferro: " + iPontosIron;
      break;
    } else if (Soma[i] == 3) {
      ganhou = true;
      sResposta = "Capitão América ganhou!!";
      iPontosCapitao++;
      document.getElementById("capitao").innerHTML = "Pontos Capitão América: " + iPontosCapitao;
      break;
    }
  }

  if (ganhou == false && acabou == true) {
    sResposta = "Deu velha!!";
    iPontosV++;
    document.getElementById("velha").innerHTML = "Velha: " + iPontosV;
  }

  if (ganhou || acabou) {
    for (i = 0; i < casas.length; i++) {
      document.getElementById("casa" + i).disable = true;
      casas[i] = 0;
    }
    document.getElementById("resposta").innerHTML = sResposta;

    document.getElementById("resposta").style.color = "black";

    document.getElementById("resposta").style.fontSize = "25px";
  }
}

function recomeca(){
    for(i=0;i<casas.length;i++){
        document.getElementById("img"+i).ondragstart = function(){return false; };

        document.getElementById("casa"+i).disable=false;

        document.getElementById("img" + i).src="images/branco.png";

        document.getElementById("resposta").innerHTML = "Resultado:";
        document.getElementById("resposta").style.color = "black";
        document.getElementById("resposta").style.fontSize = "25px";

        casas[i]=9;
        ganhou=false;
        acabou= true;
        contaClique=0;
        vez =1;
    }
}