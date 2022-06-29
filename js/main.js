let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("bordered");
    });
    tab.classList.toggle("bordered");
  });
});
