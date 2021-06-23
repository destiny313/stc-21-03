const SYPEX_URL = 'http://api.sypexgeo.net',
GLAVPUNKT_URL = 'https://glavpunkt.ru/api/get_rf_cities',
GLAVPUNKT_PRICE_URL = 'https://glavpunkt.ru/api/get_tarif';
let selectedCity, cities;

function getRequest(url, callback) {
    // let xhr = new XMLHttpRequest();
    
    // xhr.open('GET', url);
    
    // xhr.send();
    
    
    // xhr.onreadystatechange = function() {
    //     if (xhr.status != 200) { 
    //         console.log(4);           
    //         // return xhr.statusText;
    //         return false;
    //     }
    //     if (xhr.readyState == 4) { 
    //         console.log(5);                   
    //         callback.call(xhr.responseText);
    //     }
        
    // }
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
    // let res = $.parseJSON(this);     
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

// function setCity() {
//     console.log('this: ',this);   
//     let res = $.parseJSON(this);     
//     selectedCity = res.city.name_ru;
//     console.log(selectedCity);
//     $('#city-link').html(selectedCity + ', ');    
//     getPrice(selectedCity);
// }

// function setCities() {
//     cities = $.parseJSON(this);
//     console.log($.parseJSON(this));
//     getCityList();
// }

function getPrice(targetCity) {
    let price_url = GLAVPUNKT_PRICE_URL + '?serv=курьерская%20доставка&cityFrom=Санкт-Петербург&cityTo=' + targetCity + '&weight=1&price=500';
    getRequest(price_url, setPrice);

}

// function setPrice() {
//     console.log($.parseJSON(this).tarif)
//     let tarif = $.parseJSON(this).tarif;
//     if (tarif) {
//         $('#city-price').html(', ' + tarif + 'р.');
//     }
//     else {
//         $('#city-price').html(', нет доставки.');
//     }
// }

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
    // $.fancybox.open({
	// 	src: '#cityModal',
	// 	type: 'inline'
	// }); 
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



    // $("#cityModal").on("click", "li", function(){
    //     let val = $(this);
    //     let index=$('li').val(this);
    //     console.log('clicked', val);
    //     console.log('clicked', index);
    // });
    // $("#cityModal li").click(function () {
    //     var index=$('#cityModal li').index(this);
    //     console.log(index);
    //     return false;
    // });
    
})