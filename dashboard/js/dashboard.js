

var links = document.querySelectorAll("a.nav-link");

document.querySelector("#showMenu").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("d-none");
});

function updateActiveLink() {
  var link = document.querySelector("a[href='" + window.location.hash + "']");
  links.forEach((l) => l.classList.remove("active"));
  link.classList.add("active");

  if (document.body.clientWidth < 768) {
    document.querySelector("header").classList.add("d-none");
  }
}

window.addEventListener("hashchange", updateActiveLink);
updateActiveLink();


document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("userRole");
    
    setTimeout(() => {
        window.location.href = "/";
    }, 800);
});