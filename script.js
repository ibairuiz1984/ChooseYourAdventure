const storyNodes = {
    intro: {
        title: "Introduce tu nombre",
        description: "Antes de empezar, por favor introduce tu nombre:",
        options: []
    },
    start: {
        title: "Una llamada misteriosa",
        description: () => `${playerName}, un tranquilo día en tu hogar se interrumpe por el sonido del teléfono. Una voz desconocida te cita al otro lado de la ciudad.
        'Es urgente, no confíes en nadie, ven a esta dirección lo antes posible', dice antes de colgar. ¿Qué decides hacer?`,
        options: [
            { text: "Aceptar y prepararme para salir", nextNode: "prepareToGo" },
            { text: "Ignorar la llamada", nextNode: "ignoreCall" }
        ]
    },
    prepareToGo: {
        title: "Camino a la cita",
        description: "Te pones tu abrigo y sales al frío de la tarde. La ciudad parece más oscura de lo habitual. La niebla envuelve las calles, dando un aire de misterio y temor. ¿Cómo decides llegar al lugar?",
        options: [
            { text: "Ir andando", nextNode: "arriveOnFoot" },
            { text: "Tomar el metro", nextNode: "arriveLateByMetro" }
        ]
    },
    ignoreCall: {
        title: "Decisión ignorada",
        description: () => `A pesar de tu intento de ignorar la llamada, una extraña sensación de inquietud comienza a invadirte.
        Finalmente, la curiosidad puede más y decides acudir. El camino hacia la mansión se siente interminable y lleno de sombras.
        ¿Cómo decides llegar al lugar?`,
        options: [
            { text: "Ir andando", nextNode: "arriveOnFoot" },
            { text: "Tomar el metro", nextNode: "arriveLateByMetro" }
        ]
    },
    arriveOnFoot: {
        title: "Llegas a la cita a tiempo",
        description: () => `${playerName} camina rápidamente por las calles vacías. El viento aúlla y las hojas crujen bajo tus pies.
        A lo lejos, aparece una imponente mansión victoriana con luces titilantes en sus ventanas. La puerta está entreabierta y un sobre con tu nombre te espera en el umbral.
        Al abrirlo, descubres que un familiar lejano te ha dejado una herencia. Sin embargo, para reclamarla, debes pasar la noche en la mansión encantada.`,
        options: [
            { text: "Aceptar el desafío", nextNode: "exploreMansion" },
            { text: "Rechazar y marcharme", nextNode: "end" }
        ]
    },
    arriveLateByMetro: {
        title: "Llegas tarde a la cita",
        description: () => `El metro se retrasa, y ${playerName} llega al lugar cuando las luces de la mansión ya están apagadas.
        Una nota en la puerta explica que un familiar lejano ha dejado una herencia, pero el testamento solo será leído si pasas la noche en la mansión.
        Un ligero crujido sugiere que alguien te observa desde las sombras.`,
        options: [
            { text: "Buscar otra entrada", nextNode: "exploreMansion" },
            { text: "Rechazar y marcharme", nextNode: "end" }
        ]
    },
    exploreMansion: {
        title: "Explorando la mansión",
        description: () => `La mansión emite un aire inquietante. Los pisos crujen bajo los pasos de ${playerName} mientras explora.
        Ecos de voces susurrantes parecen venir de las paredes. En una sala, encuentras un diario con extrañas anotaciones que hablan de secretos familiares oscuros.`,
        options: [
            { text: "Leer el diario", nextNode: "readDiary" },
            { text: "Seguir explorando", nextNode: "keepExploring" }
        ]
    },
    readDiary: {
        title: "El diario perdido",
        description: "El diario habla de secretos familiares oscuros y una maldición que recae sobre la herencia. Un escalofrío recorre tu espalda al leer sobre trágicos eventos que ocurrieron hace muchos años.",
        options: [
            { text: "Investigar más", nextNode: "hiddenRoom" },
            { text: "Salir corriendo de la mansión", nextNode: "end" }
        ]
    },
    keepExploring: {
        title: "Un descubrimiento inquietante",
        description: "Mientras exploras, encuentras una habitación secreta con símbolos extraños en las paredes. Algo o alguien quiere que descubras la verdad, la oscuridad parece volverse más densa.",
        options: [
            { text: "Entrar a la habitación secreta", nextNode: "hiddenRoom" },
            { text: "Ignorarla y seguir explorando", nextNode: "hauntedEvent" }
        ]
    },
    hiddenRoom: {
        title: "La habitación secreta",
        description: () => `${playerName} entra en la habitación y siente una fuerza desconocida. Una voz le susurra al oído: 'La verdad está cerca'.
        En el centro de la habitación, encuentras un cofre antiguo lleno de documentos y objetos de gran valor.`,
        options: [
            { text: "Continuar", nextNode: "hauntedEvent" }
        ]
    },
    hauntedEvent: {
        title: "La verdad se revela",
        description: "Las luces parpadean y la temperatura baja drásticamente. Un espíritu aparece y te revela la maldición que envuelve la herencia. A medida que el espíritu narra su historia, comprendes que eres el último descendiente que puede romper la maldición.",
        options: [
            { text: "Enfrentar al espíritu", nextNode: "spiritFight" },
            { text: "Intentar escapar", nextNode: "spiritEscape" }
        ]
    },
    spiritFight: {
        title: "El enfrentamiento",
        description: "Decides enfrentarte al espíritu. Con valentía, buscas dentro del cofre algún objeto que pueda ayudarte. Encuentras una reliquia antigua que brilla con una luz cálida.",
        options: [
            { text: "Usar la reliquia", nextNode: "useRelic" },
            { text: "Tratar de hablar con el espíritu", nextNode: "talkToSpirit" }
        ]
    },
    spiritEscape: {
        title: "La huida",
        description: "El terror se apodera de ti y decides escapar de la mansión. Corres por los oscuros pasillos mientras el espíritu te persigue. Al salir de la mansión, te das cuenta de que la maldición aún te sigue.",
        options: [
            { text: "Regresar y enfrentar al espíritu", nextNode: "spiritFight" },
            { text: "Huir a un lugar seguro", nextNode: "end" }
        ]
    },
    useRelic: {
        title: "La reliquia mágica",
        description: () => `${playerName} usa la reliquia. Una luz intensa envuelve la habitación y el espíritu se desvanece, liberando la mansión de la maldición.
        Has roto la maldición y reclamado la herencia.`,
        options: [
            { text: "Explorar más la mansión", nextNode: "exploreMore" },
            { text: "Salir de la mansión", nextNode: "end" }
        ]
    },
    talkToSpirit: {
        title: "Diálogo con el espíritu",
        description: "Intentas hablar con el espíritu. Descubres que está atrapado por una injusticia pasada. Al escuchar su historia, prometes ayudarle a encontrar la paz.",
        options: [
            { text: "Ayudar al espíritu", nextNode: "helpSpirit" },
            { text: "Engañar al espíritu y escapar", nextNode: "spiritEscape" }
        ]
    },
    helpSpirit: {
        title: "Ayuda espiritual",
        description: () => `${playerName} encuentra documentos que prueban la inocencia del espíritu. Al llevarlos a la luz, el espíritu se libera y la mansión queda en paz.`,
        options: [
            { text: "Explorar más la mansión", nextNode: "exploreMore" },
            { text: "Salir de la mansión", nextNode: "end" }
        ]
    },
    exploreMore: {
        title: "Exploración adicional",
        description: "Mientras exploras más la mansión, encuentras secretos ocultos y tesoros olvidados. Cada habitación revela historias del pasado, llenas de misterio y maravilla.",
        options: [
            { text: "Salir de la mansión", nextNode: "end" }
        ]
    },
    end: {
        title: "Fin de la historia",
        description: () => `Gracias por jugar, ${playerName}. La mansión guarda secretos que pueden ser descubiertos en otra visita. ¿Quieres intentarlo de nuevo?`,
        options: [
            { text: "Reiniciar", nextNode: "start" }
        ]
    }
};


