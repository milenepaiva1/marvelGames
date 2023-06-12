// var viuvaV = false;

// function viuva() {
//     var conteudoViuva = document.getElementById("conteudo-viuva");
  
//     if (!viuvaV) {
//         conteudoViuva.innerHTML = "<p>A Viúva Negra, cujo nome verdadeiro é Natasha Romanoff, é uma espiã altamente treinada e assassina profissional do Universo Cinematográfico Marvel. Ela foi recrutada na Rússia e submetida a um programa de treinamento intenso, tornando-se uma agente letal. Como membro dos Vingadores, Natasha demonstrou habilidades excepcionais em artes marciais, combate corpo a corpo e estratégias táticas, desempenhando um papel fundamental na proteção do mundo contra ameaças. Interpretada por Scarlett Johansson, a história da Viúva Negra foi explorada em detalhes no filme solo de mesmo nome, revelando seu passado sombrio e eventos anteriores aos acontecimentos de 'Vingadores: Ultimato'</p>";
//         conteudoViuva.style.display = "block";
//         viuvaV = true;
//     } else {
//         conteudoViuva.innerHTML = "";
//         conteudoViuva.style.display = "none";
//         viuvaV = false;
//     }
// }

// var feiticeiraV = false;
// function feiticeira() {
//     var conteudoF = document.getElementById("conteudo-feiticeira");
  
//     if (!feiticeiraV) {
//         conteudoF.innerHTML = "<p>A Feiticeira Escarlate, também conhecida como Wanda Maximoff, é um personagem da Marvel Comics e do Universo Cinematográfico Marvel (MCU). Ela possui habilidades mágicas e de manipulação da realidade, sendo retratada como uma mutante aprimorada por experimentos com a Joia da Mente no MCU. Interpretada por Elizabeth Olsen, a Feiticeira Escarlate é uma personagem poderosa e sua jornada é marcada por conflitos, traumas e uma evolução significativa de seus poderes, tendo um papel fundamental nos eventos dos filmes e da série 'WandaVision'.</p>";
//         conteudoF.style.display = "block";
//         feiticeiraV = true;
//     } else {
//         conteudoF.innerHTML = "";
//         conteudoF.style.display = "none";
//         feiticeiraV = false;
//     }
// }

// var shuriV = false;
// function shuri() {
//     var conteudoS = document.getElementById("conteudo-shuri");
  
//     if (!shuriV) {
//         conteudoS.innerHTML = "<p>Shuri, a brilhante princesa de Wakanda, passou por uma notável evolução ao longo do Universo Cinematográfico Marvel. Inicialmente introduzida como a irmã mais nova de T'Challa em 'Pantera Negra' (2018), Shuri conquistou rapidamente o coração dos fãs com seu humor, inteligência e habilidades tecnológicas impressionantes. Sua presença se expandiu em 'Vingadores: Guerra Infinita' (2018), onde contribuiu para a luta contra Thanos. Com seu carisma e conhecimentos avançados, Shuri estabeleceu-se como uma personagem cativante e essencial, desempenhando um papel crucial na defesa e no desenvolvimento tecnológico de Wakanda, estabelecendo-se como uma figura inspiradora e querida pelos fãs do MCU.</p>";
//         conteudoS.style.display = "block";
//         shuriV = true;
//     } else {
//         conteudoS.innerHTML = "";
//         conteudoS.style.display = "none";
//         shuriV = false;
//     }
// }

// Viúva Negra
const viuva = document.querySelector('.viuva');

viuva.addEventListener('mouseover', () => {
    const conteudoViuva = document.getElementById('conteudo-viuva');
    conteudoViuva.innerHTML = 'A Viúva Negra, também conhecida como Natasha Romanoff, é uma espiã altamente treinada e assassina profissional. Sua habilidade em artes marciais, combate corpo a corpo e uso de armas de fogo a torna uma agente letal. Ela é conhecida por sua inteligência, sagacidade e habilidades táticas.';
});

viuva.addEventListener('mouseout', () => {
    const conteudoViuva = document.getElementById('conteudo-viuva');
    conteudoViuva.innerHTML = '';
});

// Feiticeira Escarlate
const feiticeira = document.querySelector('.feiticeira');

feiticeira.addEventListener('mouseover', () => {
    const conteudoFeiticeira = document.getElementById('conteudo-feiticeira');
    conteudoFeiticeira.innerHTML = 'A Feiticeira Escarlate, também conhecida como Wanda Maximoff, é uma poderosa mutante com habilidades mágicas e a capacidade de manipular a realidade. Ela possui uma jornada marcada por conflitos pessoais, traumas e uma evolução significativa de seus poderes, tornando-a uma das personagens mais complexas e poderosas do Universo Marvel';
});

feiticeira.addEventListener('mouseout', () => {
    const conteudoFeiticeira = document.getElementById('conteudo-feiticeira');
    conteudoFeiticeira.innerHTML = '';
});

// Shuri
const shuri = document.querySelector('.shuri');

shuri.addEventListener('mouseover', () => {
    const conteudoS = document.getElementById('conteudo-shuri');
    conteudoS.innerHTML = 'Shuri, a brilhante princesa de Wakanda, é especializada em tecnologia avançada e desempenha um papel fundamental no desenvolvimento e proteção de seu reino. Ela é uma personagem carismática e talentosa que conquistou os fãs com sua inteligência excepcional e habilidades tecnológicas impressionantes';
});

shuri.addEventListener('mouseout', () => {
    const conteudoS = document.getElementById('conteudo-shuri');
    conteudoS.innerHTML = '';
});

//Doutor Estranho
const doutor = document.querySelector('.stranger');

doutor.addEventListener('mouseover', () => {
    const conteudoD = document.getElementById('conteudo-doutor');
    conteudoD.innerHTML = 'Doutor Estranho, é um brilhante cirurgião que se torna um poderoso feiticeiro após um acidente. Com habilidades místicas e conhecimento das dimensões sobrenaturais, ele protege a Terra contra ameaças interdimensionais, usando artefatos poderosos e sua Capa da Levitação. O Doutor Estranho desempenha um papel crucial no Universo Cinematográfico Marvel, defendendo o mundo com suas habilidades astrais e magia';
});

doutor.addEventListener('mouseout', () => {
    const conteudoD = document.getElementById('conteudo-doutor');
    conteudoD.innerHTML = '';
});


//Doutor Estranho
const cap = document.querySelector('.cap');

cap.addEventListener('mouseover', () => {
    const conteudoC = document.getElementById('conteudo-cap');
    conteudoC.innerHTML = 'O Capitão América, também conhecido como Steve Rogers, é um super soldado e líder icônico dos Vingadores. Dotado de força sobre-humana e habilidades de combate exemplares, ele luta pela justiça e pela liberdade. O Capitão América é um símbolo de coragem, honra e determinação.';
});

doutor.addEventListener('mouseout', () => {
    const conteudoC = document.getElementById('conteudo-cap');
    conteudoC.innerHTML = '';
});