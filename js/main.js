(() => {
const button = document.querySelector("#button"),
        burgerCon = document.querySelector("#burgerCon");
        navLinks = burgerCon.querySelectorAll("a");


  function showNavigation() {

    button.classList.toggle("expanded");

    burgerCon.classList.toggle("slideToggle");
  }


  button.addEventListener("click", showNavigation);

  for (link of navLinks) {
    link.addEventListener("click", showNavigation);
  }
})();
