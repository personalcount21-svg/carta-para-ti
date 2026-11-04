
const envelope = document.getElementById("envelope");
const waxSeal = document.getElementById("waxSeal");

const letterModal = document.getElementById("letterModal");
const instruction = document.getElementById("instruction");
const tapHint = document.getElementById("tapHint");

let isOpened = false;

waxSeal.addEventListener("click", () => {

  if (isOpened) return;

  isOpened = true;

  // Cambiamos el mensaje inicial
  instruction.textContent =
    "Esta carta tiene algo especial para ti...";

  tapHint.textContent = "Con cariño, para ti ❤️";

  // Abrimos el sobre
  envelope.classList.add("open");

  // Mostramos la carta
  setTimeout(() => {
    letterModal.classList.remove("hidden");
  }, 1800);

});
const closeButton = document.getElementById("closeLetter");

closeButton.addEventListener("click", () => {

  letterModal.classList.add("hidden");

  envelope.classList.remove("open");

  instruction.textContent =
    "Hay algo que llevo queriendo decirte...";

  tapHint.textContent =
    "Toca la inicial para abrir 💌";

  isOpened = false;

});