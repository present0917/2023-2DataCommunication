import { useEffect } from "react";
const {kakao}=window;
function MapTest(props){
useEffect((props)=>{
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(0,0), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    console.log(props)
    const map = new kakao.maps.Map(container, options);

     const geocoder = new kakao.maps.services.Geocoder();
 
    geocoder.addressSearch('서울특별시 송파구 올림픽로 424', function(result, status) {

    //연동시
    // geocoder.addressSearch(`${props.hallAddress}`, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
         if (status === kakao.maps.services.Status.OK) {
    
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
    
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">학교주소 테스트</div>'
            });
            infowindow.open(map, marker);
    
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    }
    )
   

}
,[]
)



    return(
        <>
        <div id="map" style={{width:"500px",height:"500px"}}></div>

        </>
    )
}
export default MapTest