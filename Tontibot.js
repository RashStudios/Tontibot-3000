class TontiBot {
    responder(pregunta) {
        const respuestas = [
            "No sé, pero ¿has considerado aprender a hablar pato?",
            "Claramente la respuesta es 42.",
            "Lo he calculado y la respuesta es... ¿qué estábamos hablando?",
            "Mmm... lo siento, estoy en modo ahorro de batería mental.",
            "Yo solo trabajo de 3 a 3:05 am, vuelve luego."
        ];
        return respuestas[Math.floor(Math.random() * respuestas.length)];
    }
}

const tontiBot = new TontiBot();
console.log(tontiBot.responder("¿Cuál es el sentido de la vida?"));
