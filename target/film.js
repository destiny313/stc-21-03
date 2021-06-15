"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function getRandomToMax(max) {
  return Math.floor(Math.random() * max); // return Math.ceil(Math.random() * (max + 1)) -1;
}

function toHour(num) {
  return "".concat(num).padStart(2, '0');
} // function Film(filmData) {
//     this.data = filmData;
//     this.start = `${toHour(getRandomToMax(14) + 9)}:${toHour(getRandomToMax(12) * 5)}`;
// }
// Film.prototype.isNotForAdult = function() {
//     return !this.data.adult;
// }
// Film.prototype.getId = function() {
//     return this.data.id || this.data.title.replaceAll(' ', '-');
// }
// Film.prototype.getStart = function() {
//     return this.start;
// }
// Film.prototype.getLink = function() {
//     return this.data.link;
// }
// Film.prototype.getTitle = function() {
//     return this.data.title;
// }
// Film.prototype.getGenre = function() {
//     return this.data.genre.map(g => g.name).join(', ');
// }
// Film.prototype.renderFilmTableItem = function() {
//     return `<tr>
//     <td><input type="checkbox" name="" id="${this.getId()}"></td>
//     <td>${this.getStart()}</td>
//     <td><a href="${this.getLink()}" target="_blank"
//             title="${this.getTitle()}">${this.getTitle()}
//         </a></td>
//     <td>${this.getGenre()}</td>
//     </tr>`
// }


var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(toHour(getRandomToMax(12) * 5));
    this.id = filmData.id || filmData.title.replaceAll(' ', '-');
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getLink",
    value: function getLink() {
      return this.data.link;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre.map(function (g) {
        return g.name;
      }).join(', ');
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "<tr>\n        <td><input type=\"checkbox\" name=\"\" id=\"".concat(this.getId(), "\"></td>\n        <td>").concat(this.getStart(), "</td>\n        <td><a href=\"").concat(this.getLink(), "\" target=\"_blank\"\n                title=\"").concat(this.getTitle(), "\">").concat(this.getTitle(), "\n            </a></td>\n        <td>").concat(this.getGenre(), "</td>\n        </tr>");
    }
  }]);

  return Film;
}();