const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Thanks for visiting my website!";
});
