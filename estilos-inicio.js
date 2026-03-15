document.addEventListener("DOMContentLoaded", () => {
    verificarRol();
    cargarProgreso();
    inicializarTags();
    accesibilidadTeclado();
});

// =========================================
// 1. CONTROL DE ACCESO (INTERFAZ Y BLOQUEO)
// =========================================
function verificarRol() {
    const rol = localStorage.getItem('usuario_rol');
    
    // Buscamos todos los enlaces del menú
    const enlaces = document.querySelectorAll('.nav-item'); 
    
    // "Mi Perfil" es el segundo enlace (posición 1, porque empezamos a contar desde 0)
    const enlacePerfil = enlaces[1]; 

    if (rol === 'invitado') {
        // Si es INVITADO, ocultamos SOLO "Mi Perfil"
        if (enlacePerfil) {
            enlacePerfil.style.display = 'none';
        }
    } else {
        // Si entra con su CUENTA, lo volvemos a mostrar
        if (enlacePerfil) {
            enlacePerfil.style.display = 'inline'; 
        }
    }
}



    // Seleccionamos TODA la barra de navegación de un solo golpe
    const barraNavegacion = document.querySelector('.glass-navbar'); 
    
    // Seleccionamos las tarjetas que queremos bloquear a los invitados
    const tarjetaContinuar = document.querySelector('.active-course');
    const tarjetaSeptimo = document.querySelector('.highlight');

    if (rol === 'invitado') {
        
        // --- A. DESAPARECER LA IMAGEN (BARRA COMPLETA) ---
        if (barraNavegacion) {
            barraNavegacion.style.display = 'none'; // ¡Magia! Se oculta todo.
        }

        // --- B. BLOQUEAR EL ACCESO A LOS SEMESTRES (Esto ya te funcionó) ---
        if (tarjetaContinuar) {
            tarjetaContinuar.onclick = function(event) {
                event.preventDefault(); 
                event.stopPropagation(); 
                alert("👀 Estás en Modo Invitado.\n\nPuedes explorar el plan de estudios, pero para entrar a las lecciones debes registrarte.");
            };
        }

        if (tarjetaSeptimo) {
            tarjetaSeptimo.onclick = function(event) {
                event.preventDefault();
                event.stopPropagation();
                alert("👀 Estás en Modo Invitado.\n\nPuedes explorar el plan de estudios, pero para entrar a las lecciones debes registrarte.");
            };
        }

    } else {
        // --- C. MODO ESTUDIANTE ---
        // Si es un estudiante con cuenta, mostramos la barra de navegación
        if (barraNavegacion) {
            barraNavegacion.style.display = 'flex'; // Vuelve a aparecer
        }
    }

// =========================================
// EL RESTO DE TUS FUNCIONES INTACTAS
// =========================================

// 2. LEER EL PROGRESO DEL CUESTIONARIO
function cargarProgreso() {
    const progresoGuardado = localStorage.getItem('ingenieria_legal_progreso');
    const totalPreguntas = parseInt(localStorage.getItem('ingenieria_legal_total')) || 19; 
    let porcentaje = 0;

    if (progresoGuardado) {
        let respondidas = parseInt(progresoGuardado);
        porcentaje = Math.round((respondidas / totalPreguntas) * 100);
        if (porcentaje > 100) porcentaje = 100;
    }

    const textoProgreso = document.getElementById('progreso-texto');
    const barraLegal = document.getElementById('barra-legal');

    if(textoProgreso) textoProgreso.innerText = `${porcentaje}% Completado`;
    
    if(barraLegal) {
        setTimeout(() => {
            barraLegal.style.width = `${porcentaje}%`;
        }, 300);
    }

    if (porcentaje === 100 && textoProgreso) {
        textoProgreso.innerText = "¡Materia Aprobada! 🎓";
        textoProgreso.style.color = "#10b981"; 
    }
}

// 3. FUNCIONALIDAD DEL BUSCADOR
function filtrarMaterias() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let tarjetas = document.querySelectorAll('.semester-card');
    let hayResultados = false; 

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

    let mensajeError = document.getElementById('mensaje-error');
    if(mensajeError) {
        if (hayResultados) {
            mensajeError.style.display = "none";
        } else {
            mensajeError.style.display = "block";
        }
    }
}

// 4. FUNCIONALIDAD DE LAS ETIQUETAS (TAGS)
function inicializarTags() {
    let tags = document.querySelectorAll('.tag');
    let buscador = document.getElementById('buscador');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            if(buscador) {
                buscador.value = tag.innerText;
                filtrarMaterias();
                
                buscador.parentElement.style.transform = "scale(1.02)";
                setTimeout(() => {
                    buscador.parentElement.style.transform = "scale(1)";
                }, 200);
            }
        });
    });
}

// 5. ACCESIBILIDAD PARA TECLADO
function accesibilidadTeclado() {
    document.querySelectorAll('[tabindex="0"]').forEach(elemento => {
        elemento.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                elemento.click(); 
            }
        });
    });
}

// 6. CERRAR SESIÓN
function cerrarSesion() {
    const rol = localStorage.getItem('usuario_rol');
    
    // Si era invitado, no preguntamos, solo lo devolvemos
    if (rol === 'invitado') {
        localStorage.removeItem('usuario_rol');
        window.location.href = 'index.html'; 
        return;
    }

    let confirmar = confirm("¿Estás seguro de que quieres salir?");
    if (confirmar) {
        localStorage.removeItem('usuario_rol');
        window.location.href = 'index.html'; 
    }
}
