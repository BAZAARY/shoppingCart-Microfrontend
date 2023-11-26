import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import ProductItem from "../components/ProductItem";
import { get_products } from "../connections/cartqueries";
import { getId } from "../components/helpers/getId";
import { useQuery} from "@apollo/client";
import { tw } from "twind";

const ShoppingCart = () => {
    const userId = getId()
    const [products, setProducts] = useState([]);
    const {loading, error, data} = useQuery(get_products, {
        variables:{
            usuario: userId
        },
        fetchPolicy: 'network-only'
    });

    useEffect(()=> {
        if(data && data.listuserproducts){
            setProducts(data.listuserproducts)
        }
    }, [data])

    if (loading) {
      return <LoadingPage />;
    }
  
    if (error) {
      console.error("Error:", error);
    }

    return(
        <div className={tw`overflow-auto flex flex-col items-center md:flex-row md:items-start`}>
            <div className={tw`mt-5 w-11/12 md:w-2/3 md:mt-20 md:ml-14`}>
                {products.map((item, index) => (
                    <ProductItem key={index} index={index} item={item} setProducts={setProducts} id={userId}/>
                ))}
            </div>
            <div className={tw`mt-5 w-11/12 md:flex md:justify-center md:mt-20 md:w-2/5`}>
                <div className={tw`rounded-lg shadow-xl h-44 mb-5 bg-[#d9d9d9] md:w-2/4 md:h-60 md:rounded-sm`}>

                </div>
            </div>
        </div>
    )
}


export default ShoppingCart;