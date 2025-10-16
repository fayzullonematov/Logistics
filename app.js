document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const learnBtn = document.getElementById("learnBtn");
  const closeBtn = modal.querySelector(".close");

  learnBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").slice(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });
});
