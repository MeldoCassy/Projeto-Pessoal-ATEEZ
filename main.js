/* =========================================
   ATEEZ WORLD — JAVASCRIPT PRINCIPAL
========================================= */


/* INTEGRANTES */

const members = [
    {
        number: "01",
        name: "Hongjoong",
        role: "Líder • Rapper • Produtor",
        description: "Capitão do ATEEZ e participante da criação musical.",
        birthday: "07/11/1998",
        image: "assets/HongJoong.jpg"
    },
    {
        number: "02",
        name: "Seonghwa",
        role: "Vocalista • Performer",
        description: "Conhecido pela presença de palco e versatilidade.",
        birthday: "03/04/1998",
        image: "assets/Seonghwa.jpg"
    },
    {
        number: "03",
        name: "Yunho",
        role: "Performer • Vocalista",
        description: "Destaque em dança, performance e energia no palco.",
        birthday: "23/03/1999",
        image: "assets/Yunho.jpg"
    },
    {
        number: "04",
        name: "Yeosang",
        role: "Vocalista • Performer",
        description: "Conhecido por sua presença marcante.",
        birthday: "15/06/1999",
        image: "assets/Yeosang.jpg"
    },
    {
        number: "05",
        name: "San",
        role: "Vocalista • Performer",
        description: "Reconhecido pela intensidade de suas performances.",
        birthday: "10/07/1999",
        image: "assets/San.jpg"
    },
    {
        number: "06",
        name: "Mingi",
        role: "Rapper • Performer",
        description: "Conhecido pela voz grave e estilo marcante.",
        birthday: "09/08/1999",
        image: "assets/MINGI.jpg"
    },
    {
        number: "07",
        name: "Wooyoung",
        role: "Performer • Vocalista",
        description: "Destaque por sua expressividade e carisma.",
        birthday: "26/11/1999",
        image: "assets/Wooyoung.jpg"
    },
    {
        number: "08",
        name: "Jongho",
        role: "Vocalista",
        description: "Conhecido por sua potência vocal.",
        birthday: "12/10/2000",
        image: "assets/Johngo.jpg"
    }
];

const memberGrid = document.querySelector("#memberGrid");

if (memberGrid) {
    memberGrid.innerHTML = members.map(member => `
        <article class="member-card">

            <img
                class="member-image"
                src="${member.image}"
                alt="Foto de ${member.name}"
                loading="lazy"
            >

            <div class="member-info">

                <span class="member-number">${member.number}</span>

                <h3>${member.name}</h3>

                <p>${member.description}</p>

                <div class="member-birthday">
                    <span aria-hidden="true">🎂</span>
                    <time>${member.birthday}</time>
                </div>

                <br>

                <span class="member-role">${member.role}</span>

            </div>
        </article>
    `).join("");
}


/* ANITEEZ */

const aniteez = [
    {
        name: "JJOONGrami",
        member: "Hongjoong",
        image: "aniteez/jjoongrami.jpg",
        description: "O mascote associado ao nosso capitão.",
        emoji: "🐿️"
    },
    {
        name: "DDEONGbyeoli",
        member: "Seonghwa",
        image: "aniteez/ddeongbyeoli.jpg",
        description: "O amiguinho associado ao Seonghwa.",
        emoji: "🐰"
    },
    {
        name: "TYUdeongi",
        member: "Yunho",
        image: "aniteez/tyudeongi.jpg",
        description: "O mascote associado ao Yunho.",
        emoji: "🐶"
    },
    {
        name: "HETmongi",
        member: "Yeosang",
        image: "aniteez/hetmongi.jpg",
        description: "O mascote associado ao Yeosang.",
        emoji: "🐶"
    },
    {
        name: "SANdeoki",
        member: "San",
        image: "aniteez/sandeoki.jpg",
        description: "O mascote associado ao San.",
        emoji: "🐱"
    },
    {
        name: "bbyongMING",
        member: "Mingi",
        image: "aniteez/bbyeongming.jpg",
        description: "O mascote amarelinho associado ao Mingi.",
        emoji: "🐥"
    },
    {
        name: "WOOYOnyang",
        member: "Wooyoung",
        image: "aniteez/wooyonyang.jpg",
        description: "O mascote associado ao Wooyoung.",
        emoji: "🐱"
    },
    {
        name: "JJONGbear",
        member: "Jongho",
        image: "aniteez/jjongbear.jpg",
        description: "O mascote associado ao Jongho.",
        emoji: "🐻"
    }
];

const aniteezGrid = document.querySelector("#aniteezGrid");

if (aniteezGrid) {
    aniteezGrid.innerHTML = aniteez.map(character => `
        <article class="aniteez-card">

            <img
                class="aniteez-image"
                src="${character.image}"
                alt="${character.name}, mascote de ${character.member}"
                loading="lazy"
            >

            <div class="aniteez-info">

                <h3>${character.name}</h3>

                <p>${character.description}</p>

                <span>${character.emoji} ${character.member}</span>

            </div>
        </article>
    `).join("");
}


/* NOTÍCIAS */

const news = [
    {
        date: "Atualizações oficiais",
        title: "Novidades do ATEEZ",
        description: "Acompanhe anúncios, lançamentos e comunicados oficiais.",
        url: "https://www.kqent.com/"
    },
    {
        date: "Agenda",
        title: "Shows e apresentações",
        description: "Confira informações sobre eventos e atividades do grupo.",
        url: "https://www.ateezofficial.com/"
    },
    {
        date: "Lançamentos",
        title: "Música e novos conteúdos",
        description: "Descubra lançamentos e conteúdos publicados pelo grupo.",
        url: "https://www.youtube.com/@ATEEZofficial"
    }
];

