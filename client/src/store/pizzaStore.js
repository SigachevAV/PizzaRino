import {GetPizzas} from '../http/pizzaApi'
import {makeAutoObservable} from "mobx";
export default class PizzaStore {
    constructor() {
        this._pizzas =[]
        console.log("pzapros")
        console.log(this._pizzas)
        makeAutoObservable(this)
    }

    setPizza(_pizza)
    {
        this._pizzas = _pizza
    }

    get pizzas()
    {
        return this._pizzas;
    }
}