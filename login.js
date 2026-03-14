function cambiarTab(tabSeleccionada) {
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');
    const btnLogin = document.getElementById('btn-login');
    const btnRegistro = document.getElementById('btn-registro');

    if (tabSeleccionada === 'login') {
        formLogin.classList.remove('form-hidden');
        formLogin.classList.add('form-active');
        formRegistro.classList.remove('form-active');
        formRegistro.classList.add('form-hidden');
        
        btnLogin.classList.add('active');
        btnRegistro.classList.remove('active');
    } else {
        formRegistro.classList.remove('form-hidden');
        formRegistro.classList.add('form-active');
        formLogin.classList.remove('form-active');
        formLogin.classList.add('form-hidden');
        
        btnRegistro.classList.add('active');
        btnLogin.classList.remove('active');
    }
}

function iniciarSesion(event) {
    event.preventDefault(); 
    localStorage.setItem('usuario_rol', 'estudiante');
    window.location.href = 'inicio.html'; 
}

function registrar(event) {
    event.preventDefault();
    localStorage.setItem('usuario_rol', 'estudiante');
    alert("¡Cuenta creada exitosamente! Redirigiendo a tus materias...");
    window.location.href = 'inicio.html'; 
}

function entrarInvitado() {
    localStorage.setItem('usuario_rol', 'invitado');
    window.location.href = 'inicio.html';
}