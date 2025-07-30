const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao1"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao2"
            }
        ]
    },
    {
        enunciado: "Com a chegada da inteligência artificial, como você imagina o futuro do trabalho e da sociedade?",
        alternativas: [
            {
                texto: "A IA vai automatizar muitos empregos, exigindo novas habilidades.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "A IA vai criar novas oportunidades e otimizar processos.",
                afirmacao: "afirmacao4"
            }
        ]
    },
    {
        enunciado: "Você seria a favor de regulamentar o uso da IA para evitar problemas éticos e sociais?",
        alternativas: [
            {
                texto: "Sim, é fundamental ter regras claras para a IA.",
                afirmacao: "afirmacao5"
            },
            {
                texto: "Não, a regulamentação pode atrasar o avanço tecnológico.",
                afirmacao: "afirmacao6"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        // Se todas as perguntas foram respondidas, pode-se mostrar um resultado final ou reiniciar.
        caixaPerguntas.textContent = "Fim do jogo!";
        caixaAlternativas.innerHTML = ''; // Limpa as alternativas
        textoResultado.textContent = "Você chegou ao final do questionário sobre IA.";
        return; // Sai da função
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            // Aqui você pode adicionar lógica para armazenar a afirmação escolhida
            // console.log(alternativa.afirmacao); 
            
            atual++; // Avança para a próxima pergunta
            mostraPergunta(); // Mostra a próxima pergunta
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta(); // Inicia o jogo