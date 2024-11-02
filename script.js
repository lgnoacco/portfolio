$(document).ready(function () {

    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true
    });
  

    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  }); 
  const toggleButton = document.getElementById("theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode ? "Modo Claro" : "Modo Escuro";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Modo Claro";
    }
});

toggleButton.addEventListener("click", toggleTheme);