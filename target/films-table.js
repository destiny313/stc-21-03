"use strict";

var filmsData = [{
  // start: '10:00',
  title: 'Человек-паук',
  adult: false,
  link: 'https://www.kinopoisk.ru/film/838',
  genre: [{
    name: 'фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'приключения'
  }]
}, {
  // start: '12:00',
  title: 'Собачья жизнь 23',
  link: 'https://www.kinopoisk.ru/film/1122114',
  genre: [{
    name: 'фэнтэзи'
  }, {
    name: 'драма'
  }, {
    name: 'комедия'
  }]
}, {
  // start: '14:00',
  title: 'История игрушек 4',
  link: 'https://www.kinopoisk.ru/film/846824',
  genre: [{
    name: 'мультфильм'
  }, {
    name: 'фэнтэзи'
  }, {
    name: 'комедия'
  }]
}, {
  // start: '16:00',
  title: 'Люди в чёрном: Интэрнэшнл',
  link: '"https://www.kinopoisk.ru/film/693730',
  genre: [{
    name: 'фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'комедия'
  }]
}, {
  // start: '23:00',
  title: 'XXX',
  adult: true,
  link: '"https://www.kinopoisk.ru/film/693730',
  genre: [{
    name: 'XXX'
  }]
}];
var filmHelper = {
  getId: function getId() {
    return this.id || this.title.replaceAll(' ', '-');
  },
  getTitle: function getTitle() {
    return this.title;
  },
  getStart: function getStart() {
    return this.start;
  },
  getGenre: function getGenre() {
    return this.genre.map(function (g) {
      return g.name;
    }).join(', ');
  },
  getLink: function getLink() {
    return this.link;
  }
};

function renderFilmTableItem(film) {
  return "<tr>\n    <td><input type=\"checkbox\" name=\"\" id=\"".concat(filmHelper.getId.apply(film), "\"></td>\n    <td>").concat(filmHelper.getStart.apply(film), "</td>\n    <td><a href=\"").concat(filmHelper.getLink.apply(film), "\" target=\"_blank\"\n            title=\"").concat(filmHelper.getTitle.apply(film), "\">").concat(filmHelper.getTitle.apply(film), "\n        </a></td>\n    <td>").concat(filmHelper.getGenre.apply(film), "</td>\n    </tr>");
}

var tableBody = document.getElementById('chooseFilm-table-body');
tableBody.innerHTML = ''; // for (let index = 0; index < filmsData.length; index++) {
//     if (!filmsData[index].adult) {
//         tableBody.innerHTML += renderFilmTableItem(filmsData[index]);
//     }
// }

for (var index = 0; index < filmsData.length; index++) {
  var film = new Film(filmsData[index]);
  console.log(111);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItem();
  }
}