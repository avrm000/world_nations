

var map = L.map('map').setView([51.505, -0.09], 3);




L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);



let url = "http://api.geonames.org/countryCodeJSON?lat=&lng=&username=cris__leaflet";


fetch('http://api.geonames.org/countryCodeJSON?lat=49.03&lng=10.2&username=cris__leaflet')
    .then(response => response.json())  // Usa response.text() per ottenere il contenuto come stringa
    .then(data => {
        console.log('NATION:', data.countryName);  // Stampa il codice del paese ricevuto
    })
    .catch(error => {
        console.error('Errore:', error);  // Gestisce eventuali errori nella richiesta
    });



function onMapClick(e) {

    console.log(e.latlng['lat']);

    var nuovo_url = inserisci_dato(e.latlng['lat'], url, 'lat=');
    nuovo_url = inserisci_dato(e.latlng['lng'], nuovo_url, 'lng=');

    console.log(nuovo_url);

    fetch(nuovo_url)
        .then(response => response.json())  // Usa response.text() per ottenere il contenuto come stringa
        .then(data => {
            console.log('NATION:', data.countryName);  // Stampa il codice del paese ricevuto
        })
        .catch(error => {
            console.error('Errore:', error);  // Gestisce eventuali errori nella richiesta
        });


}

map.on('click', onMapClick);





function inserisci_dato(dato_da_inserire, stringa_dove_inserire, punto_dove_inserire){

    var indice = stringa_dove_inserire.indexOf(punto_dove_inserire);
    var length = punto_dove_inserire.length; 

    var primo = stringa_dove_inserire.substring(0, indice + length);
    var terzo = stringa_dove_inserire.substring(indice + length); 

    return primo + dato_da_inserire + terzo;


}