// JavaScript para la historia interactiva estilo chat
const storyNodes = {
    start: {
        title: "Una llamada misteriosa",
        description: "Una voz desconocida al otro lado del teléfono te dice: 'Ven a la mansión de los Evernight al otro lado de la ciudad. Hay algo que te pertenece'. La llamada se corta antes de que puedas responder. ¿Qué decides hacer?",
        options: [
            { text: "Aceptar y prepararme para salir", nextNode: "prepareToGo" },
            { text: "Ignorar la llamada", nextNode: "ignoreCall" }
        ]
    },
    prepareToGo: {
        title: "Camino a la cita",
        description: "Te preparas rápidamente y sales de casa. Mientras caminas por la acera, decides cómo llegar a la mansión. El tiempo es justo y necesitas tomar una decisión.",
        options: [
            { text: "Ir andando", nextNode: "arriveOnFoot" },
            { text: "Tomar el metro", nextNode: "arriveLateByMetro" }
        ]
    },
    ignoreCall: {
        title: "La curiosidad te domina",
        description: "Aunque al principio decides ignorar la llamada, una extraña inquietud se apodera de ti. Finalmente, sales rumbo a la mansión. ¿Cómo decides llegar?",
        options: [
            { text: "Ir andando", nextNode: "arriveOnFoot" },
            { text: "Tomar el metro", nextNode: "arriveLateByMetro" }
        ]
    },
    arriveOnFoot: {
        title: "Llegas justo a tiempo",
        description: "Tras un largo trayecto andando, llegas a la mansión justo cuando el reloj marca las ocho. La puerta principal está entreabierta y un leve crujido te invita a entrar. Dentro, un hombre mayor con aspecto severo te recibe y te explica que eres el último heredero de los Evernight. Para reclamar tu herencia, debes pasar una noche en la mansión encantada.",
        options: [
            { text: "Aceptar el desafío", nextNode: "hauntedMansion" },
            { text: "Rechazar y marcharme", nextNode: "end" }
        ]
    },
    arriveLateByMetro: {
        title: "Llegas tarde",
        description: "El metro se retrasa y llegas cuando la mansión está completamente a oscuras. La puerta está cerrada, pero encuentras una nota clavada en la puerta: 'Si estás aquí por la herencia, entra por la puerta trasera y demuéstrame que tienes el valor necesario'. Decides continuar.",
        options: [
            { text: "Buscar otra entrada", nextNode: "hauntedMansion" },
            { text: "Rechazar y marcharme", nextNode: "end" }
        ]
    },
    hauntedMansion: {
        title: "La noche en la mansión",
        description: "Dentro de la mansión, las luces parpadean y escuchas susurros en las habitaciones vacías. Encuentras un diario que pertenece a un antiguo residente de la mansión, revelando secretos oscuros de la familia Evernight. Una sombra se mueve a lo lejos. ¿Tendrás el valor de continuar?",
        options: [
            { text: "Explorar más profundamente", nextNode: "secretRoom" },
            { text: "Esconderme en una habitación", nextNode: "end" }
        ]
    },
    secretRoom: {
        title: "La habitación secreta",
        description: "Siguiendo las pistas del diario, encuentras una habitación oculta detrás de una estantería. Dentro hay un cofre antiguo que contiene no solo la prueba de tu herencia, sino también un objeto misterioso que parece tener un poder sobrenatural. La noche será larga, pero ahora entiendes que esta herencia es más de lo que esperabas...",
        options: [
            { text: "Continuar", nextNode: "end" }
        ]
    },
    end: {
        title: "Fin de la historia",
        description: "Gracias por jugar. Cada elección cuenta. ¿Quieres intentarlo de nuevo para explorar otros caminos?",
        options: [
            { text: "Reiniciar", nextNode: "start" }
        ]
    }
};


let currentNode = "start";

function updateStory() {
    const chatContainer = document.getElementById("chat-container");

    const node = storyNodes[currentNode];

    // Agregar la descripción actual al historial
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = `<strong>${node.title}</strong><br>${node.description}`;
    chatContainer.appendChild(botMessage);

    // Agregar opciones como botones
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    node.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => {
            // Agregar la elección del usuario al historial
            const userMessage = document.createElement("div");
            userMessage.classList.add("message", "user-message");
            userMessage.textContent = option.text;
            chatContainer.appendChild(userMessage);

            currentNode = option.nextNode;
            updateStory();
        };
        optionsContainer.appendChild(button);
    });

    chatContainer.appendChild(optionsContainer);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo automáticamente
}

document.addEventListener("DOMContentLoaded", updateStory);
