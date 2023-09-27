let map;
let autocomplete;
async function initMap() {
    const position = { lat: 21.8145918, lng: -102.7698326 };

    const { Map } = await google.maps.importLibrary("maps");

    input = document.getElementById("places");

    map = new Map(document.getElementById("map"), {
        center: { lat: 21.8145918, lng: -102.7698326 },
        zoom: 17,
        mapId: "DEMO_MAP_ID",

    });
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: "Uluru",
    });
    input = document.getElementById("places");
    autocomplete = new google.maps.places.Autocomplete(input);

    //esto es para agregar que al seleccionar una opcion nos cambie la ubicacion
    // Agregar evento de escucha para place_changed
    autocomplete.addListener("place_changed", function () {
        const selectedPlace = autocomplete.getPlace();
        if (selectedPlace.geometry && selectedPlace.geometry.location) {
            map.setCenter(selectedPlace.geometry.location);
            map.setZoom(17);
        }
    });


}


initMap();