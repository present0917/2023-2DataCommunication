import { useEffect, useState } from "react"
import axios from "axios";
function FireInfo(){
    const [fireData,setFireData]=useState([]);
    const [fireCount,setFireCount]=useState([]);

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}${month}${day}`;
        return formattedDate;
      }

      function sumAbcField(arr, fieldName) {
        // reduce() 함수를 사용하여 "abc" 필드 값을 더합니다.
        console.log(fieldName)
        const total = arr.reduce((accumulator, currentObject) => {
          return accumulator + currentObject[fieldName];
        }, 0); // 초기값 0을 설정합니다.
        return total;
      }
      

    useEffect(()=> 
    {
        axios.get(
        `https://apis.data.go.kr/1400000/forestStusService/getfirestatsservice`,{
            params:{  
                serviceKey:process.env.REACT_APP_API_KEY,
                numOfRows:10000,  
                pageNo:1,
                searchStDt:20230101,
                searchEdDt:getCurrentDate(),
            }}
    //URL 직접 넣을때는 encoding key로 넣지만 
    //prarms로 넣을때는 decoding key로 넣기 왜지?
        
         )
         .then((response)=>{
            console.log(response.data.response.body.items.item)
            //setFireData(JSON.stringify(response.data.response.body.items.item[1]))
            setFireData(sumAbcField(response.data.response.body.items.item , `damagearea`))
            setFireCount(response.data.response.body.items.item.length)
         }
         )
         .catch((error)=>console.log(error))
},[]);
    return(
        <>
        <div>
            2023 산불 피해규모
        </div>
        <div>
             {fireCount} 회
        </div>
        <div>
             {fireData} 헥타르
        </div>
        
        </>
    )
}
export default FireInfo