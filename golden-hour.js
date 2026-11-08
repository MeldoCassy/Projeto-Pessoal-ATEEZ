
/* ======================================
   ATEEZ WORLD
   GOLDEN HOUR : PART.6
   COUNTDOWN
====================================== */

// Data e horário do lançamento:
// 13 de novembro de 2026
// 02:00 da manhã — horário de Brasília

const releaseDate = new Date("2026-11-13T02:00:00-03:00");

// Elementos HTML

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const statusElement = document.querySelector("#countdownStatus");
const countdownTimer = document.querySelector("#countdownTimer");

// Atualização da contagem regressiva

function updateCountdown() {

    const now = new Date();

    const difference = releaseDate.getTime() - now.getTime();

    // Quando o lançamento chegar

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        statusElement.textContent =
            "GOLDEN HOUR : PART.6 JÁ ESTÁ DISPONÍVEL!";

        countdownTimer.classList.add("released");

        return;
    }

    // Cálculo do tempo restante

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    // Exibição dos números

    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");

    statusElement.textContent =
        "A contagem continua... ATINY, estamos quase lá!";

}

// Executa imediatamente

updateCountdown();

// Atualiza a cada segundo

const countdownInterval = setInterval(() => {

    updateCountdown();

    // Para o intervalo quando o álbum for lançado

    if (new Date().getTime() >= releaseDate.getTime()) {

        clearInterval(countdownInterval);

    }

}, 1000);