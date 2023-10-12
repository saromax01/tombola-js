const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const creaTabellone = () => {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.textContent = i;
    cella.classList.add("cella");
    tabellone.appendChild(cella);
  }
};

const estraiNumero = () => {
  let numeroEstratto = getRandomNumber(1, 76);
  evidenziaCella(numeroEstratto);
};

const evidenziaCella = (numero) => {
  const cellaCorrispondente = document.querySelector(".cella:nth-child(" + numero + ")");
  cellaCorrispondente.classList.add("selected");
};

creaTabellone();

const estraiNumeroButton = document.getElementById("estraiNumero");
estraiNumeroButton.addEventListener("click", estraiNumero);
