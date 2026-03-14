// Función para el botón flotante de comentarios
function abrirComentario() {
    // Esto abre un cuadro de texto nativo del navegador
    let comentario = prompt("Nos encantaría saber tu opinión. Escribe tu comentario aquí:");
    
    // Verificamos si el usuario escribió algo y no le dio a cancelar
    if (comentario !== null && comentario.trim() !== "") {
        // En una plataforma real, aquí enviarías el dato a tu base de datos (Backend)
        alert("¡Gracias por tu comentario! Nos ayuda a mejorar la plataforma.");
    }
}