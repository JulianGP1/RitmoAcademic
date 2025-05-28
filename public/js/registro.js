import Swal from 'sweetalert2';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;
    const sexo = document.getElementById("sexo").value;
    const fecha = document.getElementById("fecha").value;

    const usuario = {
      nombre,
      contrasena,
      sexo,
      fecha,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    Swal.fire({
      title: "¡Registro exitoso!",
      text: "Tu cuenta ha sido creada.",
      icon: "success",
      confirmButtonText: "Aceptar"
    }).then(() => {
      window.location.href = "/admin";
    });

    document.getElementById("registroForm").reset();
  });
});
