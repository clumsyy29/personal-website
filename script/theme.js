document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const iconElement = darkModeToggle.querySelector("i");
    const body = document.body;

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.setAttribute("data-bs-theme", "dark");
        iconElement.classList.add("fa-sun");
        iconElement.classList.remove("fa-moon");

    }

    darkModeToggle.addEventListener("click", function () {
        if (body.getAttribute("data-bs-theme") === "dark") {
            body.removeAttribute("data-bs-theme");
            iconElement.classList.remove("fa-sun");
            iconElement.classList.add("fa-moon");
            localStorage.setItem("darkMode", "disabled");
        } else {
            body.setAttribute("data-bs-theme", "dark");
            iconElement.classList.remove("fa-moon");
            iconElement.classList.add("fa-sun");
            localStorage.setItem("darkMode", "enabled");
        }
    });
});
