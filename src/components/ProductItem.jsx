import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { deleteProduct } from "../connections/cartqueries";
import useImageUrl from "./helpers/useImageUrl";
import useNameandPrice from "./helpers/useNameandPrice";
import { toast } from "react-toastify";
import { tw } from "twind";

const ProductItem = ({item, index, id, setProducts}) => {
    const userId= id
    const [deleteItem] = useMutation(deleteProduct)
    const [quantity, setQuantity] = useState(1);
    const urlimagen = useImageUrl(String(item.producto))
    const nombreitem = useNameandPrice(String(item.producto))
    const precioitem = useNameandPrice(String(item.producto))
    
    // Eliminar producto
    const handledeleteProduct = (e, producto) => {
        e.preventDefault();
        deleteItem({
          variables: {
            usuario: userId,
            producto
          },
        }).then(() => {
            setProducts((prevProducts) => prevProducts.filter((p) => p !== item));
            console.log("Producto eliminado")
        })
        .catch(error => {
            console.error("Promesa rechazada:", error);
            toast.error('Hubo un error quitando tu producto... Intenta de nuevo');
        })
    };

    const increment = () =>{
        setQuantity(quantity+1)
    }

    const decrement = () =>{
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <>
            <div id={`Producto ${index}`} className={tw`rounded-lg shadow-xl w-full h-52 mb-5 bg-[#d9d9d9] md:h-60 md:rounded-sm`}>
                {urlimagen && nombreitem && precioitem ? (               
                    <div className={tw`grid grid-rows-4 grid-cols-3 grid-flow-row h-full`}> 
                        <img alt={`Imagen producto ${index}`} src={urlimagen.url} className={tw`row-start-1 row-end-4 self-center row-span-3 ml-4 rounded-2xl h-4/5 w-11/12`}/>
                        <div className={tw`row-start-4 ml-6 justify-center flex items-center border-gray-100`}>
                            <span className={tw`cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50`} onClick={decrement}> - </span>
                            <div className={tw`flex justify-center items-center h-8 w-16 border bg-white text-center text-xs outline-none`}>                                        
                                {quantity} 
                            </div>
                            <span className={tw`cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50`} onClick={increment}> + </span>
                        </div>                                    
                        <h2 className={tw`overflow-hidden whitespace-nowrap text-ellipsis row-start-1 col-span-2 text-xl text-center mt-4 self-start font-text ml-4`}> {nombreitem.nombre} </h2>
                        <h2 className={tw`whitespace-nowrap self-center row-start-2 ml-8 font-text text-lg`}> <span className={tw`text-green-500`}>Disponible: </span>  </h2>
                        <h2 className={tw`self-center text-right mr-9 row-start-2 ml-4 font-text text-lg`}>{precioitem.precio}</h2>
                        <div className={tw`flex items-center justify-center col-start-2 row-start-3 ml-4 col-span-2`}>
                            <button onClick={(e)=> handledeleteProduct(e, item.producto)} className={tw` w-10/12 h-3/4 rounded-lg font-text text-sm bg-[#fd9200]`}> Eliminar del carrito </button>
                        </div>
                        <div className={tw`flex items-center justify-center col-start-2 row-start-4 ml-4 col-span-2`}>
                            <button className={tw`w-10/12 h-3/4 rounded-lg font-text text-sm bg-[#fd9200`}> Guardar para más tarde </button>                                   
                        </div>
                    </div>
                ) : (
                    <div className={tw`flex h-full justify-center items-center`} role="status">
                    <svg aria-hidden="true" className={tw `w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600`} viewBox="0 0 100 101" fill="#FD9200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className={tw`sr-only`}>Loading...</span>
                </div>
                )}
            </div>               
        </>
    )
}

export default ProductItem;

