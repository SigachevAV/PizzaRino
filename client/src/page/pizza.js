import React, { useEffect, useState, useRef } from "react";
import { Container, Col, Row, Image, Form, FormCheck } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GepPizzaById } from "../http/pizzaApi";

const Pizza = () => {
  const [pizza_temp, setpizza_temp] = useState({info: []})
  const {id} = useParams()
  var pizza
  useState(() => {
    console.log('effect')
    GepPizzaById(id).then(data => pizza_temp(data))
    console.log(pizza_temp)

  }, [id])
  

    

  
  console.log(pizza_temp)
var bas =[]
var neBas = []
pizza.ingridient.forEach(element => {
  console.log(element.is_basic)
  if(element.is_basic === true)
  {
    bas.push(element)
  }
  else{
    var tmp=element.name_ingridient + " : " + element.price_ingridient + "руб."
    neBas.push(tmp)
  }
});
console.log(bas)
console.log(pizza.pizza[0].name_pizza)
  return (
    <Container>
      <Col>
        <Image width={150} height={150} src={pizza.pizza[0].image_name_pizza}></Image>
        <div>{pizza.pizza[0].name_pizza}</div>
        <div>{pizza.pizza[0].price_pizza} руб.</div>
        <div>
        {
          bas.map(i => <div>{i.name_ingridient}</div>)
        }
        <Form>{
            neBas.map((ina) => <Form.Check label={ina}/>)
        }</Form>
        </div>
      </Col>
    </Container>
  );
};

export default Pizza;
