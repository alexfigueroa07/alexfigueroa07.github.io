let map;
let autocomplete;
let position = { lat: 21.813878, lng: -102.769319 }
async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    input = document.getElementById("places");
    autocomplete = new google.maps.places.Autocomplete(input);




    map = new Map(document.getElementById("map"), {
        center: position,
        zoom: 14,
    });

    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: "UTC",
    });

    autocomplete.addListener("place_changed", function () {
        const selectedPlace = autocomplete.getPlace();
        if (selectedPlace.geometry && selectedPlace.geometry.location) {

            map.setCenter(selectedPlace.geometry.location);
            map.setZoom(17);
        }
    });
}



initMap();

