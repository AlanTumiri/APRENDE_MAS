document.addEventListener("DOMContentLoaded", () => {
    cargarProgresoMateria();
});

function cargarProgresoMateria() {
    // Buscamos el progreso guardado
    const progresoGuardado = localStorage.getItem('ingenieria_legal_progreso');
    const totalPreguntas = 19; // El total de tus preguntas en el JSON
    
    if (progresoGuardado) {
        let respondidas = parseInt(progresoGuardado);
        
        // Calculamos el porcentaje
        let porcentaje = Math.round((respondidas / totalPreguntas) * 100);
        
        // Tope máximo al 100%
        if (porcentaje > 100) {
            porcentaje = 100;
        }
        
        // Animamos la barra verde de la tarjeta
        setTimeout(() => {
            const barra = document.getElementById('barra-progreso-materia');
            if (barra) {
                barra.style.width = `${porcentaje}%`;
            }
        }, 300);
    }
}