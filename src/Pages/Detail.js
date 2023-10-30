import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Detail()
{
    const params = useParams();
    const data=ConcertData.find(datas => datas.id==params.id);
    console.log(data);
    const pathTo=`/res/${data.id}`
    return(
        <div>
            <div>{data.title}</div>
            <div>{data.day}</div>
            <Button variant="secondary" as={Link} to={pathTo}>예매하기 &raquo;</Button>
        </div>
    )
}
export default Detail;