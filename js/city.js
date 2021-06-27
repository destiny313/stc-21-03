const SYPEX_URL = 'http://api.sypexgeo.net',
GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities',
GLAVPUNKT_PRICE_URL = 'https://glavpunkt.ru/api/get_tarif';
let selectedCity, cities;

function getRequest(url, callback) {
    $.get(url,'',function(data){
          console.log(data);          
          callback.call(data);
            },
      ).fail(function(){
          console.log('error');
          $.fancybox.open({
		    src: '#cityModal',
		    type: 'inline'
	       }); 
      });



}

function setCity() {
    console.log('this: ',this);          
    selectedCity = this.city.name_ru;
    console.log(selectedCity);
    $('#city-link').html(selectedCity + ', ');    
    getPrice(selectedCity);
}

function setCities() {
    cities = this;
    console.log('Cities: ',this);
    getCityList();
}

function setPrice() {
    console.log(this.tarif)
    let tarif =this.tarif;
    if (tarif) {
        $('#city-price').html(', ' + tarif + 'р.');
    }
    else {
        $('#city-price').html(', нет доставки.');
    }
}



function getPrice(targetCity) {
    let price_url = GLAVPUNKT_PRICE_URL + '?serv=курьерская%20доставка&cityFrom=Санкт-Петербург&cityTo=' + targetCity + '&weight=1&price=500';
    getRequest(price_url, setPrice);

}


function getCityList() {
    let html = '<ul>',
        val = $('#city_input').val(),
        counter = 0;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name.toLowerCase().indexOf(val.toLowerCase()) >= 0 && counter < 5) {
            html += '<li>' + cities[i].name + '</li>';
            counter++;
        }
        
    }
    html += '</ul>';
    $('#search_result').html(html);
}

jQuery(document).ready(($) => {
    let city = getRequest(SYPEX_URL, setCity);

    $(document).on('keyup', '#city_input', function(){        
        let val = $(this).val();

        if (!cities) {
            getRequest(GLAVPUNKT_URL, setCities);
        }
        else {
            getCityList();
        }
        
    })

    $("#cityModal").on("click", "li", function(){        
        selectedCity = $(this).text()
        console.log(selectedCity);
        $.fancybox.close('#cityModal');
        $('#city-link').html(selectedCity + ', ');
        getPrice(selectedCity);               
      });




    
})