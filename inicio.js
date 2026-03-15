// Función para el botón flotante de comentarios
function abrirComentario() {
    let comentario = prompt("Nos encantaría saber tu opinión. Escribe tu comentario aquí:");
    
    if (comentario !== null && comentario.trim() !== "") {
        // 1. Configuramos los datos de tu correo
        let tuCorreo = "alanrogertumirichambia@gmail.com";
        let asunto = encodeURIComponent("Nuevo comentario en la Plataforma de Sistemas");
        let mensaje = encodeURIComponent(comentario);
        
        // 2. Creamos el enlace especial de correo
        let enlaceCorreo = `mailto:${tuCorreo}?subject=${asunto}&body=${mensaje}`;
        
        // 3. Le avisamos al usuario y abrimos su app de correo
        alert("¡Genial! Se abrirá tu aplicación de correo para enviar el mensaje a Alan.");
        window.location.href = enlaceCorreo;
    }
}
