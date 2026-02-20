const darkModeToggle = document.getElementById("toggleDarkMode");
const darkModeKey = "pd-darkmode";

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  if (darkModeToggle) {
    darkModeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    darkModeToggle.innerHTML = isDark ? '<i class="bi bi-brightness-alt-high-fill"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
  
  // Trocar o logo baseado no modo escuro
  const logo = document.getElementById("logo");
  if (logo) {
    if (isDark) {
      logo.src = logo.src.replace("light", "dark");
    } else {
      logo.src = logo.src.replace("dark", "light");
    }
  }
}

if (darkModeToggle) {
  const storedMode = localStorage.getItem(darkModeKey);
  applyDarkMode(storedMode === "true");

  darkModeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyDarkMode(isDark);
    localStorage.setItem(darkModeKey, String(isDark));
  });
}
