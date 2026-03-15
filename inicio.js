// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionamos los elementos necesarios del DOM
    const modal = document.getElementById('modal-comentario');
    const btnAbrir = document.getElementById('btn-abrir-modal');
    const btnCerrar = document.getElementById('btn-cerrar-modal');
    const formComentario = document.getElementById('form-comentario');

    // =========================================
    // Funciones para manejar el Modal
    // =========================================

    // Función para abrir el Popup
    const abrirModal = () => {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; 
    };

    // Función para cerrar el Popup
    const cerrarModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = ''; 
    };

    // =========================================
    // Event Listeners (Escuchadores de Clics)
    // =========================================

    // Clic en el botón flotante -> Abre modal
    btnAbrir.addEventListener('click', abrirModal);

    // Clic en la (X) del modal -> Cierra modal
    btnCerrar.addEventListener('click', cerrarModal);

    // Clic fuera de la tarjeta de cristal -> Cierra modal
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar modal presionando la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            cerrarModal();
        }
    });

    // =========================================
    // Manejo del Formulario (ENVÍO REAL A FORMSPREE)
    // =========================================

    formComentario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitamos que la página se recargue

        // TU ENLACE ÚNICO DE FORMSPREE
        const formspreeURL = "https://formspree.io/f/mpqyjpro"; 
        
        // Recogemos todos los datos que escribió el estudiante
        const data = new FormData(formComentario);
        
        // Rescatamos el nombre por si quieres usar el código de simulación guardado abajo
        const nombre = document.getElementById('nombre').value;

        // Cambiamos el texto del botón mientras envía
        const btnSubmit = formComentario.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerText;
        btnSubmit.innerText = "Enviando...";
        btnSubmit.disabled = true;

        // Enviamos los datos en segundo plano a Formspree
        fetch(formspreeURL, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if(response.ok) {
                // Si todo salió bien
                alert("¡Gracias! Tu mensaje ha sido enviado exitosamente.");
                formComentario.reset(); // Limpiamos las casillas
                cerrarModal(); // Cerramos el diseño de cristal
            } else {
                // Si hubo un error de conexión
                alert("Hubo un problema al enviar tu mensaje. Intenta de nuevo.");
            }
        })
        .catch(error => {
            alert("Error de red. Verifica tu conexión a internet.");
        })
        .finally(() => {
            // Restauramos el botón a la normalidad
            btnSubmit.innerText = textoOriginal;
            btnSubmit.disabled = false;
        });

        // ==========================================================
        // TEXTOS EXPLICATIVOS Y CÓDIGO DE SIMULACIÓN GUARDADO 
        // ==========================================================
        // Como estamos en GitHub Pages (servidor estático), no hay backend.
        // Tienes dos caminos ahora que tienes el Popup bonito:
        // CAMINO A (Simulado) / CAMINO B (Real y Profesional con Formspree - Gratis).
        // Actualmente estás usando el CAMINO B allá arriba. 
        // El CAMINO A lo dejé aquí abajo desactivado (comentado) para que no haya errores:

        /*
        // --- Simulación (Camino A) ---
        // 1. Avisamos al usuario con estilo 
        alert(`¡Gracias por tu comentario, ${nombre || 'amigo'}! \n\nSe ha simulado el envío a alanrogertumirichambia@gmail.com. \n\nCuando conectes Formspree u otro backend, este mensaje te llegará de verdad.`);
        
        // 2. Limpiamos las casillas del formulario
        formComentario.reset();
        
        // 3. Cerramos el modal automáticamente
        cerrarModal();
        */
    });
});
