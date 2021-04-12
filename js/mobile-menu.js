(() => {
  const headerRefs = {
    burger: document.querySelector("[data-burger-toggle]"),
    header: document.querySelector(".header"),
  };

  headerRefs.burger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    headerRefs.header.classList.toggle("isOpened");
  }
})();
