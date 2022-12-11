import React, { useContext, useEffect } from "react";
import {observer} from 'mobx-react-lite';
import { Context } from "..";
import { Row } from "react-bootstrap";
import PizzaItem from "./pizzaItem";
import { GetPizzas } from "../http/pizzaApi";
const PizzaList = observer(() => {
    const {pizza} = useContext(Context)
    GetPizzas().then(data => pizza.setPizza(Array.from(data)))
    console.log('')
    return(
        <Row className="d-flex">
            {
                pizza.pizzas.map(pizza => 
                    
                    <PizzaItem key={pizza.id_pizza} pizza={pizza}/>)
            }
        </Row>
)
});

export default PizzaList