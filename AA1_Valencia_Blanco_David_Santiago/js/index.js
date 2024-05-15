const films = [
    {
        id: 1,
        title: "Civil War",
        description: "En un futuro próximo, un equipo de periodistas viajará por los Estados Unidos durante una guerra civil que se intensifica rápidamente y que se ha apoderado.",
        raiting: 4.3,
        image: "./images/civil_war.jpg",
        hyperlink: "civil_war.html"
    },

    {
        id: 2,
        title: "The Chosen",
        description: "Mientras se plantan las semillas de su traición, Jesús llama a sus seguidores a levantarse cuando laoposición a su mensaje se vuelve violenta.",
        raiting: 4.2,
        image: "./images/the_chosen.jpg",
        hyperlink: "the_chosen.html"
    },

    {
        id: 3,
        title: "Back to Black",
        description: "Contada desde la perspectiva de Amy e inspirada en sus letras personales, la película sigue a la extraordinaria mujer detrás del fenómeno.",
        raiting: 3.1,
        image: "./images/back_to_black.jpg",
        hyperlink: "back_to_black.html"
    },

    {
        id: 4,
        title: "Abigail",
        description: "Después de que un grupo de aspirantes a delincuentes secuestran a una bailarina de 12 años, hija de una poderosa figura del inframundo",
        raiting: 3.3,
        image: "./images/Abigail.jpg",
        hyperlink: "abigail.html"
    },

    {
        id: 5,
        title: "Kung Fu Panda 4",
        description: "Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial, con su incomparable coraje y sus alocadas habilidades",
        raiting: 4.9,
        image: "./images/Kung_Fu_Panda_4.jpg",
        hyperlink: "kung_fu_panda_4.html"
    },

]

function showMovies(moviesToShow) {
    const filmList = document.getElementById("filmList");
    filmList.innerHTML = "";

    if(moviesToShow.lenght === 0) {
        filmList.innerHTML = "<p>No movies found</p>"
    } else {
        moviesToShow.forEach(films => {
            const filmsCard = `
            <div class="movie-card">
            <a href="${films.hyperlink}">
                <img src="${films.image}" class="card-img-top" alt="${films.title}">
            </a>
            <div class="card-body card-light bg-light shadow">
                    <span class="card-rating">${films.raiting}</span>
                    <div class="mb-1 mr-4 card-title">${films.title}</div>
                    <p class="small mb-0">${films.description}</p>
            </div>
        </div>
        </div>      
            `;
            filmList.innerHTML += filmsCard;
        });
    }

}

function busquedaPeliculas(query) {
    const terminoBusqueda = query.trim().toLowerCase();

    const filtroPeliculas = films.filter(pelicula => {
        return(
            pelicula.title.toLowerCase().includes(terminoBusqueda) ||
            pelicula.description.toLowerCase().includes(terminoBusqueda)
        );
    });

    showMovies(filtroPeliculas);
}

document.addEventListener('DOMContentLoaded', () => {
    showMovies(films);
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener('input', () => {
    busquedaPeliculas(searchInput.value);
});

const Secondfilms = [
    {
        id: 6,
        title: "Godzilla y Kong",
        description: "Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida",
        raiting: 2.8,
        image: "./images/godzilla_kong.jpg",
        link: "godzilla_and_kong.html"
    },

    {
        id: 7,
        title: "Transformers 40th",
        description: "Esta especial experiencia cinematográfica te llevará al inicio de todo con los actores de doblaje originales unidos por primera vez en décadas para revisitar a sus personajes",
        raiting: 3.4,
        image: "./images/Transformers_40th.jpg",
        link: "transformers_40th.html"
    },

    {
        id: 8,
        title: "Spy X Family",
        description: "Después de recibir una orden para ser reemplazado en la Operación Strix, Loid decide ayudar a Anya a ganar una competencia de cocina en la Academia Edén",
        raiting: 1.2,
        image: "./images/spy_x_family.jpg",
        link: "spy_x_family.html"
    },

    {
        id: 9,
        title: "Challenging",
        description: "Ambientada en el competitivo mundo del tenis profesional, en el que la jugadora convertida en entrenadora Tashi ha transformado a su marido Art en un campeón de Grand Slam.",
        raiting: 1.1,
        image: "./images/desafiantes.jpg",
        link: "challenging.html"
    },

    {
        id: 10,
        title: "The First Omen",
        description: "Cuando una joven estadounidense es enviada a Roma para comenzar una vida de servicio a la Iglesia, descubre una oscuridad que la lleva a cuestionar su propia fe y devela una conspiración aterradora",
        raiting: 3.7,
        image: "./images/La_primera_profecia.jpg",
        link: "the_first_omen.html"
    }
    
]

function showSecondMovies(secondMoviesToShow) {
    const SecondfilmList = document.getElementById("SecondfilmList");
    SecondfilmList.innerHTML = "";

    if(secondMoviesToShow.lenght === 0) {
        SecondfilmList.innerHTML = "<p>No se encontro la segunda parte de peliculas</p>"
    } else {
        secondMoviesToShow.forEach(Secondfilms => {
            const secondfilmsCard = `
            
            <div class="movie-card2">
            <a href="${Secondfilms.link}">
                <img src="${Secondfilms.image}" class="card-img-top" alt="${Secondfilms.title}">
            </a>
            <div class="card-body card-light bg-light shadow">
                <span class="card-rating">${Secondfilms.raiting}</span>
                <div class="mb-1 mr-4 card-title">${Secondfilms.title}</div>
                <p class="small mb-0">${Secondfilms.description}</p>
            </div>
        </div>
        </div>        
            `;
            SecondfilmList.innerHTML += secondfilmsCard;
        })
    }
}

function busquedaPeliculas2(query) {
    const terminoBusqueda = query.trim().toLowerCase();

    const filtroPeliculas = Secondfilms.filter(pelicula => {
        return(
            pelicula.title.toLowerCase().includes(terminoBusqueda) ||
            pelicula.description.toLowerCase().includes(terminoBusqueda)
        );
    });

    showSecondMovies(filtroPeliculas);
}

document.addEventListener('DOMContentLoaded', () => {
    showSecondMovies(Secondfilms);
});

searchInput.addEventListener('input', () => {
    busquedaPeliculas2(searchInput.value);
});