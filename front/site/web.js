// ------ Dados das cidades ------
        const cidades = {
            "sao-paulo": {
                imagem: "/images/saopaulo.jpg",
                alt: "São Paulo",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 370"   },
                    { tipo: "Quarto Premium",    preco: "R$ 520"   },
                    { tipo: "Quarto Executive",  preco: "R$ 750"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 850"   },
                    { tipo: "Suite",             preco: "R$ 1.200" },
                    { tipo: "Quarto Individual", preco: "R$ 450"   },
                ]
            },
            "rio-de-janeiro": {
                imagem: "/images/riodejaneiro.jpg",
                alt: "Rio de Janeiro",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 420"   },
                    { tipo: "Quarto Premium",    preco: "R$ 680"   },
                    { tipo: "Quarto Executive",  preco: "R$ 900"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 980"   },
                    { tipo: "Suite",             preco: "R$ 1.500" },
                    { tipo: "Quarto Individual", preco: "R$ 500"   },
                ]
            },
            "curitiba": {
                imagem: "/images/curitiba.jpg",
                alt: "Curitiba",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 300" },
                    { tipo: "Quarto Premium",    preco: "R$ 480" },
                    { tipo: "Quarto Executive",  preco: "R$ 650" },
                    { tipo: "Quarto Familiar",   preco: "R$ 720" },
                    { tipo: "Suite",             preco: "R$ 950" },
                    { tipo: "Quarto Individual", preco: "R$ 380" },
                ]
            },
            "maceio": {
                imagem: "/images/maceio.jpg",
                alt: "Maceió",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 370"   },
                    { tipo: "Quarto Premium",    preco: "R$ 520"   },
                    { tipo: "Quarto Executive",  preco: "R$ 750"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 850"   },
                    { tipo: "Suite",             preco: "R$ 1.200" },
                    { tipo: "Quarto Individual", preco: "R$ 450"   },
                ]
            },
            "salvador": {
                imagem: "/images/salvador.jpeg",
                alt: "Salvador",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 420"   },
                    { tipo: "Quarto Premium",    preco: "R$ 680"   },
                    { tipo: "Quarto Executive",  preco: "R$ 900"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 980"   },
                    { tipo: "Suite",             preco: "R$ 1.500" },
                    { tipo: "Quarto Individual", preco: "R$ 500"   },
                ]
            },
            "belo-horizonte": {
                imagem: "/images/belo-horizonte.jpeg",
                alt: "Belo Horizonte",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 300" },
                    { tipo: "Quarto Premium",    preco: "R$ 480" },
                    { tipo: "Quarto Executive",  preco: "R$ 650" },
                    { tipo: "Quarto Familiar",   preco: "R$ 720" },
                    { tipo: "Suite",             preco: "R$ 950" },
                    { tipo: "Quarto Individual", preco: "R$ 380" },
                ]
            },
            "fortaleza": {
                imagem: "/images/fortaleza.jpeg",
                alt: "Fortaleza",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 370"   },
                    { tipo: "Quarto Premium",    preco: "R$ 520"   },
                    { tipo: "Quarto Executive",  preco: "R$ 750"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 850"   },
                    { tipo: "Suite",             preco: "R$ 1.200" },
                    { tipo: "Quarto Individual", preco: "R$ 450"   },
                ]
            },
            "porto-alegre": {
                imagem: "/images/porto-alegre.jpg",
                alt: "Porto Alegre",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 300"   },
                    { tipo: "Quarto Premium",    preco: "R$ 480"   },
                    { tipo: "Quarto Executive",  preco: "R$ 900"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 980"   },
                    { tipo: "Suite",             preco: "R$ 1.500" },
                    { tipo: "Quarto Individual", preco: "R$ 500"   },
                ]
            },
            "recife": {
                imagem: "/images/recife.jpg",
                alt: "Recife",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 300" },
                    { tipo: "Quarto Premium",    preco: "R$ 480" },
                    { tipo: "Quarto Executive",  preco: "R$ 650" },
                    { tipo: "Quarto Familiar",   preco: "R$ 720" },
                    { tipo: "Suite",             preco: "R$ 950" },
                    { tipo: "Quarto Individual", preco: "R$ 380" },
                ]
            },
            "natal": {
                imagem: "/images/natal.jpg",
                alt: "Natal",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 370"   },
                    { tipo: "Quarto Premium",    preco: "R$ 520"   },
                    { tipo: "Quarto Executive",  preco: "R$ 750"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 850"   },
                    { tipo: "Suite",             preco: "R$ 1.200" },
                    { tipo: "Quarto Individual", preco: "R$ 450"   },
                ]
            },
            "florianopolis": {
                imagem: "/images/florianopolis.jpg",
                alt: "Florianópolis",
                quartos: [
                    { tipo: "Quarto Standard",   preco: "R$ 300"   },
                    { tipo: "Quarto Premium",    preco: "R$ 480"   },
                    { tipo: "Quarto Executive",  preco: "R$ 900"   },
                    { tipo: "Quarto Familiar",   preco: "R$ 980"   },
                    { tipo: "Suite",             preco: "R$ 1.500" },
                    { tipo: "Quarto Individual", preco: "R$ 500"   },
                ]
            }
        };

        // ------ Selecionar cidade ------
        function selecionarCidade(id, elemento) {
            event.preventDefault();

            const cidade = cidades[id];
            if (!cidade) return;

            // Troca a imagem com transição fade
            const img = document.getElementById("foto-cidade");
            img.style.opacity = "0";
            
            setTimeout(() => {
                img.src = cidade.imagem;
                img.alt = cidade.alt;
                img.style.opacity = "1";
            }, 250);

            // Recria os cards de quartos
            const container = document.getElementById("quartos-container");
            container.innerHTML = cidade.quartos.map(q => `
                <button>
                    <p class="tipo">${q.tipo}</p>
                    <p class="preco" style="margin-left: 80%;">${q.preco}</p>
                </button>
            `).join("");

            // Destaca o link ativo
            document.querySelectorAll(".cities a").forEach(a => a.classList.remove("ativo"));
            elemento.classList.add("ativo");
        }

        // ------ Scroll horizontal das cidades ------
        function scrollCities(valor) {
            document.getElementById("cities").scrollLeft += valor;
        }

        // ------ Menu mobile ------
        const menuButton = document.querySelector(".mobile-menu-btn");
        const navLinks   = document.querySelector(".nav-links");

        menuButton?.addEventListener("click", () => {
            navLinks?.classList.toggle("open");
        });

        // ------ Carrega São Paulo como padrão ------
        window.addEventListener("DOMContentLoaded", () => {
            const primeiroLink = document.querySelector(".cities a");
            selecionarCidade("sao-paulo", primeiroLink);
        });
        
        let slideAtual = 0;


        function mudarSlide(direcao) {
        const slides = document.querySelectorAll('.slider');
        slides[slideAtual].classList.remove('on');
        slideAtual = (slideAtual + direcao + slides.length) % slides.length;
        slides[slideAtual].classList.add('on');
        }

        // ------ Seleção de idioma ------
        function selecionar(event, bandeira, texto) {
        event.stopPropagation();
        document.querySelector('.lang-selected .bandeira').textContent = bandeira;
        document.getElementById('lang-texto').textContent = texto;
        document.querySelector('.lang-selector').classList.remove('aberto');
        }  