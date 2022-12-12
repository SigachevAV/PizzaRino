import {GepPizzaById, GetPizzas} from '../http/pizzaApi'
import {makeAutoObservable} from "mobx";
import { $host } from '../http/insex';
export default class PizzaStore {
    constructor() {
        this._pizzas =[]
        console.log("pzapros")
        console.log(this._pizzas)
        
        this._pizza_paks = [{"pizza":[{"id_pizza":1,"name_pizza":"пеперони","price_pizza":300,"image_name_pizza":"ada5bfda-4708-4a13-b491-4b952f728f7a.jpg","createdAt":"2022-12-08T14:25:05.794Z","updatedAt":"2022-12-08T14:25:05.794Z"}],"ingridient":[{"name_ingridient":"колбаса","price_ingridient":20,"is_basic":true},{"name_ingridient":"перцы","price_ingridient":28,"is_basic":false}]},
        {"pizza":[{"id_pizza":2,"name_pizza":"Маргарита","price_pizza":300,"image_name_pizza":"efd2ac25-9a46-48fa-be75-a07560508e46.jpg","createdAt":"2022-12-08T16:31:48.754Z","updatedAt":"2022-12-08T16:31:48.754Z"}],"ingridient":[{"name_ingridient":"перцы","price_ingridient":28,"is_basic":false},{"name_ingridient":"оливки","price_ingridient":60,"is_basic":true},{"name_ingridient":"грибы","price_ingridient":45,"is_basic":false},{"name_ingridient":"мацарела","price_ingridient":30,"is_basic":true}]},
        {"pizza":[{"id_pizza":3,"name_pizza":"злой русский","price_pizza":270,"image_name_pizza":"b716b588-8248-4102-aaad-e54678e75310.jpg","createdAt":"2022-12-08T16:34:04.665Z","updatedAt":"2022-12-08T16:34:04.665Z"}],"ingridient":[{"name_ingridient":"колбаса","price_ingridient":20,"is_basic":false},{"name_ingridient":"перцы","price_ingridient":28,"is_basic":true},{"name_ingridient":"грибы","price_ingridient":45,"is_basic":false}]},
        {"pizza":[{"id_pizza":4,"name_pizza":"4 сыра","price_pizza":250,"image_name_pizza":"4af14ce0-9b66-48f5-8da3-2e10fe4c8a8e.jpg","createdAt":"2022-12-08T16:36:23.449Z","updatedAt":"2022-12-08T16:36:23.449Z"}],"ingridient":[{"name_ingridient":"перцы","price_ingridient":28,"is_basic":false},{"name_ingridient":"оливки","price_ingridient":60,"is_basic":false},{"name_ingridient":"мацарела","price_ingridient":30,"is_basic":true}]}]
        console.log(this._pizza_paks)
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

    setPizza_paks(_pizza_paks)
    {
        console.log(_pizza_paks)
        this._pizza_paks = _pizza_paks
    }

    get pizza_paks()
    {
        //console.log('gettt')
        return this._pizza_paks
    }
}