let currentNode = "intro";
let chatHistory = [];

function updateStory() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML = ""; // Limpiar opciones previas

    chatHistory.forEach(({ title, description, isUser }) => {
        const message = document.createElement("div");
        message.classList.add("message", isUser ? "user-message" : "bot-message");
        message.innerHTML = description; // Cambia esta línea para no incluir el título de nuevo
        chatContainer.appendChild(message);
    });

    const node = storyNodes[currentNode];
    const botMessage = displayMessage(node.title, typeof node.description === 'function' ? node.description() : node.description);
    chatHistory.push({ title: node.title, description: botMessage.innerHTML, isUser: false });

    const optionsContainer = createOptionsContainer();

    if (currentNode === "intro") {
        createIntroOptions(optionsContainer);
    } else {
        createStoryOptions(node.options, optionsContainer);
    }

    chatContainer.appendChild(optionsContainer);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo automáticamente
}

function displayMessage(title, description) {
    const chatContainer = document.getElementById("chat-container");
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = `<strong>${title}</strong><br>${description}`;
    chatContainer.appendChild(botMessage);
    return botMessage;
}


function createOptionsContainer() {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");
    return optionsContainer;
}

function createIntroOptions(optionsContainer) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Escribe tu nombre";
    inputField.classList.add("name-input");

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            acceptName(inputField);
        }
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Comenzar";
    submitButton.addEventListener('click', () => acceptName(inputField));

    optionsContainer.appendChild(inputField);
    optionsContainer.appendChild(submitButton);
}

function acceptName(inputField) {
    playerName = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1).toLowerCase() || "Jugador";
    chatHistory.push({ title: "Nombre introducido", description: playerName, isUser: true });
    currentNode = "start";
    updateStory();
}

function createStoryOptions(options, optionsContainer) {
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.addEventListener('click', () => {
            displayUserMessage(option.text);
            chatHistory.push({ title: `${playerName} elige:`, description: option.text, isUser: true });
            currentNode = option.nextNode;
            updateStory();
        });
        optionsContainer.appendChild(button);
    });
}

function displayUserMessage(message) {
    const chatContainer = document.getElementById("chat-container");
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = message;
    chatContainer.appendChild(userMessage);
}

document.addEventListener("DOMContentLoaded", updateStory);
