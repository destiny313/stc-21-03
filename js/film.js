function getRandomToMax(max) {
    return Math.floor(Math.random() * max);
    // return Math.ceil(Math.random() * (max + 1)) -1;
}

function toHour(num) {
    return `${num}`.padStart(2,'0');
}

// function Film(filmData) {

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

class Film {
    constructor(filmData) {
        this.data = filmData;
    
        this.start = `${toHour(getRandomToMax(14) + 9)}:${toHour(getRandomToMax(12) * 5)}`;

        this.id = filmData.id || filmData.title.replaceAll(' ', '-');

    }

    isNotForAdult() {
        return !this.data.adult;
    }

    getId() {
        return this.id;
    }

    getStart() {
        return this.start;
    }

    getLink() {
        return this.data.link;
    }

    getTitle() {
        return this.data.title;
    }

    getGenre() {
        return this.data.genre.map(g => g.name).join(', ');
    }


    
    renderFilmTableItem() {
        return `<tr>
        <td><svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"/>
        </svg></td>
        <td>${this.getStart()}</td>
        <td><a href="${this.getLink()}" target="_blank"
                title="${this.getTitle()}">${this.getTitle()}
            </a></td>
        <td>${this.getGenre()}</td>
        </tr>`
    }

}