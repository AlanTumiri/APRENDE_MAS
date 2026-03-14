document.addEventListener("DOMContentLoaded", () => {
    cargarProgreso();
    inicializarTags();
    accesibilidadTeclado();
});

// 1. LEER EL PROGRESO DEL CUESTIONARIO
function cargarProgreso() {
    const progresoGuardado = localStorage.getItem('ingenieria_legal_progreso');
    
    // MEJORA: Lee el total de preguntas dinámicamente si existe, si no, usa 19 por defecto.
    // Esto es ideal para tu app de cuestionarios guiados.
    const totalPreguntas = parseInt(localStorage.getItem('ingenieria_legal_total')) || 19; 
    
    let porcentaje = 0;

    if (progresoGuardado) {
        let respondidas = parseInt(progresoGuardado);
        porcentaje = Math.round((respondidas / totalPreguntas) * 100);
        if (porcentaje > 100) porcentaje = 100;
    }

    document.getElementById('progreso-texto').innerText = `${porcentaje}% Completado`;
    
    setTimeout(() => {
        document.getElementById('barra-legal').style.width = `${porcentaje}%`;
    }, 300);

    if (porcentaje === 100) {
        document.getElementById('progreso-texto').innerText = "¡Materia Aprobada! 🎓";
        document.getElementById('progreso-texto').style.color = "#10b981"; 
    }
}

// 2. FUNCIONALIDAD DEL BUSCADOR
function filtrarMaterias() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let tarjetas = document.querySelectorAll('.semester-card');
    let hayResultados = false; // Variable para rastrear si encontramos algo

    tarjetas.forEach(tarjeta => {
        let contenido = tarjeta.getAttribute('data-materias').toLowerCase();
        let titulo = tarjeta.querySelector('h3').innerText.toLowerCase();

        if (contenido.includes(input) || titulo.includes(input)) {
            tarjeta.style.display = "flex";
            hayResultados = true;
        } else {
            tarjeta.style.display = "none";
        }
    });

    // MEJORA: Mostrar mensaje si no hay resultados
    let mensajeError = document.getElementById('mensaje-error');
    if (hayResultados) {
        mensajeError.style.display = "none";
    } else {
        mensajeError.style.display = "block";
    }
}

// 3. MEJORA: HACER QUE LOS TAGS FUNCIONEN COMO FILTROS
function inicializarTags() {
    let tags = document.querySelectorAll('.tag');
    let buscador = document.getElementById('buscador');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Pone el texto del tag en el buscador
            buscador.value = tag.innerText;
            // Ejecuta la función de filtrado
            filtrarMaterias();
            
            // Opcional: Pequeña animación visual en el buscador para indicar acción
            buscador.parentElement.style.transform = "scale(1.02)";
            setTimeout(() => {
                buscador.parentElement.style.transform = "scale(1)";
            }, 200);
        });
    });
}

// 4. MEJORA: ACCESIBILIDAD PARA TECLADO
// Permite que un usuario navegue con la tecla 'Tab' y use 'Enter' para abrir las tarjetas
function accesibilidadTeclado() {
    document.querySelectorAll('[tabindex="0"]').forEach(elemento => {
        elemento.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                elemento.click(); // Simula el clic si presiona Enter
            }
        });
    });
}