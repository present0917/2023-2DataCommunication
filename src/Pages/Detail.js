import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailTitle from "../Components/DetailTitle";
import DetailContainer from "../Components/DetailContainer";

function Detail()
{
    const params = useParams();
    const concert=ConcertData.find(datas => datas.id==params.id);
    console.log(concert);
    const pathTo=`/res/${concert.id}`
    return(
        <>
            <DetailTitle title={concert.title} day={concert.day}/>
            <DetailContainer concert={concert}/>
            <Button variant="secondary" as={Link} to={pathTo}>예매하기 &raquo;</Button>
        </>
    )
}
export default Detail;