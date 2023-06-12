var sPerguntas = [["CARAMBOLA" , "FRUTA"],
["JAMBO", "FRUTA"],["PITOMBA","FRUTA"],["HOLAMBRA","CIDADE"],["HORTOLÂNDIA","CIDADE"],["ALICATE", "FERRAMENTA"],["MARTELO", "FERRAMENTA"],["CHAVE DE FENDA", "FERRAMENTA"],["JORNAL", "OBJETO"],["PALITO DE DENTE", "OBJETO"],["STROGONOFF", "COMIDA"],["MACARRONADA", "COMIDA"],["CANELONE", "COMIDA"],["SANTANA", "CARRO"],["RENEGATE", "CARRO"],["ROSA", "FLOR"],["CALANCHUÊ", "FLOR"],["LÍRIO", "FLOR"],["VIOLÃO", "INSTRUMENTO MUSICAL"],["SAXOFONE", "INSTRUMENTO MUSICAL"],["UKULELÊ", "INSTRUMENTO MUSICAL"],["ESCALETA", "INSTRUMENTO MUSICAL"],["TROMBONE", "INSTRUMENTO MUSICAL"],["ADAM SANDLER", "ATOR"],["JOHNNY DEPP", "ATOR"],["DWAYNE JOHNSON", "ATOR"],["MERYL STREEP", "ATRIZ"],["SCARLETT JOHANSSON", "ATRIZ"],["PATO DONALD", "PERSONAGEM"],["CAPITÃO AMÉRICA", "PERSONAGEM"],["AQUAMAN", "PERSONAGEM"],["PAC-MAN", "JOGOS"],["CALL OF DUTY", "JOGOS"],,["JABOTICABA", "FRUTA"],["CUPUAÇU", "FRUTA"] ,["FORTALEZA", "CIDADE"],["TERESÓPOLIS", "CIDADE"],["CARAPICUIBA", "CIDADE"],["SERROTE", "FERRAMENTA"],["FORMÃO", "FERRAMENTA"],["ALMOFADA", "OBJETO"],["BOLSA", "OBJETO"],["CHURRASQUEIRA", "OBJETO"],["LASANHA", "COMIDA"],["FRANGO XADREZ", "COMIDA"],["AEROWILLYS", "CARRO"],["VARIANT", "CARRO"],["VIRTUS", "CARRO"]]

var iSorteados = [];

var iJogada = 0;

var sPalavraSorteada;

var iAcertos = 0;

var iErro = 0;

var cLetraClicada = "";

var sLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-'];

var iCertas = 0, iErradas = 0;


function criaLetras(sPalavra){
    var formula = document.getElementById("tenta");
    var j = 0;
    console.log("Palavra: " + sPalavra);

    for (var i=0;i<sPalavra.length;i++){
        if(sPalavra[i].charCodeAt(0)!=32){
            var letra = document.createElement("input");

            letra.setAttribute("type","text");
            letra.setAttribute("name","tenta" + j);
            letra.setAttribute("id","tenta"+ j);
            letra.setAttribute("id","tenta"+ j);
            letra.setAttribute("maxlength",1);
            letra.setAttribute("disabled","true");

            formula.appendChild(letra);
            j++;
        }else{
            document.getElementById ("tenta" +(j-1)).style.margin = "0px 20px 0px 1px";
        }
    }

    sPalavraSorteada=limpa(sPalavra);

    document.getElementById("tema").innerHTML=sPerguntas[iSorteados[iJogada]][1]+" - "+sPalavraSorteada.length+" letras";
}

function sorteia(){
    for (var m=0;m<sPerguntas.length;m++){
        iSorteados.push(m);
    }

    iSorteados = shuffleArray (iSorteados);

    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}

function Confere(cLetra){
    cLetraClicada = cLetra;
    var lAchou = false;

    for(var i=0;i<sPalavraSorteada.length;i++){
        if(cLetra==sPalavraSorteada.charAt(i)){
            document.getElementById("tenta"+i).value=cLetra;
            iAcertos++;
            document.getElementById("acerto").innerHTML="ACERTOS: "+iAcertos;
            lAchou = true;
        }
    }

    if(lAchou==false){
        iErro++;

        document.getElementById("imagem").src="images/forca" + (iErro+1)+".png";

    }

}

function acabou(){

    var lAcabou=false;

    if (iAcertos==sPalavraSorteada.length){
        lAcabou=true;
        alert("Parabéns, você conseguiu!")
        iCertas++;
    }else if(iErro==6){
        lAcabou=true;
        alert("Enforcado!!")
        iErradas++;
    }

    document.getElementById(cLetraClicada).disabled=true;

    if(lAcabou){
        for(var i = 0;i<sPalavraSorteada.length;i++){
            document.getElementById("tenta"+i).remove();
        }

        iJogada++;

        document.getElementById("palavracerta").innerHTML=
        "Palavras Certas: "+iCertas+"<br>Palavras Erradas: " +iErradas;

        criaLetras(sPerguntas[iSorteados[iJogada]][0]);

        iAcertos = 0;
        iErro = 0;

        document.getElementById("acerto").innerHTML="Acertos: "+iAcertos;

        document.getElementById("imagem").src="images/forca"+(iErro+1)+".png";

        for(var i=0;i<sLetras.length;i++){
            document.getElementById(sLetras[i]).disabled=false;
        }

    }

}


function shuffleArray(d){
    for (var c = d.length - 1; c>0;c--){
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }

    return d;
}

function limpa(sItem){
    var sResultado = sItem;

    sResultado = replaceAll(sResultado," ","");
    sResultado=sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    return sResultado;

}

function replaceAll(str, de, para){
var pos = str.indexOf(de);

while (pos > -1){
    str = str.replace(de, para);
    pos = str.indexOf(de);
}

return(str);

}

function shake(e, oncomplete, distance, time){
    var time = 500;
    var distance = 5;
    
    var start = (new Date()).getTime();
    animate();
}

function animate(){
    var now = (new Date()).getTime();

    var elapsed = now - start;

    var fraction = elapsed / time;

    if(fraction < 1){
        var x = distance * Math.sin(fraction * 4 * Math.PI);
        e.style.left = x + "px";

        setTimeout(animate, Math.min(25, time - elapsed));
    }else{
        if(oncomplete) oncomplete(e);
    }
}

function shakeme(event1){
    shake(event1.target);
}

