const darkModeToggle = document.getElementById("darkModeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

// Función para establecer el estado inicial
function initializeDarkMode() {
  if (document.body.classList.contains("dark-mode")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
}

// Ejecutar la función al cargar la página
initializeDarkMode();

// Escuchar el evento click para alternar el tema
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  initializeDarkMode(); // Actualizar el estado después de alternar
});

