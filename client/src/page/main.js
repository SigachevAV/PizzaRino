import React, { useContext } from "react";
import { Context } from "../index";
import {Container, Row} from 'react-bootstrap';
import PizzaList from "../components/pizzaList";

const Pizzarina = () => {
  const {pizza} = useContext(Context)
  
  console.log(pizza.pizzas)
    return (
    <Container>
     <Row className="mt-2">
      <PizzaList/>
     </Row>
    </Container>
  );
};

export default Pizzarina;
