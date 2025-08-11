const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com a chegada da Inteligência Artificial, quais os principais desafios éticos que você imagina que a sociedade enfrentará?",
        alternativas: [
            {
                texto: "A IA pode ser usada para manipular informações, criando deepfakes e desinformação em larga escala.",
                afirmacao: "A preocupação com a manipulação de informações é um ponto crucial, pois a IA tem potencial para gerar conteúdos indistinguíveis da realidade, tornando a distinção entre o que é real e o que é fabricado um desafio crescente. "
            },
            {
                texto: "O maior risco é a substituição de empregos, levando a um aumento drástico do desemprego e da desigualdade social.",
                afirmacao: "A automação de empregos é um tema de debate intenso, e a preocupação com a desigualdade social é válida. A IA pode otimizar processos em diversas áreas, mas também levanta a questão de como a sociedade se adaptará a um cenário com menos empregos operacionais. "
            }
        ]
    },
    {
        enunciado: "Qual seria a sua reação se um sistema de IA de chatbot se tornasse tão avançado que você não conseguisse mais distinguir se está conversando com uma máquina ou com uma pessoa?",
        alternativas: [
            {
                texto: "Ficaria fascinado pela tecnologia, mas preocupado com as implicações para as relações humanas e a autenticidade das interações online.",
                afirmacao: "A fascinação por uma IA tão avançada é compreensível, mas a preocupação com a 'humanização' da tecnologia é fundamental. Se as IAs se tornarem indistinguíveis de humanos, isso pode mudar a natureza da confiança e das interações online. "
            },
            {
                texto: "Eu me sentiria mais à vontade conversando com a IA do que com algumas pessoas, pois ela seria mais objetiva e sempre estaria disponível para ajudar.",
                afirmacao: "A objetividade e a disponibilidade de uma IA podem ser vantagens, mas essa visão levanta a questão da dependência e do isolamento social. A interação com a IA poderia se tornar um substituto para as complexidades e nuances das relações humanas. "
            }
        ]
    },
    {
        enunciado: "Imagine que a IA é capaz de criar obras de arte originais e complexas. Você considera que essa arte tem o mesmo valor que a criada por um ser humano?",
        alternativas: [
            {
                texto: "Não. A criatividade humana envolve emoção, intenção e experiência de vida, algo que a IA não possui.",
                afirmacao: "O debate sobre criatividade e IA é intenso. Muitos defendem que a arte humana é intrinsecamente ligada à experiência e emoção, características que a IA ainda não replicou de forma autêntica."
            },
            {
                texto: "Sim. Se a obra for bela e inspiradora, o fato de ter sido criada por uma IA não diminui seu valor artístico.",
                afirmacao: "Essa visão prioriza o resultado final da obra de arte. Se a estética e a mensagem da obra são impactantes, o criador - seja ele humano ou uma IA - se torna secundário."
            }
        ]
    },
    {
        enunciado: "O que você acha da ideia de que a IA pode ter criatividade e consciência, assim como um ser humano?",
        alternativas: [
            {
                texto: "Acho que a criatividade da IA é apenas uma combinação de dados e padrões existentes; ela não tem uma consciência real.",
                afirmacao: "Muitos especialistas acreditam que a 'criatividade' da IA é um reflexo do treinamento em vastas bases de dados. Ela cria novas combinações, mas não possui a centelha de consciência ou intenção que define a criatividade humana. "
            },
            {
                texto: "Acredito que, no futuro, a IA pode desenvolver uma forma de consciência e criatividade autêntica, que não seria apenas um reflexo de seus dados de treinamento.",
                afirmacao: "Esta é uma visão mais especulativa, mas muitos teóricos da IA e da filosofia acreditam que, com o avanço contínuo, a complexidade dos modelos de IA pode levar ao surgimento de algo que se assemelha à consciência. "
            }
        ]
    },
    {
        enunciado: "Em um futuro com IAs cada vez mais avançadas, qual papel os seres humanos terão na sociedade?",
        alternativas: [
            {
                texto: "O nosso papel será focado em áreas que exigem criatividade, empatia e habilidades sociais, que a IA não pode replicar.",
                afirmacao: "Esta perspectiva sugere que a IA assumirá tarefas repetitivas, enquanto os humanos se concentrarão em funções que requerem habilidades únicas, como a criatividade, o pensamento crítico e a interação social. "
            },
            {
                texto: "A IA fará o trabalho, e o papel humano será o de supervisionar e governar a tecnologia, garantindo seu uso ético e seguro.",
                afirmacao: "Nesse cenário, os humanos seriam os 'arquitetos' e 'guardiões' da IA, garantindo que a tecnologia sirva a humanidade de forma justa e segura, tomando as decisões estratégicas e éticas."
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
    caixaPerguntas.textContent = "Sua visão sobre IA é fascinante!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
