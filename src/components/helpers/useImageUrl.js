import { useQuery } from "@apollo/client";
import { GET_IMAGE_ID } from "../../connections/queriesCatalogo";

function useImageUrl(productId){
    const {error, data} = useQuery(GET_IMAGE_ID, {
        variables:{
            productId
        }
    })
    if(error) return {error: error.message}
    if (data && data.getImageAIdWithProductId){
        const imageId = data.getImageAIdWithProductId
        const url = `https://drive.google.com/uc?id=${imageId}`
        console.log("Soy url", url)
        return {url}
    }
}

export default useImageUrl