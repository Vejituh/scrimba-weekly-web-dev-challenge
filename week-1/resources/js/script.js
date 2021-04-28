const openButton = document.querySelector(".open-menu");
const closeButton = document.querySelector(".close-menu");
const container = document.getElementById("container");
const nav = document.querySelector(".nav");

openButton.addEventListener("click", () => {
    nav.classList.contains("active-nav") === false ? nav.classList.add("active-nav") : null;
    container.classList.add("inactive-continer");

})

closeButton.addEventListener("click", () => {
    nav.classList.remove("active-nav");
    container.classList.remove("inactive-continer");
});