const newsGrid = document.querySelector("#newsGrid");

if (newsGrid) {
    newsGrid.innerHTML = news.map(item => `
        <article class="news-card">

            <time>${item.date}</time>

            <h3>${item.title}</h3>

            <p>${item.description}</p>

            <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                Consultar fonte →
            </a>

        </article>
    `).join("");
}


/* VÍDEOS */

const videos = [
    {
        title: "In Your Fantasy",
        category: "mv",
        query: "ATEEZ In Your Fantasy official MV"
    },
    {
        title: "BOUNCY",
        category: "mv",
        query: "ATEEZ BOUNCY official MV"
    },
    {
        title: "Crazy Form",
        category: "mv",
        query: "ATEEZ Crazy Form official MV"
    },
    {
        title: "WORK",
        category: "mv",
        query: "ATEEZ WORK official MV"
    },
    {
        title: "ATEEZ Performance",
        category: "performance",
        query: "ATEEZ official performance"
    },
    {
        title: "ATEEZ Dance Practice",
        category: "dance",
        query: "ATEEZ official dance practice"
    }
];

const videoGrid = document.querySelector("#videoGrid");

function renderVideos(category = "todos") {

    if (!videoGrid) return;

    const filteredVideos = category === "todos"
        ? videos
        : videos.filter(video => video.category === category);

    videoGrid.innerHTML = filteredVideos.map(video => `
        <article class="video-card">

            <div class="video-art">▶</div>

            <h3>${video.title}</h3>

            <a
                href="https://www.youtube.com/results?search_query=${encodeURIComponent(video.query)}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Encontrar no YouTube →
            </a>

        </article>
    `).join("");
}

renderVideos();


/* FILTROS DE VÍDEO */

const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderVideos(button.dataset.category);

    });

});


/* MENU RESPONSIVO */

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const opened = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(opened));

        menuToggle.textContent = opened ? "✕" : "☰";

    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* LOGIN E CADASTRO DEMONSTRATIVOS */

const dialog = document.querySelector("#accountDialog");
const form = document.querySelector("#accountForm");

const nameInput = document.querySelector("#accountName");
const nameLabel = document.querySelector("#nameLabel");
const emailInput = document.querySelector("#accountEmail");
const passwordInput = document.querySelector("#accountPassword");

const message = document.querySelector("#accountMessage");
const title = document.querySelector("#dialogTitle");
const description = document.querySelector("#dialogDescription");
const submit = document.querySelector("#submitAccount");

const greeting = document.querySelector("#userGreeting");
const login = document.querySelector("#loginButton");
const register = document.querySelector("#registerButton");
const logout = document.querySelector("#logoutButton");

let mode = "login";


function openAccount(nextMode) {

    if (!dialog || !form) return;

    mode = nextMode;

    form.reset();

    message.textContent = "";

    const registering = mode === "register";

    title.textContent = registering
        ? "Crie sua conta ATINY"
        : "Entre no ATEEZ WORLD";

    description.textContent = registering
        ? "Cadastre-se para personalizar sua experiência."
        : "Acesse sua experiência no portal.";

    nameInput.classList.toggle("hidden", !registering);

    nameLabel.classList.toggle("hidden", !registering);

    nameInput.required = registering;

    submit.textContent = registering ? "Criar conta" : "Entrar";

    dialog.showModal();

}


if (login) {

    login.addEventListener("click", () => {
        openAccount("login");
    });

}


if (register) {

    register.addEventListener("click", () => {
        openAccount("register");
    });

}


const closeDialog = document.querySelector("#closeDialog");

if (closeDialog && dialog) {

    closeDialog.addEventListener("click", () => {
        dialog.close();
    });

}


function updateAccount() {

    if (!greeting) return;

    const name = sessionStorage.getItem("ateezWorldDemoName");

    greeting.textContent = name ? `Olá, ${name}!` : "";

    if (login) {
        login.classList.toggle("hidden", Boolean(name));
    }

    if (register) {
        register.classList.toggle("hidden", Boolean(name));
    }

    if (logout) {
        logout.classList.toggle("hidden", !name);
    }

}


if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        if (passwordInput.value.length < 6) {

            message.textContent =
                "A senha precisa ter pelo menos 6 caracteres.";

            return;

        }

        if (mode === "register") {

            const name = nameInput.value.trim();

            if (!name) {

                message.textContent = "Informe seu nome.";

                return;

            }

            sessionStorage.setItem("ateezWorldDemoName", name);

            message.textContent =
                `Cadastro demonstrativo concluído. Bem-vinda, ${name}!`;

        } else {

            const name = sessionStorage.getItem("ateezWorldDemoName");

            if (!name) {

                message.textContent =
                    "Este protótipo não possui contas reais. Experimente o cadastro demonstrativo.";

                return;

            }

            message.textContent = `Olá novamente, ${name}!`;

        }

        updateAccount();

        setTimeout(() => {

            if (dialog) {
                dialog.close();
            }

        }, 1100);

    });

}


if (logout) {

    logout.addEventListener("click", () => {

        sessionStorage.removeItem("ateezWorldDemoName");

        updateAccount();

    });

}


/* INICIALIZAÇÃO */

updateAccount();

console.log("ATEEZ WORLD carregado com sucesso! 🏴‍☠️");