import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function CarouselButton() {

    return(
        <div>
                <Button variant="secondary" as={Link} to='http://localhost:3000/one'>예매하기 &raquo;</Button>
        </div>
    );
};
export default CarouselButton;