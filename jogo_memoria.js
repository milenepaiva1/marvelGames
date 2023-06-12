const grid = document.querySelector('.grid');

const tempo = document.querySelector('.tempo')

const personagens =
    [
    'capitao',    
    'strange',
    'thor',
    'iron',
    'groot',
    'pantera',
    'viuva',
    'feiticeira',
    'aranha',
    'loki',
    ];

//Utilizada para criar os elementos de todas as cartas
const criarElement = (tag, className) => {
    const element = document.createElement (tag);
    element.className = className;
    return element;
}

    const checkFimDeJogo = () =>{
        const cardsDesabilitados = document.querySelectorAll('.desabilitar-card');

        if (cardsDesabilitados.length === 20){

            clearInterval(this.loop);
    
            Swal.fire({
              icon: 'success',
              title: 'Parabéns, você conseguiu!',
            })
    }}

let primeiroCard = '';
let segundoCard = '';

const verificarCards = () =>{
    const primeiroPersonagem = primeiroCard.getAttribute('data-character');
    const segundoPersonagem = segundoCard.getAttribute('data-character');

    if(primeiroPersonagem === segundoPersonagem){

        primeiroCard.firstChild.classList.add('desabilitar-card');
        segundoCard.firstChild.classList.add('desabilitar-card');

        primeiroCard = '';
        segundoCard = ''

        checkFimDeJogo()

    }else{
        setTimeout(() =>{
            primeiroCard.classList.remove('girar-card');
            segundoCard.classList.remove('girar-card');
        
            primeiroCard = '';
            segundoCard = '';

        }, 600);
          
    }

}

const girarCard = ({target}) =>{
    if(target.parentNode.className.includes('girar-card')){
        return;
    }

    if (primeiroCard === ''){
        target.parentNode.classList.add('girar-card');
        primeiroCard = target.parentNode;
    }else if (segundoCard === ''){
        target.parentNode.classList.add('girar-card');
        segundoCard = target.parentNode;

        verificarCards();
    }

    
}



// Função utilizada para criar as cartas do jogo

const criarCard = (personagem) => {

  
    const card = criarElement('div','card');
    const front = criarElement('div', 'face front');
    const back = criarElement('div', 'face back' );

    front.style.backgroundImage = `url('images/${personagem}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', girarCard);

    card.setAttribute('data-character', personagem)

    return card;    
}

const carregarJogo = () => {

    const duplicarPersonagens = [...personagens, ...personagens];

    //Utilizando a função Math.random() que retorna um número aleatório entre 0 e 1 para embaralhar as cartas 
    const embaralharArray = duplicarPersonagens.sort(() => Math.random() - 0.5);

    embaralharArray.forEach((personagem)=>{
        const card = criarCard(personagem);
        grid.appendChild(card)

    });
}

const timer = () => {

   
    this.loop =  setInterval(() => {
    const tempoCorrendo = +tempo.innerHTML;
        tempo.innerHTML = tempoCorrendo + 1;  

    },1000)

}

window.onload = () =>{
    timer();
    carregarJogo();


}

function novoJogo() {
    location.reload();
  }
