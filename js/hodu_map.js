var mapContainer = document.getElementsByClassName("map_kakao")[0];
mapOption = {
    center: new kakao.maps.LatLng(33.442411, 126.571412),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);