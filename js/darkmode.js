const darkModeKey = "pd-darkmode";

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  const darkModeToggle = document.getElementById("toggleDarkMode");
  const darkModeMenuToggle = document.getElementById("toggleDarkModeMenu");
  
  if (darkModeToggle) {
    darkModeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    darkModeToggle.innerHTML = isDark ? '<i class="bi bi-brightness-alt-high-fill"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
  
  if (darkModeMenuToggle) {
    darkModeMenuToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    darkModeMenuToggle.innerHTML = isDark ? '<i class="bi bi-brightness-alt-high-fill"></i> Modo claro' : '<i class="bi bi-moon-stars"></i> Modo escuro';
  }
  
  // Trocar o logo baseado no modo escuro
  const logos = document.querySelectorAll(".logo");
  if (logos) {
    logos.forEach((logo) => {
      if (isDark) {
        logo.src = logo.src.replace("light", "dark");
      } else {
        logo.src = logo.src.replace("dark", "light");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("toggleDarkMode");
  const darkModeMenuToggle = document.getElementById("toggleDarkModeMenu");
  
  const setupDarkModeToggle = (toggleElement) => {
    if (toggleElement) {
      toggleElement.addEventListener("click", () => {
        const isDark = !document.body.classList.contains("dark-mode");
        applyDarkMode(isDark);
        localStorage.setItem(darkModeKey, String(isDark));
      });
    }
  };
  
  if (darkModeToggle) {
    const storedMode = localStorage.getItem(darkModeKey);
    applyDarkMode(storedMode === "true");
    setupDarkModeToggle(darkModeToggle);
  }
  
  setupDarkModeToggle(darkModeMenuToggle);
});
