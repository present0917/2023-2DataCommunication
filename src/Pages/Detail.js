import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailTitle from "../Components/DetailTitle";
import DetailContainer from "../Components/DetailContainer";

function Detail()
{
    const params = useParams();
    const data=ConcertData.find(datas => datas.id==params.id);
    console.log(data);
    const pathTo=`/res/${data.id}`
    return(
        <>
            <DetailTitle title={data.title} day={data.day}/>
            <DetailContainer />
            <Button variant="secondary" as={Link} to={pathTo}>예매하기 &raquo;</Button>
        </>
    )
}
export default Detail;