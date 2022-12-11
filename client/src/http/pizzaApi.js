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