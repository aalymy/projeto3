const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de anos economizando, você finalmente consegue realizar o sonho de dar a volta ao mundo. Ao abrir o mapa para decidir o primeiro destino, percebe que pode começar por um lugar histórico ou por um lugar moderno e tecnológico. Qual será sua escolha?",
        alternativas: [
            {
                texto: "Um destino histórico – quero começar explorando culturas antigas e tradições milenares.",
                afirmacao: "Iniciou a jornada caminhando por ruas de pedra e ouvindo histórias que atravessaram séculos."
            },
            {
                texto: "Um destino moderno – quero sentir a energia de uma cidade vibrante e inovadora.",
                afirmacao: "Começou a viagem cercado por arranha-céus, luzes e tecnologias impressionantes."
            }
        ]
    },
    {
        enunciado: "Ao chegar ao seu primeiro destino, surge um dilema: um guia local oferece um tour completo, enquanto um grupo de viajantes te convida para explorar sem roteiro, confiando no improviso. O que você faz?",
        alternativas: [
            {
                texto: "Aceito o tour guiado – quero aprender com quem realmente conhece o lugar.",
                afirmacao: "Aprofundou seu conhecimento sobre a cultura local e descobriu curiosidades únicas."
            },
            {
                texto: "Vou com os viajantes – prefiro aventuras inesperadas e liberdade total.",
                afirmacao: "Vivenciou momentos inesperados, incluindo uma festa tradicional escondida nas ruas estreitas."
            }
        ]
    },
    {
        enunciado: "Durante o trajeto para o próximo país, uma tempestade causa atrasos nos voos. A companhia oferece duas opções: esperar no aeroporto e garantir um voo seguro no dia seguinte ou embarcar em um trem noturno que atravessa paisagens raramente vistas. O que decide?",
        alternativas: [
            {
                texto: "Espero pelo voo – segurança e conforto vêm primeiro.",
                afirmacao: "Descansou e chegou ao próximo destino com energia para aproveitar ao máximo."
            },
            {
                texto: "Vou de trem – quero aproveitar cada segundo da viagem, mesmo que seja mais cansativo.",
                afirmacao: "Viu montanhas cobertas de neve e aldeias isoladas que nunca esquecerá."
            }
        ]
    },
    {
        enunciado: "Chegando em um país tropical, você descobre que há dois eventos acontecendo no mesmo dia: uma expedição de mergulho em recifes raros e uma celebração cultural com música e dança típicas. Qual experiência escolhe?",
        alternativas: [
            {
                texto: "Mergulho nos recifes – quero explorar a vida marinha e paisagens subaquáticas.",
                afirmacao: "Nadou entre cardumes coloridos e corais centenários, sentindo a imensidão do oceano."
            },
            {
                texto: "Celebração cultural – quero viver a energia e a alegria do povo local.",
                afirmacao: "Dançou, provou comidas típicas e participou de rituais tradicionais inesquecíveis."
            }
        ]
    },
    {
        enunciado: "Após meses viajando, você precisa escolher como encerrar sua volta ao mundo. Pode participar de um jantar luxuoso em um hotel 5 estrelas ou passar a última noite em uma praia isolada assistindo ao pôr do sol. Qual será sua despedida?",
        alternativas: [
            {
                texto: "Jantar luxuoso – quero encerrar com requinte e celebração.",
                afirmacao: "Brindou com pratos sofisticados e música ao vivo, celebrando cada momento vivido."
            },
            {
                texto: "Praia isolada – quero um momento simples e introspectivo.",
                afirmacao: "Sentou na areia, sentindo a brisa e refletindo sobre a jornada que mudou sua vida."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua volta ao mundo foi assim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
