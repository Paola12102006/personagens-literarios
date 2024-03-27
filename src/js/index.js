const body = document.querySelector("body");
const imgTema = document.querySelector(".img-btn");

imgTema.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        imgTema.setAttribute("src", "./src/imgs/lua.png");
        imgTema.setAttribute("alt", "Icon da Lua");
    }
    else {
        imgTema.setAttribute("src", "./src/imgs/sol.png");
        imgTema.setAttribute("alt", "Icon do Sol");
    }
});

const liMenu = document.querySelectorAll('.li-menu')
const listas = document.querySelectorAll('.listas')
const nomeSerie = document.getElementById('title')

const listaAcotar = document.querySelector('.lista-acotar')
const listaTog = document.querySelector('.lista-tog')
const listaShatter = document.querySelector('.lista-shatter')
const listaPovoAr = document.querySelector('.lista-povo-ar')


liMenu.forEach((lista, i) => {
    lista.addEventListener('click', () => {

        listas.forEach(lista => {
            lista.classList.add('d-none')
        })

        switch (i) {
            case 0:

                nomeSerie.innerText = 'Acotar'
                listaAcotar.classList.remove('d-none')

                break;
            case 1:

                nomeSerie.innerText = 'Trono de Vidro'
                listaTog.classList.remove('d-none')

                break;
            case 2:

                nomeSerie.innerText = 'Estilhaça-Me'
                listaShatter.classList.remove('d-none')

                break;
            case 3:

                nomeSerie.innerText = 'O Povo do Ar'
                listaPovoAr.classList.remove('d-none')

                break;
            default:
                break;
        }
    })
})

