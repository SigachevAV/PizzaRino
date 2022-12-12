import {$host} from "./insex";
export const GetPizzas = async () =>
{
    const {data} = await $host.get('api/main/all')
    return data
}
export const GepPizzaById = async (id)=>
{
    const {data} = await $host.get('api/pizza?id_pizza='+id)
    return data
}
export const MakeOrder = async(_price, _id, _extras) =>
{
    await $host.post('api/main/order?price_order='+_price+'&id='+_id+'&order_extras='+_extras)
}