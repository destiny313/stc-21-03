const films = [
    {
        start: '10:00',
        title: 'Человек-паук',
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
        title: 'Собачья жизнь 2',
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
    }
]

const tableBody = document.getElementById('chooseFilm-table-body');
tableBody.innerHTML = '';



for (let index = 0; index < films.length; index++) {
    tableBody.innerHTML += `<tr>
        <td><input type="checkbox" name="" id=""></td>
        <td>${films[index].start}</td>
        <td><a href="${films[index].link}" target="_blank"
                title="${films[index].title}">${films[index].title}
            </a></td>
        <td>${films[index].genre.map(g => g.name)}</td>
        </tr>`;
    
}