const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Thanks for reaching out to Toby Web Studio. I will reply as soon as I can.";
});

const revealElements = document.querySelectorAll(
  ".section-content, .service-card, .project-card, .offer-list, .contact-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}
