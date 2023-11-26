import { gql } from "@apollo/client";

export const get_products = gql`
    query userProducts($usuario: Int!){
        listuserproducts(usuario:$usuario){
            producto
            cantidad
            estadoCompra    
        }
    }
`;

export const addProduct = gql`
    mutation addproduct($usuario: Int!, $producto: Int!){
        addproduct(usuario:$usuario, producto:$producto){
            producto
            cantidad
            estadoCompra
        }
    }
`;

export const deleteProduct = gql`
    mutation deleteproduct($usuario: Int!, $producto: Int!){
        deleteproduct(usuario:$usuario, producto:$producto)
    }
`;