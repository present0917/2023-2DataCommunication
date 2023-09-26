import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../img/imageNFT.png';
function CardPost() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>글제목</Card.Title>
                    <Card.Text>
                        일단임시로
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardPost