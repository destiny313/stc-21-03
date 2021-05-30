const films = [
    {
        start: '10:00',
        title: 'Человек-паук',
        adult: false,
        link: 'https://www.kinopoisk.ru/film/838',
        genre: [
            {
                name: 'фантастика',    
            },
            {
                name: 'боевик',    
            },
            {
                name: 'приключения',    
            }
        ]
    },{
        start: '12:00',
        title: 'Собачья жизнь 23',
        link: 'https://www.kinopoisk.ru/film/1122114',
        genre: [
            {
                name: 'фэнтэзи',    
            },
            {
                name: 'драма',    
            },
            {
                name: 'комедия',    
            }
        ]
    },{
        start: '14:00',
        title: 'История игрушек 4',
        link: 'https://www.kinopoisk.ru/film/846824',
        genre: [
            {
                name: 'мультфильм',    
            },
            {
                name: 'фэнтэзи',    
            },
            {
                name: 'комедия',    
            }
        ]
    },{
        start: '16:00',
        title: 'Люди в чёрном: Интэрнэшнл',
        link: '"https://www.kinopoisk.ru/film/693730',
        genre: [
            {
                name: 'фантастика',    
            },
            {
                name: 'боевик',    
            },
            {
                name: 'комедия',    
            }
        ]
    },{
        start: '23:00',
        title: 'XXX',
        adult: true,
        link: '"https://www.kinopoisk.ru/film/693730',
        genre: [
            {
                name: 'XXX',    
            }
            
        ]
    }
]

const filmHelper = {
    getId() {
        return this.id || this.title.replaceAll(' ', '-');
    },
    getTitle() {
        return this.title;
    },
    getStart() {
        return this.start;
    },
    getGenre() {        
        return this.genre.map(g => g.name).join(', ');
    },
    getLink() {
        return this.link;
    }
}

function renderFilmTableItem(film) {
    return `<tr>
    <td><input type="checkbox" name="" id="${filmHelper.getId.apply(film)}"></td>
    <td>${filmHelper.getStart.apply(film)}</td>
    <td><a href="${filmHelper.getLink.apply(film)}" target="_blank"
            title="${filmHelper.getTitle.apply(film)}">${filmHelper.getTitle.apply(film)}
        </a></td>
    <td>${filmHelper.getGenre.apply(film)}</td>
    </tr>`
}

const tableBody = document.getElementById('chooseFilm-table-body');
tableBody.innerHTML = '';



for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
        tableBody.innerHTML += renderFilmTableItem(films[index]);
    }
    
}