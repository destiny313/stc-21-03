const blockFilmsWrapper = document.getElementById('films-table');
blockFilmsWrapper.innerHTML = '';
let fCounter = 0;
const apiHeaders = {
    'accept': 'application/json',
    'X-API-KEY': '2abc08b8-8348-4bc7-b884-4cc5bfc5b1a6'
}

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
    headers: {
        ...apiHeaders
    },
    cors: 'no-cors'
})
    .then(data => data.json())
    .then(data => {
        // console.log(data.films);

        data.films.forEach((film) => {
            fCounter += 1;

            const id = `films-description-${film.filmId}`;
            blockFilmsWrapper.innerHTML += `
        <div class="film-card grid-film${fCounter}">
            
            <img src="${film.posterUrlPreview}" alt="">
            
            <div class="film-card__shadow"></div>
            <div class="film-card__description">
                <b>${film.nameRu}</b>
                <p id="${id}">...loading
                </p>
            </div>
        </div>
        `
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${film.filmId}`, {
                headers: {
                    ...apiHeaders
                },
                cors: 'no-cors'
            })
                .then(data => data.json())
                .then(({ data: { description } }) => {
                    const desc = document.getElementById(id);
                    desc.innerText = description;

                    if (!description) {
                        const root = desc.parentNode.parentNode;
                        blockFilmsWrapper.removeChild(root);

                    }


                })
        })


    })
