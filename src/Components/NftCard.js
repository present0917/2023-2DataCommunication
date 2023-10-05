import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../img/imageNFT.png';
function NftCard(props) {
    //forTestCommit
    console.log(props)
    return (
            <Card style={{ margin:'1rem',minWidth:'25%',maxWidth:'25%'}}>
                <Card.Img variant="top" src={props.data.image_url}/>
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                        {props.data.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        
    )
}
export default NftCard