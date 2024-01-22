var mapContainer = document.getElementsByClassName("map_kakao")[0];
mapOption = {
    center: new kakao.maps.LatLng(37.51217, 127.0753),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var iwContent = '<div style="padding:5px;">잠실학생체육관</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.51217, 127.0753), //인포윈도우 표시 위치입니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition,
    content : iwContent,
    removable : iwRemoveable
});

