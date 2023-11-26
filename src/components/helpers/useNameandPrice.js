import { useQuery } from "@apollo/client";
import { GET_PRODUCT_NAME_AND_PRICE } from "../../connections/queriesCatalogo";

function useNameandPrice(productId){
    const {error, data} = useQuery(GET_PRODUCT_NAME_AND_PRICE, {
        variables:{
            productId
        }
    })
    if(error) return {error: error.message}
    if (data && data.getProductNameAndPriceWithId[0]){
        console.log(data)
        const nombre = data.getProductNameAndPriceWithId[0].name
        console.log("soy nombre", nombre)
        const precio = data.getProductNameAndPriceWithId[0].price
        console.log("soy precio", precio)
        return {nombre, precio}
    }
}

export default useNameandPrice