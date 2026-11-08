
/* =========================================
   ATEEZ WORLD — GOLDEN HOUR PART.6
   CONTAGEM REGRESSIVA
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Lançamento: 13 de novembro de 2026 às 02h
    // Horário de Brasília: UTC-3

    const releaseDate = new Date(
        "2026-11-13T02:00:00-03:00"
    ).getTime();


    // ELEMENTOS HTML

    const daysElement = document.getElementById("days");

    const hoursElement = document.getElementById("hours");

    const minutesElement = document.getElementById("minutes");

    const secondsElement = document.getElementById("seconds");

    const statusElement = document.getElementById("countdownStatus");

    const countdownTimer = document.getElementById("countdownTimer");


    // VERIFICAR SE OS ELEMENTOS EXISTEM

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement ||
        !statusElement ||
        !countdownTimer
    ) {

        console.error(
            "Erro: elementos da contagem regressiva não encontrados."
        );

        return;

    }


    // FORMATAR NÚMEROS COM DOIS DÍGITOS

    function formatNumber(number) {

        return String(number).padStart(2, "0");

    }


    // ATUALIZAR CONTAGEM

    function updateCountdown() {

        const now = Date.now();

        const difference = releaseDate - now;


        // QUANDO O LANÇAMENTO CHEGAR

        if (difference <= 0) {

            daysElement.textContent = "00";

            hoursElement.textContent = "00";

            minutesElement.textContent = "00";

            secondsElement.textContent = "00";

            statusElement.textContent =
                "GOLDEN HOUR : PART.6 JÁ ESTÁ DISPONÍVEL!";

            countdownTimer.classList.add("released");

            clearInterval(countdownInterval);

            return;

        }


        // CALCULAR TEMPO RESTANTE

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


        // MOSTRAR NA PÁGINA

        daysElement.textContent = formatNumber(days);

        hoursElement.textContent = formatNumber(hours);

        minutesElement.textContent = formatNumber(minutes);

        secondsElement.textContent = formatNumber(seconds);


        statusElement.textContent =
            "ATINY, estamos quase lá!";

    }


    // EXECUTAR IMEDIATAMENTE

    updateCountdown();


    // ATUALIZAR A CADA SEGUNDO

    const countdownInterval = setInterval(function () {

        updateCountdown();

    }, 1000);


    console.log(
        "GOLDEN HOUR : PART.6 — Contagem regressiva iniciada! 🏴‍☠️"
    );

});
