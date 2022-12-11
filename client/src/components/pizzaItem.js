import React, { useContext } from "react";
import {observer} from 'mobx-react-lite';
import { Context } from "..";
import { Card, Col, Row, Image } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';
const PizzaItem = ({pizza}) => {
    const path_img = 'http://localhost:5000/'+ pizza.image_name_pizza
    const history = useNavigate ()
    return(
        <Col md={3} onClick={() => {history('/pizza/'+pizza.id_pizza)}}>
            <Card style={{width: 150, cursor: 'pointer'}}>
                <Image width={150} height={150} src={path_img}></Image>
                <div>{pizza.name_pizza}</div>
                <div>{pizza.price_pizza}</div>
            </Card>
        </Col>
)
};

export default PizzaItem