document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".boton-saber-mas");
  const mensaje = document.querySelector(".texto-mantenimiento");

  boton.addEventListener("click", () => {
    if (mensaje.style.display === "none") {
      mensaje.style.display = "block";
    } else {
      mensaje.style.display = "none";
    }
  });
});
