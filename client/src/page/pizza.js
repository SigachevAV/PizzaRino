import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Row, Image, Form, FormCheck, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GepPizzaById, MakeOrder } from "../http/pizzaApi";
import { Context } from "../index";

const Pizza = () => {
  const {pizza} = useContext(Context)
  const {id} = useParams()
  const clik = async () =>
  {
    var tmp_price = pizza.pizza_paks[id-1].pizza[0].price_pizza
    var tmp_extras = ''
    neBas.forEach(element =>
      {
        if(order.get(element.name_ingridient) === true)
        {
          tmp_price+=element.price_ingridient
          tmp_extras+=element.name_ingridient+' @ '
        }
      })
    MakeOrder(tmp_price, pizza.pizza_paks[id-1].pizza[0].id_pizza, tmp_extras)
    console.log(order)
  }
  //GepPizzaById(id).then(data => pizza.setPizza_paks(data))

  
  

    var order = new Map()

  
  //console.log(pizza.pizza_paks[id-1])
var bas =[]
var neBas = []
pizza.pizza_paks[id-1].ingridient.forEach(element => {
  //console.log(element.is_basic)
  if(element.is_basic === true)
  {
    bas.push(element)
  }
  else{
    var tmp=element.name_ingridient + " : " + element.price_ingridient + "руб."
    order.set(element.name_ingridient, false)
    neBas.push(element)
  }
});
//console.log(bas)
console.log(pizza.pizza_paks[id-1].pizza[0].name_pizza)
  return (
    <Container>
      <Col>
        <Image width={150} height={150} src={'http://localhost:5000/' + pizza.pizza_paks[id-1].pizza[0].image_name_pizza}></Image>
        <div>{pizza.pizza_paks[id-1].pizza[0].name_pizza}</div>
        <div>{pizza.pizza_paks[id-1].pizza[0].price_pizza} руб.</div>
        <div>
        {
          bas.map(i => <div>{i.name_ingridient}</div>)
        }
        <Form>{
            neBas.map((ina) => <Form.Check label={ina.name_ingridient + ' : ' + ina.price_ingridient +'руб.'} key={ina.name_ingridient} onChange={() => order.set(ina.name_ingridient, (!order.get(ina.name_ingridient)))}/>)
        }
        <Button onClick={clik}>
          Заказать
        </Button>
        </Form>
        </div>
      </Col>
    </Container>
  );
};

export default Pizza;
