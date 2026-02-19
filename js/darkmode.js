const darkModeToggle = document.getElementById("toggleDarkMode");
const darkModeKey = "pd-darkmode";

function applyDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  if (darkModeToggle) {
    darkModeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    darkModeToggle.innerHTML = isDark ? '<i class="bi bi-brightness-alt-high-fill"></i>' : '<i class="bi bi-moon-stars"></i>';
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
